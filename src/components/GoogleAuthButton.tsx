import { useState } from "react";
import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export function GoogleAuthButton({
  label = "Google-ით გაგრძელება",
}: {
  label?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleGoogleAuth = async () => {
    setLoading(true);

    try {
      const result = await lovable.auth.signInWithOAuth("google");

      if (result.error) {
        console.error("Google OAuth error:", result.error);
        toast.error("Google-ით ავტორიზაცია ვერ მოხერხდა");
      }
    } catch (err) {
      console.error("Google OAuth exception:", err);
      toast.error("Google-ით ავტორიზაცია ვერ მოხერხდა");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full gap-2"
      onClick={handleGoogleAuth}
      disabled={loading}
    >
      {loading ? "იტვირთება..." : label}
    </Button>
  );
}