"use client";
import React from "react";
import { 
  Palette, 
  Megaphone, 
  PenTool, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

const ServicesList = () => {
  const allServices = [
    {
      title: "Logo & Brand Identity",
      description: "Creating a unique and memorable identity for your business. I don't just design a logo, but create a complete brand system.",
      icon: <Palette size={40} />,
      features: ["Custom Logo Design", "Brand Style Guide", "Color Palette", "Typography Selection"],
      price: "Starting from $200"
    },
    {
      title: "Social Media Design",
      description: "Make your social media handles professional and engaging. Custom graphics for Facebook, Instagram, and LinkedIn.",
      icon: <Megaphone size={40} />,
      features: ["Post & Story Templates", "Cover/Banner Design", "Ad Creatives", "Highlight Icons"],
      price: "Starting from $100"
    },
    {
      title: "Vector Illustration",
      description: "High-quality vector art that can be used at any size. Custom illustrations that visually enhance your message.",
      icon: <PenTool size={40} />,
      features: ["Character Design", "Icon Sets", "Technical Illustrations", "Flat Design Art"],
      price: "Starting from $150"
    },
    {
      title: "Print & Marketing",
      description: "High-resolution designs for print media. From business cards to billboards—everything is professionally created.",
      icon: <Layers size={40} />,
      features: ["Business Cards", "Flyers & Brochures", "Packaging Design", "Poster Design"],
      price: "Starting from $120"
    }
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
        <div className="space-y-16">
          {allServices.map((service, index) => (
            <div 
              key={index}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 rounded-[3rem] bg-[#141414]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500"
            >
              {/* Left Side: Icon & Title */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-3xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#FF4D21] mb-6 group-hover:scale-110 group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-500 shadow-2xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <span className="inline-block text-[#FF4D21] font-mono font-bold tracking-widest text-sm uppercase">
                  {service.price}
                </span>
              </div>

              {/* Middle Side: Description */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={16} className="text-[#FF4D21]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: CTA Button */}
              <div className="lg:col-span-3 flex items-center lg:justify-end">
                <button className="w-full lg:w-auto px-8 py-4 bg-white/5 hover:bg-[#FF4D21] text-white hover:text-black border border-white/10 hover:border-[#FF4D21] rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                  Order Service
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Watermark Number */}
              <div className="absolute top-10 right-10 text-9xl font-black text-white/[0.02] pointer-events-none group-hover:text-[#FF4D21]/[0.05] transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;