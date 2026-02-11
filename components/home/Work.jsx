"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    { id: 1, title: "Eco-Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { id: 2, title: "Social Media Ads", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { id: 3, title: "Vector Art", category: "Illustration", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1964&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { id: 4, title: "Packaging Design", category: "Print", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="work" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Selected <span className="text-gray-500">Works</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project) => (
            <div key={project.id} className={`group relative overflow-hidden rounded-[2rem] border border-white/5 ${project.span}`}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#FF4D21] text-sm font-bold uppercase mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;