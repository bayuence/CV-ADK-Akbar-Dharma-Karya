"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import SectionHeader from "./section-header";
import type { SiteData } from "@/lib/types";
import { WhatsAppIcon } from "./icons/whatsapp";

export default function Contact({ data }: { data: SiteData }) {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build WhatsApp message with proper encoding
    const message = [
      `Halo, saya ${formState.name}.`,
      ``,
      `Layanan: ${formState.service}`,
      `Pesan: ${formState.message}`,
      ``,
      `Telepon: ${formState.phone}`,
      formState.email ? `Email: ${formState.email}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `${data.company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
    // Reset form after sending
    setFormState({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="kontak" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Hubungi Kami"
          title="Mulai Proyek Anda"
          description="Konsultasikan kebutuhan Anda dengan tim profesional kami. Kami siap membantu mewujudkan impian Anda."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    suppressHydrationWarning
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    No. Telepon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, phone: e.target.value }))
                    }
                    suppressHydrationWarning
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Layanan yang Dibutuhkan
                </label>
                <select
                  id="service"
                  required
                  value={formState.service}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, service: e.target.value }))
                  }
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Pilih Layanan</option>
                  {data.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                suppressHydrationWarning
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
              >
                {submitted ? (
                  "Membuka WhatsApp..."
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact info cards */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Alamat</p>
                  <p className="text-sm text-muted-foreground">
                    {data.company.address}
                  </p>
                </div>
              </div>
              <a
                href={`tel:${data.company.phone}`}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Telepon</p>
                  <p className="text-sm text-muted-foreground">
                    {data.company.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${data.company.email}`}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    {data.company.email}
                  </p>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={data.company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-[#22c55e]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat via WhatsApp
            </a>

            {/* Map */}
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src={data.company.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV Akbar Dharma Karya"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
