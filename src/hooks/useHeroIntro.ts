import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function useHeroIntro(containerRef: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Default animation
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!containerRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([".headline-char", ".stat-item", ".car-wrapper"], { opacity: 0 });
      gsap.set(".green-band", { width: "0%" });

      tl.to(".green-band", {
        width: "15%",
        duration: 1.2,
        ease: "power3.inOut"
      });

      tl.to(
        ".car-wrapper",
        { opacity: 1, duration: 1 },
        "-=0.6"
      );

      tl.to(
        ".headline-char",
        { opacity: 1, duration: 0.8 },
        "-=0.8"
      );

      tl.fromTo(
        ".stat-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.4"
      );
    });

    // Reduced motion fallback
    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (!containerRef.current) return;
      gsap.set([".headline-char", ".stat-item", ".car-wrapper"], { opacity: 0, y: 0, scale: 1 });
      
      gsap.to([".headline-char", ".car-wrapper", ".stat-item"], {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });
}
