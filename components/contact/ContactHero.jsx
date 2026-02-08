"use client";
import React from "react";
import { MessageCircle, Mail, MapPin, Globe, ArrowRight, Send } from "lucide-react";

const ContactHero = () => {
  const whatsappNumber = "8801853191845"; 
  const message = "Hello Sifat, I am interested in your design services!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative pt-32 pb-24 bg-[#0A0A0A] overflow-hidden min-h-screen flex items-center">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D21]/10 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
              Contact Me
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Let’s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
                something great.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10">
              Want to discuss an idea or project you have? I'm just a message away. Let's talk!
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF4D21] group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Email Me</p>
                  <p className="text-white font-bold text-lg">hello@sifat.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF4D21] group-hover:bg-[#FF4D21] group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold text-lg">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: WhatsApp Card */}
          <div className="relative">
            <div className="bg-[#141414]/80 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF4D21]/20 blur-3xl rounded-full"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <MessageCircle size={48} fill="currentColor" />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">Chat on WhatsApp</h3>
                <p className="text-gray-400 mb-10">
                  WhatsApp me directly for a quick response and to discuss projects.
                </p>

                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:-translate-y-1 w-full justify-center"
                >
                  Send Message
                  <Send size={20} />
                </a>

                <p className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online - Usually replies in minutes
                </p>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#FF4D21] text-white px-8 py-4 rounded-2xl font-bold shadow-2xl -rotate-3 hidden md:block">
              Quick Response Guaranteed!
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;