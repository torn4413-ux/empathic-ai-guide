import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError("ელ-ფოსტა სავალდებულოა"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("არასწორი ელ-ფოსტა"); return; }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        console.error("Reset password error:", error.message);
        toast.error(error.message);
      } else {
        setSent(true);
        toast.success("პაროლის აღდგენის ბმული გამოგზავნილია!");
      }
    } catch (err) {
      console.error("Reset password exception:", err);
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
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            პაროლის აღდგენა
          </CardTitle>
          <CardDescription>
            {sent
              ? "გთხოვთ შეამოწმოთ ელ-ფოსტა"
              : "შეიყვანეთ ელ-ფოსტა პაროლის აღსადგენად"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="space-y-4 text-center">
              <p className="text-sm text-muted-foreground">
                პაროლის აღდგენის ბმული გამოგზავნილია <strong>{email}</strong>-ზე.
                გთხოვთ შეამოწმოთ ელ-ფოსტა და მიყევით ინსტრუქციას.
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full gap-2">
                  <ArrowLeft className="h-4 w-4" /> შესვლის გვერდზე დაბრუნება
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ელ-ფოსტა</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  autoComplete="email"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                ბმულის გაგზავნა
              </Button>
              <Link to="/login" className="block text-center text-sm text-primary hover:underline">
                <ArrowLeft className="mr-1 inline h-3 w-3" />
                შესვლის გვერდზე დაბრუნება
              </Link>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
