"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // মাউসের পজিশন ট্রাক করা
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // মাউস যখন কোনো বাটন বা লিংকের ওপর যাবে
    const mouseOver = (e) => {
      if (
        e.target.tagName === "A" || 
        e.target.tagName === "BUTTON" || 
        e.target.closest("button") || 
        e.target.closest("a") ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* মেইন ডট (Main Dot) */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF4D21] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
      
      {/* বাইরের বড় বৃত্ত (Outer Circle) */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border border-[#FF4D21]/50 ${
          isHovered ? "w-16 h-16 bg-[#FF4D21]/10 border-[#FF4D21]" : "w-10 h-10"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;