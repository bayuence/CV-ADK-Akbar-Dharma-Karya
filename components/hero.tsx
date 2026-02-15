"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteData } from "@/lib/data";
import { WhatsAppIcon } from "./icons/whatsapp";

const Scene3D = dynamic(() => import("./scene-3d"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Canvas Background */}
      <Scene3D />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm tracking-widest text-primary">
            {siteData.company.shortDesc}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          <span className="text-balance">
            {siteData.company.tagline.split(" ").map((word, i) =>
              word === "Konsep" || word === "Nyata" ? (
                <span key={i} className="text-primary">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
        >
          {siteData.company.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={siteData.company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Konsultasi Gratis
            <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#proyek"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/30"
          >
            Lihat Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
