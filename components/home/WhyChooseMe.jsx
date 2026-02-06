"use client";
import React, { useState, useEffect } from "react";
import { Target, Zap, ShieldCheck, Headphones } from "lucide-react";

// এই কম্পোনেন্টটি সংখ্যা গণনার কাজ করবে
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - 1) + 1));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const WhyChooseMe = () => {
  const reasons = [
    {
      title: "Strategic Design",
      description: "I don't just design beautiful designs, but also create strategic designs according to your business goals.",
      icon: <Target size={40} />,
    },
    {
      title: "Fast Delivery",
      description: "We ensure project delivery in the fastest possible time without compromising on quality.",
      icon: <Zap size={40} />,
    },
    {
      title: "Unique & Original",
      description: "No templates, each design is created for you from scratch.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "Great Support",
      description: "I am by your side for any needs during and after the project.",
      icon: <Headphones size={40} />,
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm">
            Why Work With Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            I don't just create designs, <br />
            <span className="text-gray-500">I build brand identities.</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2rem] bg-[#141414]/40 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500"
            >
              <div className="mb-6 text-[#FF4D21] relative inline-block">
                <div className="absolute inset-0 bg-[#FF4D21]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF4D21] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge / Counter Section */}
        <div className="mt-20 p-10 rounded-[3rem] bg-[#141414]/80 backdrop-blur-xl border border-white/5 flex flex-wrap justify-around gap-8 text-center relative overflow-hidden">
            {/* Animated Numbers */}
            <div className="min-w-[150px]">
                <h4 className="text-5xl font-bold text-white mb-2">
                    <CountUp end={85} />+
                </h4>
                <p className="text-[#FF4D21] text-xs uppercase tracking-[0.2em] font-bold">Projects Done</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10 self-center"></div>

            <div className="min-w-[150px]">
                <h4 className="text-5xl font-bold text-white mb-2">
                    <CountUp end={99} />%
                </h4>
                <p className="text-[#FF4D21] text-xs uppercase tracking-[0.2em] font-bold">Happy Clients</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/10 self-center"></div>

            <div className="min-w-[150px]">
                <h4 className="text-5xl font-bold text-white mb-2">
                    24/7
                </h4>
                <p className="text-[#FF4D21] text-xs uppercase tracking-[0.2em] font-bold">Quick Response</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMe;