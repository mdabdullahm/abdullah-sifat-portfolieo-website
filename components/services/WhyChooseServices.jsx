"use client";
import React from "react";
import { ShieldCheck, Zap, MousePointer2, Heart } from "lucide-react";

const WhyChooseServices = () => {
  const reasons = [
    {
      title: "Pixel Perfect Design",
      desc: "প্রতিটি ডিজাইন আমি জুম করে নিখুঁতভাবে চেক করি যাতে কোনো পিক্সেল ভুল না থাকে। হাই-কোয়ালিটি গ্যারান্টিড।",
      icon: <MousePointer2 size={32} />,
    },
    {
      title: "ROI-Focused Visuals",
      desc: "আমি শুধু সুন্দর ডিজাইন করি না, বরং এমন ডিজাইন করি যা আপনার ব্র্যান্ডের সেলস এবং এনগেজমেন্ট বাড়াতে সাহায্য করে।",
      icon: <Zap size={32} />,
    },
    {
      title: "100% Originality",
      desc: "কোনো কপি বা টেম্পলেট নয়। প্রতিটি প্রজেক্ট আমি একদম জিরো থেকে আপনার রিকোয়ারমেন্ট অনুযায়ী ইউনিকভাবে তৈরি করি।",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Lifetime Support",
      desc: "প্রজেক্ট শেষ হওয়ার পরেও ছোটখাটো পরিবর্তন বা সাপোর্টের জন্য আমি সবসময় প্রস্তুত থাকি। ক্লায়েন্ট স্যাটিসফ্যাকশনই বড় কথা।",
      icon: <Heart size={32} />,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/3">
            <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
              The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Why Choose <br />
              <span className="text-gray-500 italic">My Services?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              বাজারে হাজারো ডিজাইনার থাকতে পারে, কিন্তু আমি আপনার ব্র্যান্ডের ভ্যালু বুঝি। আমি ডিজাইন করি আপনার ব্যবসার সফলতার কথা চিন্তা করে।
            </p>
            <div className="h-1 w-20 bg-[#FF4D21] rounded-full"></div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div 
                key={index}
                className="group p-10 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Decoration */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FF4D21]/5 rounded-full blur-2xl group-hover:bg-[#FF4D21]/10 transition-all"></div>

                <div className="mb-6 text-[#FF4D21] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF4D21] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseServices;