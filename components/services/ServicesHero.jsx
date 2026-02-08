"use client";
import React from "react";
import { Sparkles } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden min-h-[60vh] flex items-center">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4D21]/10 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles size={16} className="text-[#FF4D21]" />
            <span className="text-gray-300 text-xs font-medium uppercase tracking-[0.3em]">
              Premium Design Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Elevate your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
              Visual Presence.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl leading-relaxed mb-10">
            I design your brand in a way that catches people's eyes and sticks in their minds. From logos to full branding—it's all here.
          </p>

          {/* Quick Stats for Services */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 border-t border-white/5 pt-10">
             <div>
                <h4 className="text-[#FF4D21] text-2xl font-bold">100%</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Custom Work</p>
             </div>
             <div className="w-px h-10 bg-white/10 hidden md:block"></div>
             <div>
                <h4 className="text-[#FF4D21] text-2xl font-bold">Vector</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">High Quality</p>
             </div>
             <div className="w-px h-10 bg-white/10 hidden md:block"></div>
             <div>
                <h4 className="text-[#FF4D21] text-2xl font-bold">Modern</h4>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Aesthetics</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;