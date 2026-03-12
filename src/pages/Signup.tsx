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

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup = () => {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

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
    const e: FormErrors = {};
    if (!fullName.trim()) e.fullName = "სახელი სავალდებულოა";
    if (!email.trim()) e.email = "ელ-ფოსტა სავალდებულოა";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "არასწორი ელ-ფოსტა";
    if (!password) e.password = "პაროლი სავალდებულოა";
    else if (password.length < 8) e.password = "პაროლი მინიმუმ 8 სიმბოლო უნდა იყოს";
    if (!confirmPassword) e.confirmPassword = "გაიმეორეთ პაროლი";
    else if (password !== confirmPassword) e.confirmPassword = "პაროლები არ ემთხვევა";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: fullName.trim() },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) {
        console.error("Signup error:", error.message);
        if (error.message.includes("already registered")) {
          toast.error("ეს ელ-ფოსტა უკვე რეგისტრირებულია");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("რეგისტრაცია წარმატებულია! გთხოვთ შეამოწმოთ ელ-ფოსტა დადასტურებისთვის.");
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.error("Signup exception:", err);
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
            რეგისტრაცია
          </CardTitle>
          <CardDescription>შექმენით ანგარიში MindListener-ში</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">სრული სახელი</Label>
              <Input
                id="fullName"
                placeholder="თქვენი სახელი"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); clearError("fullName"); }}
                autoComplete="name"
              />
              {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">ელ-ფოსტა</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                autoComplete="email"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">პაროლი</Label>
              <PasswordInput
                id="password"
                placeholder="მინიმუმ 8 სიმბოლო"
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearError("password"); }}
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
                onChange={(e) => { setConfirmPassword(e.target.value); clearError("confirmPassword"); }}
                autoComplete="new-password"
              />
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              რეგისტრაცია
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

          <GoogleAuthButton label="Google-ით რეგისტრაცია" />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            უკვე გაქვთ ანგარიში?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              შესვლა
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
