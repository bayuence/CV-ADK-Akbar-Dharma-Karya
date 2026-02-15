"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import SectionHeader from "./section-header";
import type { SiteData } from "@/lib/types";

export default function ActiveProjects({ data }: { data: SiteData }) {
  const activeProjects = data.projects.filter(
    (p) => p.status === "in-progress"
  );

  if (activeProjects.length === 0) return null;

  return (
    <section id="proyek-aktif" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Sedang Dikerjakan"
          title="Proyek Aktif"
          description="Proyek-proyek yang sedang kami kerjakan saat ini dengan penuh dedikasi."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {activeProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                {/* Live indicator */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    Sedang Dikerjakan
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                </div>

                {/* Progress */}
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-primary">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
