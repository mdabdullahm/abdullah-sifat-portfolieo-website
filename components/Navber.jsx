"use client";
import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react"; 

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#gallery" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Main Navbar Container */}
      <nav className="flex items-center justify-between w-full max-w-6xl bg-[#141414]/50 backdrop-blur-md border border-white/10 px-6 rounded-[2rem] shadow-2xl">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center group cursor-pointer">
          <div className="flex items-center justify-center overflow-hidden">
            <img 
              src="https://i.ibb.co.com/wNLSRMPq/20260204-022727.png" 
              alt="SIFAT Logo" 
              className="w-16 h-auto object-contain" 
            />
          </div>
          <span className="text-white text-xl font-bold tracking-tight font-neue">
            SIFAT
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Let's Talk Button */}
        <Link href="#contact">
          <button className="bg-[#FF4D21] hover:bg-[#e6451e] text-white px-6 py-2.5 rounded-2xl flex items-center gap-2 font-medium transition-all duration-300 group shadow-[0_0_20px_rgba(255,77,33,0.3)]">
            Let's Talk
            <MoveUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;