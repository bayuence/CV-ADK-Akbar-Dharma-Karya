"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { siteData } from "@/lib/data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/logoOnly-ADK.png`}
              alt="Logo CV Akbar Dharma Karya"
              className="h-10 w-auto sm:h-12"
            />
            <span className="hidden font-serif text-base font-bold text-foreground sm:block">
              Akbar Dharma Karya
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {siteData.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA + Theme toggle + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            <a
              href="#kontak"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 lg:inline-flex"
            >
              Hubungi Kami
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-4 py-6">
              {siteData.navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/50 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
