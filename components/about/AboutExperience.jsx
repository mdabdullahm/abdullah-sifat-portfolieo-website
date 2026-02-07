"use client";
import React from "react";
import { Briefcase, Calendar, Award, Star } from "lucide-react";

const AboutExperience = () => {
  const experiences = [
    {
      company: "Freelance / Global Clients",
      role: "Senior Graphic Designer",
      duration: "2023 - Present",
      desc: "I design logos, brand identities, and social media kits for brands around the world. I have completed 100+ successful projects.",
      icon: <Star size={20} />,
    },
    {
      company: "Creative Design Agency",
      role: "Lead Visual Designer",
      duration: "2022 - 2023",
      desc: "I worked as a lead designer at an agency, where I managed the team and designed campaigns for major brands.",
      icon: <Briefcase size={20} />,
    },
    {
      company: "Startup Solutions",
      role: "Junior Designer",
      duration: "2021 - 2022",
      desc: "Early in my career, I worked on minimal logos and print designs (flyers, business cards) for startups.",
      icon: <Award size={20} />,
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Side: Header */}
          <div className="lg:col-span-1">
            <span className="text-[#FF4D21] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              The Path I've Taken
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Work <br /> 
              <span className="text-gray-500 italic font-light">Experience.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Over the past 3 years, I have worked on a variety of challenging projects, which have developed me into a skilled visual storyteller.
            </p>
          </div>

          {/* Right Side: Timeline List */}
          <div className="lg:col-span-2 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4D21] via-white/10 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20 group">
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-[-16px] md:left-4 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#141414] border-2 border-[#FF4D21] flex items-center justify-center text-[#FF4D21] z-10 group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-300">
                    {exp.icon}
                  </div>

                  {/* Experience Card */}
                  <div className="p-8 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-md border border-white/5 group-hover:border-[#FF4D21]/30 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#FF4D21] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[#FF4D21] bg-[#FF4D21]/10 px-4 py-1 rounded-full text-sm font-bold">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <h4 className="text-gray-300 font-semibold mb-4 text-lg">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {exp.desc}
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

export default AboutExperience;