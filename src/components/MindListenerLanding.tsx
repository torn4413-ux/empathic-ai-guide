import React from 'react';
import { Heart, Brain, Shield, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';

const MindListenerLanding = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-[#84A59D]" />,
      title: "Empathetic Listening",
      text: "AI that listens with genuine care, any time."
    },
    {
      icon: <Brain className="w-6 h-6 text-[#84A59D]" />,
      title: "Evidence-Based Guidance",
      text: "Insights drawn from established wellness practices."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#84A59D]" />,
      title: "Private & Safe Conversations",
      text: "Your data and words are secure and confidential."
    }
  ];

  const steps = [
    {
      id: "01",
      icon: <MessageCircle className="w-10 h-10 text-[#84A59D]" />,
      title: "Explain Your Feelings"
    },
    {
      id: "02",
      icon: <Sparkles className="w-10 h-10 text-[#84A59D]" />,
      title: "Receive Guidance"
    },
    {
      id: "03",
      icon: <TrendingUp className="w-10 h-10 text-[#84A59D]" />,
      title: "Grow & Track Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#4A4A4A] relative overflow-hidden selection:bg-[#D8E2DC]">
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#A3B18A] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-[#E6D5B8] opacity-20 blur-[100px] rounded-full" />

      <div className="absolute top-8 left-8 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#84A59D" strokeWidth="1">
          <path d="M50 20C50 20 30 45 30 65C30 75 40 85 50 85C60 85 70 75 70 65C70 45 50 20 50 20Z" />
          <path d="M50 35C50 35 15 50 15 70C15 80 25 88 35 88C45 88 50 80 50 80" />
          <path d="M50 35C50 35 85 50 85 70C85 80 75 88 65 88C55 88 50 80 50 80" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <header className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform hover:scale-105 duration-500">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256"
              alt="AI Companion Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#2C3E50]">
              Mind<span className="font-medium">Listener</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#7F8C8D] font-light max-w-2xl mx-auto">
              Your Compassionate AI Guide to Emotional Well-being.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 group"
            >
              <div className="bg-[#F8F9F5] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#84A59D]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#34495E]">{feature.title}</h3>
              <p className="text-[#95A5A6] leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </section>

        <section className="text-center mb-28">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#84A59D] mb-16">
            HOW IT WORKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-4xl font-black text-[#E9ECEF] z-0 select-none">
                    {step.id}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-[#2C3E50]">{step.title}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="flex justify-center pb-20">
          <button className="group relative px-14 py-5 bg-[#84A59D] text-white rounded-full font-medium text-lg shadow-[0_10px_30px_rgba(132,165,157,0.3)] hover:shadow-[0_15px_40px_rgba(132,165,157,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Start Conversation
              <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
          </button>
        </section>
      </div>

      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
        <svg width="400" height="200" viewBox="0 0 400 200">
          <path d="M0,150 Q100,50 200,150 T400,150" fill="none" stroke="#84A59D" strokeWidth="2" />
          <path d="M0,170 Q100,70 200,170 T400,170" fill="none" stroke="#84A59D" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default MindListenerLanding;