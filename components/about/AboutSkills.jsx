"use client";
import React from "react";
import { 
  CheckCircle, 
  Cpu, 
  Layers, 
  PencilRuler, 
  Monitor 
} from "lucide-react";

const AboutSkills = () => {
  // সফটওয়্যার টুলস
  const tools = [
    { name: "Adobe Photoshop", level: "Advanced", icon: "Ps" },
    { name: "Adobe Illustrator", level: "Expert", icon: "Ai" },
    { name: "Adobe InDesign", level: "Intermediate", icon: "Id" },
    { name: "Figma", level: "Advanced", icon: "Fi" },
    { name: "Canva Pro", level: "Expert", icon: "Cv" },
    { name: "After Effects", level: "Basic", icon: "Ae" },
  ];

  // প্রফেশনাল এক্সপার্টিজ
  const expertise = [
    { skill: "Brand Identity Design", percent: 95 },
    { skill: "Social Media Marketing Design", percent: 90 },
    { skill: "Vector Illustration", percent: 85 },
    { skill: "Typography & Layout", percent: 80 },
    { skill: "Print & Editorial Design", percent: 88 },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Professional Expertise (Progress Bars) */}
          <div>
            <span className="text-[#FF4D21] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              My Professional <br /> 
              <span className="text-gray-500 font-light italic">Expertise.</span>
            </h2>

            <div className="space-y-8">
              {expertise.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-medium flex items-center gap-2">
                      <CheckCircle size={18} className="text-[#FF4D21]" />
                      {item.skill}
                    </h4>
                    <span className="text-[#FF4D21] font-mono">{item.percent}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e] rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Software Tools (Grid) */}
          <div className="bg-[#141414]/50 backdrop-blur-xl border border-white/5 p-10 rounded-[3rem]">
            <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-[#FF4D21]/10 rounded-2xl text-[#FF4D21]">
                    <Cpu size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white">Software Toolkit</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#FF4D21]/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-[#FF4D21] font-bold text-xl group-hover:bg-[#FF4D21] group-hover:text-black transition-colors duration-300">
                      {tool.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{tool.name}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{tool.level}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Design Philosophy Note */}
            <div className="mt-10 p-6 rounded-2xl bg-[#FF4D21]/5 border border-[#FF4D21]/10">
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  "Tools change, but the principles of good design remain the same. I focus on mastering the craft, not just the software."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSkills;