"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import type { SiteData } from "@/lib/types";

export default function Process({ data }: { data: SiteData }) {
  return (
    <section id="proses" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Cara Kerja"
          title="Proses Kerja Kami"
          description="Enam langkah terstruktur untuk memastikan proyek Anda berjalan lancar dari awal hingga selesai."
        />

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent lg:block" />

          <div className="flex flex-col gap-8 lg:gap-0">
            {data.process.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center lg:mb-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}
                  >
                    <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                      {/* Mobile step number */}
                      <div className="mb-3 flex items-center gap-3 lg:hidden">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                          <span className="text-xs font-bold text-primary">
                            {step.step}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                      </div>
                      <span className="mb-2 inline-block text-xs font-medium uppercase tracking-widest text-primary lg:block hidden">
                        Langkah {step.step}
                      </span>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="text-sm font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
