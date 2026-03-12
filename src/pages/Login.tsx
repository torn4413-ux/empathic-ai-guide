import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordInput } from "@/components/PasswordInput";
import { GoogleAuthButton } from "@/components/GoogleAuthButton";
import { toast } from "sonner";
import { Loader2, Brain } from "lucide-react";

const Login = () => {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/chat" replace />;
  }

  const validate = () => {
    const e: typeof errors = {};
    if (!email.trim()) e.email = "ელ-ფოსტა სავალდებულოა";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "არასწორი ელ-ფოსტა";
    if (!password) e.password = "პაროლი სავალდებულოა";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) {
        console.error("Login error:", error.message);
        if (error.message.includes("Invalid login")) {
          toast.error("არასწორი ელ-ფოსტა ან პაროლი");
        } else if (error.message.includes("Email not confirmed")) {
          toast.error("გთხოვთ დაადასტუროთ ელ-ფოსტა");
        } else {
          toast.error(error.message);
        }
      } else {
        navigate("/chat", { replace: true });
      }
    } catch (err) {
      console.error("Login exception:", err);
      toast.error("კავშირის შეცდომა, სცადეთ თავიდან");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            შესვლა
          </CardTitle>
          <CardDescription>გაგრძელეთ MindListener-ში</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ელ-ფოსტა</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                autoComplete="email"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">პაროლი</Label>
                <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                  დაგავიწყდა პაროლი?
                </Link>
              </div>
              <PasswordInput
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                autoComplete="current-password"
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              შესვლა
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">ან</span>
            </div>
          </div>

          <GoogleAuthButton />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            არ გაქვთ ანგარიში?{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">
              რეგისტრაცია
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
