"use client";

import { useRef } from "react";
import { Headline } from "./Headline";
import { StatsList } from "./StatsList";
import { CarVisual } from "./CarVisual";
import { useHeroScroll } from "@/hooks/useHeroScroll";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  useHeroScroll(containerRef);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[200vh] bg-[#121212] hero-container"
    >
      <div className="sticky top-0 h-[100vh] w-full flex items-center justify-center bg-[#d1d1d1] overflow-hidden track-container">
        
        {/* Road */}
        <div className="relative w-[100vw] h-[200px] bg-[#1e1e1e] overflow-hidden">
          
          <CarVisual />
          
          {/* Green Trail */}
          <div className="absolute top-0 left-0 h-[200px] bg-[#45db7d] trail-element z-10" style={{ width: '0px' }}></div>
          
          {/* Headline Container */}
          <Headline />
          
        </div>

        <StatsList />
      </div>
    </section>
  );
}
