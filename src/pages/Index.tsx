import { Heart, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import avatarImg from "@/assets/avatar.png";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-secondary shadow-lg">
            <img
              src={avatarImg}
              alt="Dr. Maya — AI ფსიქოლოგი"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">MindListener</h1>
          <p className="mt-2 text-muted-foreground">
            შენი AI თანამგზავრი ემოციური კეთილდღეობისთვის
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-3">
          <FeatureCard
            icon={Heart}
            title="ემპათიური მოსმენა"
            description="უსაფრთხო სივრცე შენი გრძნობების გამოსახატად, განსჯის გარეშე"
          />
          <FeatureCard
            icon={Brain}
            title="მტკიცებულებებზე დაფუძნებული მხარდაჭერა"
            description="ფსიქოლოგიურ პრინციპებსა და აქტიურ მოსმენაზე დაფუძნებული"
          />
          <FeatureCard
            icon={Shield}
            title="კონფიდენციალური და უსაფრთხო"
            description="შენი საუბრები დაცულია და კონფიდენციალურია"
          />
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl bg-disclaimer p-5 text-center text-sm text-disclaimer-foreground">
          <strong>მნიშვნელოვანი:</strong> MindListener არის AI თანამგზავრი და არ
          ანაცვლებს ლიცენზირებულ ფსიქოთერაპევტს. იგი გთავაზობთ მხარდამჭერ
          საუბარს და დაძლევის სტრატეგიებს, მაგრამ ვერ ჩაანაცვლებს
          პროფესიონალურ ფსიქოლოგიურ დახმარებას. კრიზისის შემთხვევაში, გთხოვთ
          დაუკავშირდეთ ფსიქოლოგს ან გადაუდებელი დახმარების სამსახურს.
        </div>

        {/* CTA Button */}
        <Button className="w-full py-6 text-lg font-semibold" size="lg">
          დაიწყე მოგზაურობა
        </Button>
      </div>
    </div>
  );
};

export default Index;
