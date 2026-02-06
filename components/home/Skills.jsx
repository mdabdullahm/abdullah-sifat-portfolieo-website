"use client";
import React from "react";

const Skills = () => {
  const tools = [
    { name: "Adobe Photoshop", level: "95%", icon: "Ps" },
    { name: "Adobe Illustrator", level: "90%", icon: "Ai" },
    { name: "Adobe InDesign", level: "80%", icon: "Id" },
    { name: "After Effects", level: "75%", icon: "Ae" },
    { name: "Figma", level: "85%", icon: "Fi" },
    { name: "Canva Pro", level: "95%", icon: "Cv" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm">
            My Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Professional <span className="text-gray-500">Skills & Tools</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-[#141414]/60 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-6">
                {/* Tool Icon Style */}
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#FF4D21] font-bold text-xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {tool.icon}
                </div>
                <span className="text-white/50 font-mono text-sm">{tool.level}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{tool.name}</h3>

              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#FF4D21] rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ width: tool.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            Always learning and evolving with the latest design trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;