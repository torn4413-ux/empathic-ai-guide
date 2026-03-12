import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Process the auth callback from URL hash/params
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Auth callback error:", error.message);
          navigate("/login", { replace: true });
          return;
        }

        if (data.session) {
          navigate("/chat", { replace: true });
        } else {
          // Wait briefly for the auth state change listener to process
          setTimeout(async () => {
            const { data: retryData } = await supabase.auth.getSession();
            if (retryData.session) {
              navigate("/chat", { replace: true });
            } else {
              navigate("/login", { replace: true });
            }
          }, 1000);
        }
      } catch (err) {
        console.error("Auth callback exception:", err);
        navigate("/login", { replace: true });
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
        <p className="text-sm text-muted-foreground">ავტორიზაცია მიმდინარეობს...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
