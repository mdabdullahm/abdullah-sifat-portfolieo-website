"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      feedback: "Sifat is an incredibly talented designer. He transformed our brand identity into something modern and professional.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Marketing Manager",
      feedback: "Working with Sifat was a breeze. He delivered the social media assets well before the deadline. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Miller",
      role: "E-commerce Owner",
      feedback: "The packaging design Sifat created for our product actually helped increase our sales. He knows his craft well.",
      rating: 5,
    },
    {
      name: "Sophia Ray",
      role: "Creative Director",
      feedback: "One of the best graphic designers I've worked with. His sense of color and typography is truly exceptional.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Tech Entrepreneur",
      feedback: "Professional, creative, and very patient. Sifat made sure every detail of our logo was perfect. Great experience!",
      rating: 5,
    },
  ];

  // We will double the list to keep the animation uninterrupted.
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <span className="text-[#FF4D21] font-medium tracking-[0.2em] uppercase text-sm">
            Happy Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Trusted by <span className="text-gray-500">Industry Leaders</span>
          </h2>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex overflow-hidden">
        {/* Scrolling Content */}
        <div className="flex animate-marquee whitespace-nowrap gap-8 hover:[animation-play-state:paused]">
          {doubledReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-[2.5rem] bg-[#141414]/60 backdrop-blur-md border border-white/5 hover:border-[#FF4D21]/30 transition-all duration-500 relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#FF4D21]" fill="#FF4D21" />
                  ))}
                </div>
                <Quote size={30} className="text-white/10" fill="currentColor" />
              </div>

              <p className="text-gray-300 text-lg whitespace-normal leading-relaxed mb-8">
                "{review.feedback}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF4D21] to-[#ff8c6e] flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{review.name}</h4>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent"></div>
      </div>

      {/* Marquee Animation CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;