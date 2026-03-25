"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const headings = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial cinematic reveal
    tl.fromTo(
      ".char", 
      { y: 100, opacity: 0, rotate: 5 },
      { y: 0, opacity: 1, rotate: 0, duration: 1.2, stagger: 0.05, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(
      ".hero-sub",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      ".hero-img",
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
      "-=1.5"
    );

    // Parallax on scroll
    gsap.to(".hero-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  const text = "REDEFINING";
  const text2 = "DENTAL CARE";

  return (
    <section ref={container} className="relative h-screen w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-background">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
        <div className="hero-bg hero-img w-full h-[120%] relative -top-[10%] bg-cover bg-center" style={{ backgroundImage: "url('/hero_bg.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,168,118,0.08)_0%,transparent_60%)]" />
        </div>
      </div>

      <div className="z-10 w-full flex flex-col items-start" ref={headings}>
        <div className="overflow-hidden leading-none">
          <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter text-foreground uppercase flex">
            {text.split("").map((char, i) => (
              <span key={i} className="char inline-block">{char}</span>
            ))}
          </h1>
        </div>
        <div className="overflow-hidden leading-none -mt-2 md:-mt-6">
          <h1 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter text-primary uppercase flex">
            {text2.split("").map((char, i) => (
              <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
            ))}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-24 mt-8 md:mt-12 items-start md:items-end w-full hero-sub border-t border-border/40 pt-8">
          <p className="text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            Welcome to Fresh Dent Family Care. Enjoy state-of-the-art, advanced digital dental care in a deeply relaxing, spa-like environment in Kakinada.
          </p>
          
          <button className="group flex items-center gap-4 text-xs tracking-widest uppercase">
            <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-card group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
              <ArrowDownRight size={16} />
            </span>
            <span>Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}
