"use client";

import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full py-24 md:py-32 bg-background flex flex-col items-center justify-center text-center px-6 md:px-12 border-t border-border/10">
      <Quote size={48} className="text-primary/20 mb-8" />
      <h3 className="text-2xl md:text-4xl font-light tracking-tight max-w-4xl leading-relaxed mb-8">
        "Fresh Dent Family Care provided exceptional service! The advanced digital treatments made my dental experience comfortable and efficient. Highly recommend their Kakinada branches for all dental needs."
      </h3>
      <div className="flex items-center gap-4 flex-col">
        <p className="text-sm tracking-widest uppercase font-medium">Saraswathi</p>
        <div className="flex gap-1 text-primary">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </section>
  );
}
