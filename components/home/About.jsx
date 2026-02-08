"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image/Visual Element */}
          <div className="relative group">
            {/* Decorative Frames */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#FF4D21] z-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#FF4D21] z-20"></div>
            
            {/* Image Wrapper */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#141414] border border-white/10">
              <img 
                src="/home abdullah Profile.png" 
                alt="Abdullah Sifat"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#FF4D21]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Experience Box */}
            <div className="absolute -bottom-8 -left-8 md:bottom-10 md:-left-10 bg-[#141414] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
              <h4 className="text-4xl font-bold text-[#FF4D21]">03+</h4>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Years of <br /> Experience</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Passionate Designer <br /> 
              <span className="text-gray-500 italic font-light leading-snug">
                Turning Visions into Reality
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Abdullah Sifat</span>, a Graphic Designer driven by the power of visual communication. I specialize in creating brand identities that resonate and digital assets that capture attention.
              </p>
              <p>
                My approach is simple: understand the core message and translate it into a language that speaks to people's emotions. Whether it's a minimal logo or a complex campaign, I focus on balance, color theory, and modern aesthetics.
              </p>
            </div>

            {/* Quick Stats/Skills Tags */}
            <div className="flex flex-wrap gap-4 mt-10">
              {["Photoshop", "Illustrator", "Branding", "Creative Strategy"].map((skill) => (
                <span key={skill} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>

            {/* Call to Action */}
            <Link href="#contact" className="mt-12 inline-flex items-center gap-3 text-white group font-bold text-lg">
              Download My CV
              <div className="w-12 h-12 rounded-full bg-[#FF4D21] flex items-center justify-center group-hover:w-16 transition-all duration-300">
                <MoveRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;