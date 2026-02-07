"use client";
import React from "react";
import { Sparkles, Rocket, Heart, Coffee } from "lucide-react";

const AboutStory = () => {
  const milestones = [
    {
      year: "2021",
      title: "The Spark",
      desc: "My journey into the magical world of graphic design began when I first created a simple shape in Illustrator and fell in love.",
      icon: <Sparkles size={24} />,
    },
    {
      year: "2022",
      title: "Learning & Growth",
      desc: "Delving deep into Photoshop and Illustrator day and night. Hone your skills through hundreds of projects and experiments.",
      icon: <Coffee size={24} />,
    },
    {
      year: "2023",
      title: "Professional Leap",
      desc: "The beginning of my freelancing career. I started working on brand identity and social media design with various domestic and international clients.",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Short Narrative */}
          <div>
            <span className="text-[#FF4D21] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              My Narrative
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              A Story of Passion <br /> 
              <span className="text-gray-500">& Visual Curiosity.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Design is not just a job for me, it's a language. I believe every pixel has the power to tell a story. My journey hasn't been easy, but the passion to create something creative has always driven me back.
              </p>
              <p>
                My main goal as a designer is to visually express a brand's vision in a way that people can connect with at first sight. I always love to keep myself updated with the latest trends and technology.
              </p>
              
              <div className="pt-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D21]/10 flex items-center justify-center text-[#FF4D21]">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold">Designing with Love</h4>
                    <p className="text-sm text-gray-500 tracking-wider uppercase font-bold">Client satisfaction is my priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4D21] via-[#FF4D21]/20 to-transparent hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div key={index} className="relative pl-0 md:pl-16 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-[#FF4D21] border-4 border-[#0A0A0A] z-20 hidden md:block group-hover:scale-150 transition-transform"></div>
                  
                  <div className="p-8 rounded-[2rem] bg-[#141414]/80 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#FF4D21] font-mono font-bold text-xl">{item.year}</span>
                      <div className="text-gray-600 group-hover:text-[#FF4D21] transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;