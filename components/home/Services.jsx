"use client";
import React from "react";
import { 
  Palette, 
  Layers, 
  Megaphone, 
  PenTool,
  ArrowUpRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Brand Identity",
      description: "Creating the most unique logo and brand guidelines that will set your brand apart from others.",
      icon: <Palette size={32} />,
    },
    {
      title: "Social Media Design",
      description: "Eye-catching post and ad designs for Facebook, Instagram or LinkedIn.",
      icon: <Megaphone size={32} />,
    },
    {
      title: "Vector Illustration",
      description: "Custom digital illustrations and vector art as per project requirements.",
      icon: <PenTool size={32} />,
    },
    {
      title: "Print & Packaging",
      description: "From business cards, flyers to premium product packaging design.",
      icon: <Layers size={32} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect (Updated to Orange) */}
      {/* <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Services I <span className="text-gray-500">Provide</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-10 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Glow (Updated to Orange) */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#FF4D21]/5 blur-[80px] group-hover:bg-[#FF4D21]/15 transition-all duration-500"></div>

              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Icon Container */}
                <div className="p-4 rounded-2xl bg-[#1A1A1A] text-[#FF4D21] group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF4D21] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#FF4D21]/60 group-hover:text-[#FF4D21] font-semibold cursor-pointer">
                    View Projects 
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;