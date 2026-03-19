import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import doctorImg from "@/assets/avatar.png";
import {
  EmpatheticListeningIcon,
  EvidenceBasedGuidanceIcon,
  PrivateSafeIcon,
  ExplainFeelingsIcon,
  ReceiveGuidanceIcon,
  GrowthProgressIcon,
} from "@/components/WellbeingIcons";

const Index = () => {
  const navigate = useNavigate();

  const handleStart = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Session check error:", error);
      navigate("/login");
      return;
    }

    if (data.session) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ECE7E0] px-4 py-6">
      <div className="absolute left-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#9DB7A4] opacity-25 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] h-[260px] w-[260px] rounded-full bg-[#CDBDAD] opacity-25 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-6 text-center">
          <div className="mb-3 flex justify-center">
            <div className="h-24 w-24 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
              <img
                src={doctorImg}
                alt="Doctor"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl font-semibold tracking-[-0.01em] text-[#587463] md:text-3xl">
            MindListener
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#5F645F] md:text-sm">
            Your compassionate AI guide for emotional clarity, support, and
            personal growth.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-3xl gap-3 md:grid-cols-3">
          <div className="group rounded-2xl border border-white/40 bg-white/65 p-3 text-center shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <EmpatheticListeningIcon className="mx-auto mb-2 h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xs font-semibold text-[#1F1F1F] md:text-sm">
              Empathetic Listening
            </h3>
            <p className="mt-1 text-[11px] leading-4 text-[#4F4F4F]">
              AI that listens with genuine care, any time.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/40 bg-white/65 p-3 text-center shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <EvidenceBasedGuidanceIcon className="mx-auto mb-2 h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xs font-semibold text-[#1F1F1F] md:text-sm">
              Evidence-Based Guidance
            </h3>
            <p className="mt-1 text-[11px] leading-4 text-[#4F4F4F]">
              Insights drawn from established wellness practices.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/40 bg-white/65 p-3 text-center shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
            <PrivateSafeIcon className="mx-auto mb-2 h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-xs font-semibold text-[#1F1F1F] md:text-sm">
              Private & Safe Conversations
            </h3>
            <p className="mt-1 text-[11px] leading-4 text-[#4F4F4F]">
              Your data and words are secure and confidential.
            </p>
          </div>
        </div>

        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#2B362F]">
            How It Works
          </h2>
        </div>

        <div className="mx-auto mb-6 grid max-w-3xl gap-4 text-center md:grid-cols-3">
          <div>
            <ExplainFeelingsIcon className="mx-auto mb-2 h-16 w-16" />
            <p className="text-xs font-medium text-[#1F1F1F] md:text-sm">
              1. Explain Your Feelings
            </p>
          </div>

          <div>
            <ReceiveGuidanceIcon className="mx-auto mb-2 h-16 w-16" />
            <p className="text-xs font-medium text-[#1F1F1F] md:text-sm">
              2. Receive Guidance
            </p>
          </div>

          <div>
            <GrowthProgressIcon className="mx-auto mb-2 h-16 w-16" />
            <p className="text-xs font-medium text-[#1F1F1F] md:text-sm">
              3. Grow & Track Progress
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleStart}
            className="relative overflow-hidden rounded-full bg-[#6F8F7D] px-7 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#648371] hover:shadow-lg"
          >
            <span className="relative z-10">Start Conversation</span>
            <span className="absolute inset-0 bg-white opacity-0 transition hover:opacity-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;