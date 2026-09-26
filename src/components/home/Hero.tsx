import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="w-full pt-2 pb-6">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-5">
        
        {/* Main Hero Container - Figma Deep Royal Blue Theme */}
        <div className="rounded-3xl bg-linear-to-l from-royal-blue to-royal-blue-dark text-white overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 min-h-105 lg:min-h-120">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6 flex flex-col justify-center z-10">
            
            {/* Pill Badge */}
            <div>
              <span className="bg-[#002273] text-slate-200 text-xs px-4 py-1.5 rounded-full inline-block font-medium tracking-wide">
                Passkarlo Talent Search 26–27
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.15]">
              PassKarlo Talent Search 26–27<br />General Knowledge
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed max-w-md">
              Build global awareness with curated capsules, current affairs digests, and reasoning drills tailored for Passkarlo Talent Search 25–26.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                className="bg-white text-royal-blue hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-sm transition-all"
              >
                Explore GK Details
              </Button>
            </div>

          </div>

          {/* Right Educational Classroom Image Column */}
          <div className="lg:col-span-6 relative w-full h-72 lg:h-full min-h-75 lg:min-h-115 overflow-hidden">
            <Image
              src="/hero_classroom.jpg"
              alt="PassKarlo Classroom Students"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* PassKarlo Logo Overlay on Whiteboard matching Figma */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-xs p-2 px-3 rounded-xl shadow-md border border-white/40">
              <Image
                src="/logo.webp"
                alt="PassKarlo"
                width={120}
                height={32}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
