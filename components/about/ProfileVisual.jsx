"use client";
import React from "react";
import { MousePointer2, Palette, PenTool, Layout } from "lucide-react";

const ProfileVisual = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          
          {/* Main Visual Container */}
          <div className="relative w-full max-w-2xl aspect-square md:aspect-video flex items-center justify-center">
            
            {/* Rotating Outer Ring */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-2 border-dashed border-[#FF4D21]/30 rounded-full animate-spin-slow"></div>
            
            {/* Inner Glow */}
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#FF4D21]/20 blur-[100px] rounded-full"></div>

            {/* Profile Image with Border Magic */}
            <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-4 border-[#141414] shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" 
                  alt="Sifat Profile" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF4D21]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Floating Design Elements (Illustration Style) */}
            
            {/* Tool 1: Pen Tool */}
            <div className="absolute top-10 left-10 md:top-20 md:left-20 bg-[#141414] p-4 rounded-2xl border border-white/10 text-[#FF4D21] animate-bounce-slow shadow-xl">
              <PenTool size={32} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full border-2 border-[#FF4D21]"></div>
            </div>

            {/* Tool 2: Color Palette */}
            <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 bg-[#141414] p-4 rounded-2xl border border-white/10 text-[#FF4D21] animate-bounce-slow delay-700 shadow-xl">
              <Palette size={32} />
              <div className="mt-2 flex gap-1">
                <div className="w-2 h-2 bg-[#FF4D21] rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>

            {/* Tool 3: Mouse Pointer */}
            <div className="absolute top-1/4 right-0 md:right-10 bg-[#FF4D21] p-3 rounded-full text-white animate-pulse shadow-[0_0_20px_rgba(255,77,33,0.5)]">
              <MousePointer2 size={24} />
            </div>

            {/* Floating Tag: "Creative Mind" */}
            <div className="absolute bottom-0 left-0 md:left-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-white font-mono text-sm tracking-tighter">
              <span className="text-[#FF4D21] mr-2">●</span> Creative_Mind.exe
            </div>

          </div>

          {/* Bottom Heading for Illustration */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Blending Art with <span className="text-[#FF4D21]">Technology</span>
            </h3>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold">
              Visual Strategy & Digital Craftsmanship
            </p>
          </div>

        </div>
      </div>

      {/* Animation Classes */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProfileVisual;