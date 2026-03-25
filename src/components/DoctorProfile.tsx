"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DoctorProfile() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".profile-img",
      { scale: 1.1, opacity: 0, filter: "brightness(0.5)" },
      {
        scale: 1, opacity: 1, filter: "brightness(1)", duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: ".profile-img", start: "top 70%" }
      }
    );
    
    gsap.fromTo(
      ".profile-text",
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".profile-text", start: "top 70%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="about-doctor" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0c0e12] flex flex-col md:flex-row items-center gap-12 md:gap-24 overflow-hidden">
      <div className="w-full md:w-5/12 aspect-[3/4] rounded-sm overflow-hidden border border-border/30 bg-card profile-img relative group">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        <div className="w-full h-full bg-[#161a20]">
           <img src="/doctor_profile.png" alt="Dr. K. Manoj Kumar" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-center">
        <p className="profile-text text-sm tracking-widest uppercase text-primary mb-6">Expertise & Precision</p>
        <h2 className="profile-text text-4xl md:text-5xl font-light tracking-tight mb-4">
          Dr. K. Manoj Kumar
        </h2>
        <h3 className="profile-text text-xl md:text-2xl text-muted-foreground font-serif italic mb-8">
          Maxillofacial Surgeon & Implantologist
        </h3>
        
        <div className="profile-text space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          <p>
            Board-certified with 9+ years of clinical and academic experience. Known for a precise diagnostic approach, gentle patient handling, and surgical excellence in facial trauma, dental implants, oral pathologies, and reconstructive procedures.
          </p>
          <p>
            Currently serving as an Associate Professor in the Department of Oral and Maxillofacial Surgery at GSL Dental College, mentoring future professionals and contributing to academic research.
          </p>
        </div>

        <div className="profile-text mt-12 flex gap-4">
          <span className="px-4 py-2 border border-border/50 rounded-full text-xs uppercase tracking-widest text-muted-foreground">MDS</span>
          <span className="px-4 py-2 border border-border/50 rounded-full text-xs uppercase tracking-widest text-muted-foreground">FAM</span>
          <span className="px-4 py-2 border border-border/50 rounded-full text-xs uppercase tracking-widest text-muted-foreground">MCHT</span>
        </div>
      </div>
    </section>
  );
}
