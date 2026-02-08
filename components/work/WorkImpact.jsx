"use client";
import React from "react";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const WorkImpact = () => {
  const impacts = [
    {
      title: "Brand Engagement",
      value: "85%",
      desc: "Client engagement has increased by an average of 85% through the social media designs I create.",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Client Retention",
      value: "10/10",
      desc: "At the end of each project, clients have expressed complete satisfaction with the quality of my work and communication.",
      icon: <Target size={24} />,
    },
    {
      title: "Growth Impact",
      value: "2X",
      desc: "After getting a new brand identity, the brand value of the startups has doubled compared to before.",
      icon: <Zap size={24} />,
    },
    {
      title: "Community Reach",
      value: "50K+",
      desc: "My designs have reached more than 50,000 people on various platforms.",
      icon: <Users size={24} />,
    },
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
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">
            The Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Design that drives <br />
            <span className="text-gray-500 italic">Real Results.</span>
          </h2>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-xl border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FF4D21] mb-6 group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              
              <div className="mb-4">
                <h4 className="text-4xl font-black text-white group-hover:text-[#FF4D21] transition-colors">
                  {item.value}
                </h4>
                <p className="text-[#FF4D21] text-xs font-bold uppercase tracking-widest mt-1">
                  {item.title}
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-300 text-lg md:text-xl text-center md:text-left">
            "Do you want to make that kind of impact with your next project?"
          </p>
          <button className="px-8 py-4 bg-[#FF4D21] text-white font-bold rounded-2xl hover:bg-[#e6451e] transition-all shadow-[0_10px_20px_rgba(255,77,33,0.2)]">
            Let's Make it Happen
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkImpact;