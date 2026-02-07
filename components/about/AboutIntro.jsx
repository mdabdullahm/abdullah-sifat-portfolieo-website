"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const AboutIntro = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Image Holder */}
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-[#FF4D21]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-[#141414]">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                alt="Abdullah Sifat - Graphic Designer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-[#FF4D21] text-white p-8 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="block text-4xl font-black italic">03+</span>
                <span className="text-xs uppercase font-bold tracking-widest">Years of <br /> Designing</span>
            </div>
          </div>

          {/* Right Side: Narrative Text */}
          <div className="flex flex-col">
            <span className="text-[#FF4D21] font-bold tracking-[0.3em] uppercase text-sm mb-6">
              Story of Sifat
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Crafting <span className="text-gray-500 italic font-light">Bold</span> <br /> 
              Digital Identities.
            </h1>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                Hello! I'm <span className="text-white font-semibold">Abdullah Sifat</span>. My journey into the world of design began with a simple curiosity about how visuals shape our perceptions. Over the past 3+ years, that curiosity has turned into a professional obsession.
              </p>
              <p>
                I don’t just "make things look good." I solve problems through design. Whether it's building a brand from scratch or creating marketing materials that convert, my focus is always on **Impact, Simplicity, and Storytelling.**
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Modern Aesthetics",
                "Strategic Branding",
                "Attention to Detail",
                "Pixel Perfect Designs"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-[#FF4D21]" />
                  {item}
                </div>
              ))}
            </div>

            {/* Quote / Sign-off */}
            <div className="p-6 border-l-4 border-[#FF4D21] bg-white/5 rounded-r-2xl italic text-gray-300">
              "Design is the silent ambassador of your brand." — My philosophy as a designer.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;