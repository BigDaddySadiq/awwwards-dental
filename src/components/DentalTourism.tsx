"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function DentalTourism() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".tourism-badge",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".tourism-badge", start: "top 85%" }
      }
    );

    gsap.fromTo(
      ".tourism-item",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".tourism-item", start: "top 80%" }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} id="tourism" className="w-full py-24 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden flex flex-col items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,23,29,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(20,23,29,0.4)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="tourism-badge w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 text-primary mb-12">
        <Plane size={32} strokeWidth={1} />
      </div>

      <div className="text-center max-w-3xl z-10">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">
          World-class treatments at <span className="italic font-serif text-primary">60–80%</span> savings.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
          India has become a preferred destination for dental tourism. At Fresh Dent Family Care, we welcome international patients with transparent pricing, exceptional care, and comprehensive travel assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        {[
          { title: "Online Consultation", desc: "Treatment planning using X-rays before you travel." },
          { title: "Travel & Accommodation", desc: "Guidance for reaching Kakinada from Rajahmundry or Visakhapatnam airports." },
          { title: "Affordable Care", desc: "Save up to 80% compared to USA, UK, Canada, and Australia." },
        ].map((item, i) => (
          <div key={i} className="tourism-item bg-[#121418] border border-border/50 p-8 rounded-sm hover:-translate-y-2 transition-transform duration-500">
            <CheckCircle2 className="text-primary mb-6" size={24} />
            <h4 className="text-xl font-medium mb-4">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
