"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple reveal animation on load
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">FD</span>
        </div>
        <span className="text-foreground tracking-widest uppercase text-xs font-semibold">
          Fresh Dent
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Home", "Treatments", "Tourism", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <button className="md:hidden text-foreground">
        <Menu size={24} />
      </button>

      <div className="hidden md:flex">
        <button className="px-6 py-3 border border-border/50 rounded-full text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-500">
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
