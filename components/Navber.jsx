"use client";
import React, { useState } from "react"; // useState যোগ করা হয়েছে মেনু টোগল করার জন্য
import Link from "next/link";
import { MoveUpRight, Menu, X } from "lucide-react"; // Menu এবং X আইকন যোগ করা হয়েছে

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনুর স্টেট

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4">
      {/* Main Navbar Container */}
      <nav className="flex items-center justify-between w-full max-w-6xl bg-[#141414]/50 backdrop-blur-md border border-white/10 px-6 py-2 md:py-0 rounded-[2rem] shadow-2xl relative">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center group cursor-pointer">
          <div className="flex items-center justify-center overflow-hidden">
            <img 
              src="https://i.ibb.co.com/wNLSRMPq/20260204-022727.png" 
              alt="SIFAT Logo" 
              className="w-12 h-auto md:w-16 object-contain" 
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

        {/* Right Section: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Let's Talk Button (Hidden on very small screens if needed, but kept here as per your code) */}
          <Link href="#contact" className="hidden sm:block">
            <button className="bg-[#FF4D21] hover:bg-[#e6451e] text-white px-6 py-2.5 rounded-2xl flex items-center gap-2 font-medium transition-all duration-300 group shadow-[0_0_20px_rgba(255,77,33,0.3)] text-sm">
              Let's Talk
              <MoveUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden w-full max-w-6xl mt-4 bg-[#141414]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // লিংক ক্লিক করলে মেনু বন্ধ হবে
                className="text-gray-400 hover:text-[#FF4D21] text-lg font-medium transition-all duration-300 border-b border-white/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Let's Talk Button (Visible only inside mobile menu) */}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="sm:hidden">
              <button className="w-full bg-[#FF4D21] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all">
                Let's Talk
                <MoveUpRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;