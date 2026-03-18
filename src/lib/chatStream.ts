import { supabase } from "@/integrations/supabase/client";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const CHAT_URL = `${SUPABASE_URL}/functions/v1/chat`;

export async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      onError("Supabase env ცვლადები არ არის სწორად შევსებული.");
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${session?.access_token ?? SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });

    if (!resp.ok) {
      let errorMessage = "შეცდომა მოხდა, სცადეთ თავიდან.";

      try {
        const data = await resp.json();
        errorMessage =
          data?.error ||
          data?.message ||
          `Server error: ${resp.status}`;
      } catch {
        try {
          const text = await resp.text();
          if (text) errorMessage = text;
        } catch {
          errorMessage = `Server error: ${resp.status}`;
        }
      }

      onError(errorMessage);
      return;
    }

    if (!resp.body) {
      onError("სტრიმინგი ვერ დაიწყო.");
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let idx: number;
      while ((idx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line.startsWith("data: ")) continue;

        const json = line.slice(6).trim();

        if (json === "[DONE]") {
          onDone();
          return;
        }

        try {
          const parsed = JSON.parse(json);
          const content = parsed?.choices?.[0]?.delta?.content;

          if (content) {
            onDelta(content);
          }
        } catch {
          buffer = line + "\n" + buffer;
          break;
        }
      }
    }

    onDone();
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "კავშირის შეცდომა, სცადეთ თავიდან.";
    onError(message);
  }
}