"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background pt-32 pb-12 px-6 md:px-12 border-t border-border/30 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <h2 className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none text-foreground uppercase">
          Fresh <span className="text-primary italic">Dent</span>
        </h2>
        <div className="flex flex-col gap-6 w-full md:w-auto text-sm tracking-wider uppercase">
          <a href="tel:+916300643128" className="flex items-center justify-between border-b border-border pb-2 hover:border-primary transition-colors group">
            +91 6300643128 <ArrowUpRight size={16} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="tel:+919398141913" className="flex items-center justify-between border-b border-border pb-2 hover:border-primary transition-colors group">
            +91 9398141913 <ArrowUpRight size={16} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <div className="pt-4 text-muted-foreground normal-case tracking-normal max-w-xs leading-relaxed">
            Kakinada, Andhra Pradesh, India<br/>
            Comprehensive Oral Care Facility
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-muted-foreground border-t border-border/30 pt-8">
        <p>© 2026 Fresh Dent Family Care.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
