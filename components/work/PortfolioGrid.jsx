"use client";
import React, { useState } from "react";
import { LayoutGrid, Palette, Megaphone, Layers, ArrowUpRight } from "lucide-react";

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProjects = [
    { id: 1, title: "Modern Tech Logo", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
    { id: 2, title: "Summer Sale Ad", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
    { id: 3, title: "Minimal Business Card", category: "Print", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "Eco Brand Identity", category: "Branding", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, title: "Fitness Instagram Post", category: "Social Media", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop" },
    { id: 6, title: "Premium Book Cover", category: "Print", image: "https://i.ibb.co.com/YB0327DB/8306.jpg" },
  ];

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  const categories = [
    { name: "All", icon: <LayoutGrid size={18} /> },
    { name: "Branding", icon: <Palette size={18} /> },
    { name: "Social Media", icon: <Megaphone size={18} /> },
    { name: "Print", icon: <Layers size={18} /> },
  ];

  return (
    <section className="pb-16 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Filter Bar (যাতে ক্লিক করলে কাজ করে) */}
        <div className="flex flex-wrap gap-4 items-center mb-16">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mr-4">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-[#FF4D21] text-white shadow-[0_10px_20px_rgba(255,77,33,0.3)]"
                  : "bg-[#141414] text-gray-400 border border-white/5 hover:border-[#FF4D21]/30 hover:text-white"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#141414] border border-white/5 aspect-square"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-[#FF4D21] text-xs font-black uppercase tracking-widest mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                
                {/* View Details Button */}
                <div className="flex items-center gap-2 text-white/70 text-sm font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                   See Project <ArrowUpRight size={18} className="text-[#FF4D21]" />
                </div>
              </div>

              {/* Corner Icon (Desktop) */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* If no projects found (just in case) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-500 font-bold">No projects found in this category.</h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioGrid;