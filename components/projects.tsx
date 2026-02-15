"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import SectionHeader from "./section-header";
import { siteData } from "@/lib/data";

const categories = ["Semua", "Arsitektur", "Interior", "Konstruksi", "Renovasi"];

type Project = (typeof siteData.projects)[number];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-secondary"
          aria-label="Tutup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "completed"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-orange-500/10 text-orange-400"
              }`}
            >
              {project.status === "completed"
                ? "Selesai"
                : "Dalam Pengerjaan"}
            </span>
          </div>

          <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
            {project.title}
          </h3>
          <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </div>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Progress bar */}
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-primary">
                {project.progress}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? siteData.projects
      : siteData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="relative bg-card py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Proyek Kami"
          description="Koleksi proyek yang telah kami kerjakan dengan penuh dedikasi dan standar kualitas tinggi."
        />

        {/* Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Status badge */}
                  <div className="absolute right-3 top-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
                        project.status === "completed"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-orange-500/20 text-orange-300"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Selesai"
                        : `${project.progress}%`}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
