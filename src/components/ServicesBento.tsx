"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Comprehensive Dentistry",
    desc: "From routine cleanings to advanced surgeries, root canals, and full mouth rehabilitation.",
    className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    primary: true
  },
  {
    title: "Dental Implants",
    desc: "Surgical excellence in restorative implants.",
    className: "md:col-span-1 md:row-span-1 border-t border-l border-border",
    primary: false
  },
  {
    title: "Orthodontics",
    desc: "Modern & personalized treatment for all ages.",
    className: "md:col-span-1 md:row-span-1 border-t border-border",
    primary: false
  },
  {
    title: "Smile Makeover",
    desc: "Bespoke enhancements utilizing advanced digital treatments.",
    className: "md:col-span-2 md:row-span-1 border-t border-border",
    primary: false
  }
];

export default function ServicesBento() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".bento-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="treatments" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0c0e12]">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-sm tracking-widest uppercase text-primary mb-4 block">All-in-one solutions</h2>
          <h3 className="text-4xl md:text-6xl font-light tracking-tight max-w-2xl">
            Exceptional dental services tailored to you.
          </h3>
        </div>
        <button className="flex items-center gap-2 text-xs tracking-widest uppercase pb-2 border-b border-border hover:border-primary transition-colors">
          View all treatments <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50 rounded-sm overflow-hidden bg-muted">
        {services.map((item, i) => (
          <div 
            key={i} 
            className={cn(
              "bento-card group flex flex-col justify-between p-8 md:p-12 relative overflow-hidden bg-background transition-colors duration-500",
              item.className,
              item.primary ? "hover:bg-card" : "hover:bg-card/50"
            )}
          >
            {/* Subtle hover blur dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-[50px] transition-all duration-700 pointer-events-none" />

            <div className="z-10 flex justify-between items-start">
              <h4 className={cn("font-medium", item.primary ? "text-2xl md:text-4xl" : "text-xl")}>
                {item.title}
              </h4>
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-background group-hover:border-primary text-primary">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <p className="mt-8 md:mt-16 text-muted-foreground text-sm leading-relaxed max-w-sm z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
