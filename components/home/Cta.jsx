"use client";
import React from "react";
import { MoveUpRight, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

const AboutCTA = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D21]/15 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-[#141414]/80 backdrop-blur-2xl border border-white/5 p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF4D21]/20 rounded-tl-[4rem]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF4D21]/20 rounded-br-[4rem]"></div>

          <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-8 block">
            Ready to start?
          </span>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
            Let's turn your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
              vision into reality.
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            I am currently available for new projects and collaborations. Let's start discussing your idea
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Action */}
            <Link href="#" className="w-full sm:w-auto">
              <button className="w-full group bg-[#FF4D21] hover:bg-[#e6451e] text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-xl transition-all duration-300 shadow-[0_10px_30px_rgba(255,77,33,0.3)] hover:-translate-y-1">
                Contact Now
                <MoveUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>

            {/* Secondary Action */}
            <Link href="https://wa.me/yournumber" className="w-full sm:w-auto">
              <button className="w-full bg-[#08CB00] shadow-emerald-500 hover:shadow-2xl text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1">
                <MessageCircle size={22} />
                WhatsApp
              </button>
            </Link>
          </div>

          {/* Availability Note */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
              Available for freelance work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;