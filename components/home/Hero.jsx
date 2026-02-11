"use client";
import React, { useState } from "react";
import { ArrowRight, Palette, Layout, MousePointer2 } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [activeButton, setActiveButton] = useState("projects");

  const baseStyle = "group relative px-8 py-4 rounded-2xl font-bold overflow-hidden transition-all duration-300";
  
  const activeStyle = "bg-[#FF4D21] text-white hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,77,33,0.3)]";
  const inactiveStyle = "bg-white/5 text-white border border-white/10 hover:bg-white/10";

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF4D21]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF4D21]/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D21] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D21]"></span>
          </span>
          <span className="text-gray-300 text-xs md:text-sm font-medium uppercase tracking-widest">
            Available for freelance work
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
          Turning Ideas into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
            Visual Masterpieces
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Abdullah Sifat</span>. 
          A specialized Graphic Designer focused on creating impactful brand identities 
          and modern digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link href="#work">
            <button 
              onClick={() => setActiveButton("projects")}
              className={`${baseStyle} ${activeButton === "projects" ? activeStyle : inactiveStyle}`}
            >
              <span className="flex items-center gap-2">
                View My Projects
                <ArrowRight size={20} className={`transition-transform ${activeButton === "projects" ? "group-hover:translate-x-1" : ""}`} />
              </span>
            </button>
          </Link>
          
          <Link href="/contact">
            <button 
              onClick={() => setActiveButton("hire")}
              className={`${baseStyle} ${activeButton === "hire" ? activeStyle : inactiveStyle}`}
            >
              Hire Me
            </button>
          </Link>

        </div>

        {/* Floating Icons */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <Palette className="text-white" size={32} />
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Branding</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Layout className="text-white" size={32} />
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">UI Design</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MousePointer2 className="text-white" size={32} />
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Typography</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;