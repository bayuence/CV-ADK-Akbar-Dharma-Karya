"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Tim CV Akbar Dharma Karya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 rounded-xl border border-border bg-card p-6 shadow-2xl shadow-primary/5 md:-right-8"
            >
              <p className="font-serif text-3xl font-bold text-primary">{siteData.stats[1].number}</p>
              <p className="text-sm text-muted-foreground">
                Tahun Pengalaman
              </p>
            </motion.div>
            {/* Accent line */}
            <div className="absolute -left-4 top-8 h-24 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Tentang Kami
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Mitra Terpercaya untuk Bangunan Impian Anda
              </span>
            </h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              {siteData.company.description}
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Dengan tim profesional yang berpengalaman, kami menghadirkan solusi
              lengkap mulai dari perencanaan desain, pembangunan, hingga finishing
              interior. Setiap proyek dikerjakan dengan standar tinggi dan perhatian
              terhadap detail.
            </p>

            {/* Sub-brands */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              {siteData.company.subBrands.map((brand) => (
                <a
                  key={brand.handle}
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-all hover:border-primary/30 hover:bg-secondary"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-bold text-primary">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {brand.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {brand.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {siteData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
