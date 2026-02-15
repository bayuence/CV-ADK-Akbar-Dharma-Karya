"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  Palette,
  Wrench,
  Box,
  MessageSquare,
} from "lucide-react";
import SectionHeader from "./section-header";
import type { SiteData } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  hammer: Hammer,
  palette: Palette,
  wrench: Wrench,
  cube: Box,
  chat: MessageSquare,
};

export default function Services({ data }: { data: SiteData }) {
  return (
    <section id="layanan" className="relative bg-card py-24 lg:py-32">
      {/* Top border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Layanan Kami"
          title="Solusi Lengkap untuk Proyek Anda"
          description="Dari perencanaan hingga finishing, kami menyediakan layanan terpadu untuk mewujudkan bangunan impian Anda."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
