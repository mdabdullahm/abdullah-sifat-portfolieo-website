"use client";
import React, { useState } from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(1);

  const plans = [
    {
      name: "Starter",
      price: "20",
      description: "Perfect for starting",
      icon: <Zap size={24} />,
      features: ["05 Creative Ads", "High-Res Files(PNG, JPG & PDF)", "01 Revisions", "02 Days Delivery", "Priority Support"],
    },
    {
      name: "Professional",
      price: "60",
      description: "Full premium solution.",
      icon: <Crown size={24} />,
      features: ["15 Creative Ads", "High-Res Files(PNG, JPG, PDF & PSD)", "03 Revisions", "04 Days Delivery", "Priority Support"],
    },
    {
      name: "Standard",
      price: "45",
      description: "Best for growing brands.",
      icon: <Rocket size={24} />,
      features: ["10 Creative Ads", "High-Res Files(PNG, JPG, PDF & PSD)", "02 Revisions", "03 Days Delivery", "Priority Support"],
    },
  ];

  return (
    <section className="py-15 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Choose your <span className="text-gray-500 italic">Package.</span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isActive = activePlan === index;

            return (
              <div 
                key={index}
                onClick={() => setActivePlan(index)} // ক্লিক করলে একটিভ হবে
                className={`cursor-pointer relative p-8 rounded-[2rem] border transition-all duration-500 flex flex-col h-fit ${
                  isActive 
                  ? "bg-[#141414] border-[#FF4D21] shadow-[0_0_30px_rgba(255,77,33,0.15)] scale-100" 
                  : "bg-[#141414]/40 backdrop-blur-md border-white/5 hover:border-white/20 scale-95 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#FF4D21] rounded-full animate-pulse"></div>
                )}

                {/* Plan Icon & Name */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${
                    isActive ? "bg-[#FF4D21] text-black" : "bg-white/5 text-[#FF4D21]"
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${isActive ? "text-white" : "text-gray-400"}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-black transition-colors ${isActive ? "text-white" : "text-gray-500"}`}>
                    ${plan.price}
                  </span>
                </div>

                {/* Features List (Small Text) */}
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                      <Check size={16} className={isActive ? "text-[#FF4D21]" : "text-gray-600"} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  isActive 
                  ? "bg-[#FF4D21] text-white shadow-lg" 
                  : "bg-white/5 text-gray-500 border border-white/10"
                }`}>
                  Select Plan
                </button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-sm text-gray-600">
            Click on a card to see the plan details and highlight it.
        </div>
      </div>
    </section>
  );
};

export default Pricing;