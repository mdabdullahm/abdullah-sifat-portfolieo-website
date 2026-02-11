"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল পজিশন চেক করা
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // উপরে যাওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#FF4D21] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(255,77,33,0.4)] hover:bg-[#e6451e] transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-5 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;