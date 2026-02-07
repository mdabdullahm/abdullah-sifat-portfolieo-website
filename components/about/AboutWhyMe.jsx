"use client";
import React from "react";
import { 
  Target, 
  Cpu, 
  MessageSquare, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

const AboutWhyMe = () => {
  const values = [
    {
      title: "Strategy First",
      desc: "আমি শুধু সুন্দর ছবি বানাই না, বরং আপনার ব্যবসার লক্ষ্য অর্জনে সাহায্য করে এমন ডিজাইন করি।",
      icon: <Target size={30} />,
    },
    {
      title: "Precision & Detail",
      desc: "প্রতিটি পিক্সেল এবং কালার কোড আমি নিখুঁতভাবে পরীক্ষা করি যাতে রেজাল্ট হয় প্রফেশনাল।",
      icon: <Cpu size={30} />,
    },
    {
      title: "Seamless Support",
      desc: "প্রজেক্ট চলাকালীন এবং ডেলিভারির পরেও আপনি আমাকে সবসময় পাশে পাবেন।",
      icon: <MessageSquare size={30} />,
    },
    {
      title: "On-Time Delivery",
      desc: "ডেডলাইন আমার কাছে পবিত্র। আমি কোয়ালিটির সাথে আপোষ না করে সময়মতো কাজ শেষ করি।",
      icon: <Clock size={30} />,
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
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <span className="text-[#FF4D21] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              My Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Why I am the <span className="text-gray-500 italic font-light">Right Choice</span> <br /> 
              for your Brand.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              বাজারে অনেক ডিজাইনার থাকতে পারে, কিন্তু আমি আপনার ব্র্যান্ডকে এমনভাবে উপস্থাপন করি যা মানুষের মনে স্থায়ী জায়গা করে নেয়। আমার কাজের মূল ভিত্তি হলো সততা এবং সৃজনশীলতা।
            </p>

            <div className="space-y-4">
              {[
                "Custom Designs (No Templates)",
                "Full Source Files Provided",
                "Unlimited Support for Major Projects",
                "Strategic Visual Storytelling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                  <CheckCircle2 size={20} className="text-[#FF4D21]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Values Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div 
                key={index}
                className="group p-8 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500"
              >
                <div className="mb-6 text-[#FF4D21] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF4D21] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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

export default AboutWhyMe;