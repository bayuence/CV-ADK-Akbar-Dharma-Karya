"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./section-header";
import { siteData } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const items = siteData.testimonials;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative bg-card py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepuasan klien adalah prioritas utama kami."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <Quote className="mb-6 h-10 w-10 text-primary/30" />

              <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                &quot;{items[current].content}&quot;
              </p>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: items[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  {items[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {items[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              suppressHydrationWarning
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:text-primary"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  suppressHydrationWarning
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              suppressHydrationWarning
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:text-primary"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
