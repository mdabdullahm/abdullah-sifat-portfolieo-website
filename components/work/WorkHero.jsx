"use client";
import React, { useState } from "react";

const WorkHero = () => {
    return (
        <section className="relative pt-15 bg-[#0A0A0A] overflow-hidden">

            {/* Background Matrix Grid Effect (Orange) */}
            <div className="absolute inset-0 z-0 opacity-15"
                style={{
                    backgroundImage: 'linear-gradient(#FF4D21 1px, transparent 1px), linear-gradient(90deg, #FF4D21 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#FF4D21]/10 to-transparent blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <span className="text-[#FF4D21] font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
                        Selected Portfolio
                    </span>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                        Creative <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D21] to-[#ff8c6e]">
                            Showcase.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                        A collection of the best projects I've done. Each design here tells a story—of creativity, strategy, and impeccable craftsmanship.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WorkHero;