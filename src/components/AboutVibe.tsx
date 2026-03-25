"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVibe() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax text effect
    gsap.to(".parallax-text", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal text block
    gsap.fromTo(
      ".reveal-paragraph",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-paragraph",
          start: "top 80%",
        },
      }
    );
  }, { scope: container });

  return (
    <section 
      ref={container} 
      id="about" 
      className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-background flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="w-full md:w-1/2 flex flex-col justify-center parallax-text">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
          A <span className="text-primary italic font-serif">spa-like</span> environment<br/>for your peace of mind.
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed reveal-paragraph">
          <p>
            At Fresh Dent Family Care Dental Clinic, we are committed to delivering advanced, ethical, and patient-centric dental care in a warm and comfortable environment.
          </p>
          <p>
            Inspired by a commitment to true biological precision, our clinic serves as a one-stop destination for comprehensive dental and oral healthcare for families in and around Kakinada.
          </p>
        </div>

        <ul className="mt-12 space-y-4 reveal-paragraph">
          {[
            "Serving the entire family — all ages welcome",
            "Same-day emergency appointments are available",
            "Transparent pricing (no surprise bills!)"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-sm tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full block" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[50vh] flex flex-col items-center justify-center">
        {/* Placeholder for a high-end image using CSS luxury aesthetic */}
        <div className="w-[80%] h-[120%] absolute top-0 -translate-y-12 bg-card rounded-sm overflow-hidden border border-border/50 parallax-text flex items-center justify-center group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-1000" />
          <p className="text-muted-foreground uppercase tracking-widest text-xs rotate-90 opacity-40">Visual Placeholder</p>
        </div>
        
        <div className="w-[60%] h-[80%] absolute bottom-0 -left-12 translate-y-24 bg-[#0a0c0f] rounded-sm overflow-hidden border border-border/80 z-10 flex items-center justify-center group shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
          <p className="text-muted-foreground uppercase tracking-widest text-xs opacity-40">Visual Placeholder</p>
        </div>
      </div>
    </section>
  );
}
