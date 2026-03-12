import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordInput } from "@/components/PasswordInput";
import { toast } from "sonner";
import { Loader2, KeyRound } from "lucide-react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  useEffect(() => {
    // Check if we have a recovery session from the URL hash
    const hash = window.location.hash;
    if (hash.includes("type=recovery") || hash.includes("access_token")) {
      setChecking(false);
    } else {
      // Also check for existing session (user may already have recovery session)
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          setChecking(false);
        } else {
          toast.error("არასწორი ან ვადაგასული ბმული");
          navigate("/login", { replace: true });
        }
      });
    }
  }, [navigate]);

  const validate = () => {
    const e: typeof errors = {};
    if (!password) e.password = "პაროლი სავალდებულოა";
    else if (password.length < 8) e.password = "პაროლი მინიმუმ 8 სიმბოლო უნდა იყოს";
    if (!confirmPassword) e.confirmPassword = "გაიმეორეთ პაროლი";
    else if (password !== confirmPassword) e.confirmPassword = "პაროლები არ ემთხვევა";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        console.error("Update password error:", error.message);
        toast.error(error.message);
      } else {
        toast.success("პაროლი წარმატებით შეიცვალა!");
        navigate("/chat", { replace: true });
      }
    } catch (err) {
      console.error("Update password exception:", err);
      toast.error("კავშირის შეცდომა, სცადეთ თავიდან");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <KeyRound className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            ახალი პაროლი
          </CardTitle>
          <CardDescription>შეიყვანეთ ახალი პაროლი</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">ახალი პაროლი</Label>
              <PasswordInput
                id="password"
                placeholder="მინიმუმ 8 სიმბოლო"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                autoComplete="new-password"
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">გაიმეორეთ პაროლი</Label>
              <PasswordInput
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); setErrors((p) => ({ ...p, confirmPassword: undefined })); }}
                autoComplete="new-password"
              />
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              პაროლის შეცვლა
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
