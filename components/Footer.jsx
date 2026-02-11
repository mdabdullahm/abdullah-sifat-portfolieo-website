"use client";
import React from "react";
import Link from "next/link";
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  ArrowUpRight,
  Globe // Behance/Dribbble এর বদলে সাময়িকভাবে ব্যবহারের জন্য
} from "lucide-react";

// Behance SVG Icon
const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4H4v8h5zM5 6h4c1.1 0 2 .9 2 2s-.9 2-2 2H5V6z"/><path d="M4 12h7v7H4z"/><path d="M7 12v7"/><path d="M17 12h5"/><path d="M17 15h5"/></svg>
);

// Dribbble SVG Icon
const DribbbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.13 4.88m12.13 13.01c-.74-7.14-4.04-9.04-11.28-11.05"/></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Behance", icon: <BehanceIcon />, href: "#" },
    { name: "Dribbble", icon: <DribbbleIcon />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Background Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center group mb-6">
              <img 
                src="https://i.ibb.co.com/wNLSRMPq/20260204-022727.png" 
                alt="SIFAT Logo" 
                className="w-12 h-auto object-contain mr-2" 
              />
              <span className="text-white text-2xl font-black tracking-tighter">SIFAT</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              Turning your ideas into visual masterpieces. Specialized in modern branding and strategic design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF4D21] hover:text-white transition-all duration-300 shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FF4D21] transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#FF4D21] group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Me</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#FF4D21]/10 rounded-lg text-[#FF4D21]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Email</p>
                  <a href="mailto:hello@sifat.com" className="text-gray-300 hover:text-white">hello@sifat.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-[#FF4D21]/10 rounded-lg text-[#FF4D21]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold mb-1">Location</p>
                  <p className="text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Have a Project?</h4>
            <p className="text-gray-400 mb-6">Let's create something extraordinary together.</p>
            <Link href="/contact">
              <button className="w-full py-4 bg-[#FF4D21] hover:bg-[#e6451e] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(255,77,33,0.2)]">
                Hire Me Now <ArrowUpRight size={18} />
              </button>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-white font-bold">SIFAT</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;