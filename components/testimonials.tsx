"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "./section-header";
import type { SiteData } from "@/lib/types";

export default function Testimonials({ data }: { data: SiteData }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const items = data.testimonials;
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + items.length) % items.length);
  }, [items.length]);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  // Auto-play with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  // Swipe handler
  function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      next();
    } else if (info.offset.x > threshold) {
      prev();
    }
  }

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <section id="testimoni" className="relative bg-card py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepuasan klien adalah prioritas utama kami."
        />

        <div
          ref={containerRef}
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex cursor-grab flex-col items-center text-center active:cursor-grabbing"
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
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {items[current].name
                    .split(" ")
                    .filter((w) => w.length > 2)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </div>
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
                  onClick={() => goTo(i)}
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
