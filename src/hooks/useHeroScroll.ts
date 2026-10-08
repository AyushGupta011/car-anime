import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function useHeroScroll(
  containerRef: RefObject<HTMLElement | null>
) {
  useGSAP(() => {
    if (!containerRef.current) return;

    const car = containerRef.current.querySelector(".car-element") as HTMLElement;
    const trail = containerRef.current.querySelector(".trail-element") as HTMLElement;
    const letters = gsap.utils.toArray<HTMLElement>(".value-letter", containerRef.current);
    const valueAdd = containerRef.current.querySelector(".value-add") as HTMLElement;

    if (!car || !trail || !valueAdd || letters.length === 0) return;

    const carWidth = 350; 
    let roadWidth = window.innerWidth;

    const getLetterOffsets = () => {
      const valueRect = valueAdd.getBoundingClientRect();
      return letters.map(l => valueRect.left + l.offsetLeft);
    };

    let letterOffsets = getLetterOffsets();

    const handleResize = () => {
      roadWidth = window.innerWidth;
      letterOffsets = getLetterOffsets();
    };

    window.addEventListener("resize", handleResize);

    gsap.to(car, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top", 
        scrub: 1,
        pin: ".track-container",
      },
      x: () => window.innerWidth - carWidth,
      ease: "none",
      onUpdate: function () {
        const carX = (gsap.getProperty(car, "x") as number) + carWidth / 2;
        letters.forEach((letter, i) => {
          if (carX >= letterOffsets[i]) {
            letter.style.opacity = "1";
          } else {
            letter.style.opacity = "0";
          }
        });
        gsap.set(trail, { width: carX });
      },
    });

    // Boxes
    gsap.to("#box1", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=400 top",
        end: "top+=600 top",
        scrub: 1,
      },
      opacity: 1,
    });
    gsap.to("#box2", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=600 top",
        end: "top+=800 top",
        scrub: 1,
      },
      opacity: 1,
    });
    gsap.to("#box3", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=800 top",
        end: "top+=1000 top",
        scrub: 1,
      },
      opacity: 1,
    });
    gsap.to("#box4", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=1000 top",
        end: "top+=1200 top",
        scrub: 1,
      },
      opacity: 1,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, { scope: containerRef });
}
