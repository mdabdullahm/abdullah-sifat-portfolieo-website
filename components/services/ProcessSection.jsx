"use client";
import React from "react";
import { 
  Search, 
  Lightbulb, 
  PenTool, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "First, I discuss your brand, goals, and audience in detail so that the main purpose of the work is clear.",
      icon: <Search size={30} />,
    },
    {
      id: "02",
      title: "Concept & Research",
      desc: "We research your ideas and create some unique concepts and sketches that are consistent with your brand.",
      icon: <Lightbulb size={30} />,
    },
    {
      id: "03",
      title: "Design Execution",
      desc: "I started working on the software (Ps/Ai/Fi) with the best concept and gave it a professional visual look.",
      icon: <PenTool size={30} />,
    },
    {
      id: "04",
      title: "Review & Handover",
      desc: "After revision according to your feedback, we deliver the project in all types of source files and high-quality formats.",
      icon: <CheckCircle size={30} />,
    },
  ];

  return (
    <section className="py-15 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
            Work Flow
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            How I Bring Your <br />
            <span className="text-gray-500 italic">Ideas to Life.</span>
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4D21]/30 to-transparent -translate-y-12"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2.5rem] bg-[#141414]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-[#FF4D21] flex items-center justify-center text-[#FF4D21] font-bold text-xl mb-8 relative z-10 group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,77,33,0.2)]">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-6 text-gray-500 group-hover:text-white transition-colors duration-500">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>

              {/* Decorative Arrow (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] text-white/10 group-hover:text-[#FF4D21]/30 transition-colors">
                    <ArrowRight size={30} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 p-8 rounded-3xl bg-[#FF4D21]/5 border border-[#FF4D21]/10 text-center max-w-2xl mx-auto">
            <p className="text-gray-300 italic font-medium">
              "My goal is to make the design process as smooth and transparent as possible for every client."
            </p>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;