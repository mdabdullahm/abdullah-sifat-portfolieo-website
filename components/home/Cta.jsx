"use client";
import React from "react";
import { MoveUpRight, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF4D21]/10 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#141414]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          
          {/* Corner Badge */}
          <div className="hidden md:flex absolute top-12 right-12 w-32 h-32 items-center justify-center border border-[#FF4D21]/30 rounded-full animate-spin-slow">
             <div className="text-[#FF4D21] text-xs font-bold tracking-widest uppercase">
                • Let's Work • Together 
             </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <span className="text-[#FF4D21] font-medium tracking-[0.3em] uppercase text-sm mb-6 block">
              Have a project in mind?
            </span>
            
            <h2 className="text-5xl md:text-8xl text-white mb-10 leading-[1.1] tracking-tighter">
              Let’s create something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
                extraordinary
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              I am ready to turn your ideas into reality. Let's start something new together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary CTA */}
              <Link href="mailto:contact@sifat.com" className="w-full sm:w-auto">
                <button className="w-full group bg-[#FF4D21] hover:bg-[#e6451e] text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-xl transition-all duration-300 shadow-[0_0_30px_rgba(255,77,33,0.3)]">
                  Start a Project
                  <MoveUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>

              {/* Secondary CTA */}
              <Link href="#contact" className="w-full sm:w-auto">
                <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3">
                  <MessageSquare size={22} />
                  Let's Chat
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Cta;