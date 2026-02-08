"use client";
import React, { useState, useEffect, useRef } from "react";
import { Trophy, Users, Briefcase, Coffee } from "lucide-react";

// Counter logic for stats
const StatCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) setIsVisible(true);
    });
    observer.observe(domRef.current);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={domRef}>{count}</span>;
};

const AboutAchievements = () => {
  const stats = [
    {
      label: "Project Completed",
      value: 85,
      suffix: "+",
      icon: <Briefcase size={32} />,
    },
    {
      label: "Happy Clients",
      value: 99,
      suffix: "%",
      icon: <Users size={32} />,
    },
    {
      label: "Design Awards",
      value: 12,
      suffix: "+",
      icon: <Trophy size={32} />,
    },
    {
      label: "Cups of Coffee",
      value: 450,
      suffix: "",
      icon: <Coffee size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#141414]/60 backdrop-blur-2xl border border-white/5 rounded-[4rem] p-12 md:p-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-5 rounded-3xl bg-[#0A0A0A] border border-white/5 text-[#FF4D21] group-hover:scale-110 group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-500 shadow-xl">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                  <StatCounter end={stat.value} />
                  <span className="text-[#FF4D21]">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Decorative Bottom Message */}
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-400 text-lg italic">
              "Success is not just about numbers, it's about the <span className="text-white font-bold">impact</span> we create through design."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAchievements;