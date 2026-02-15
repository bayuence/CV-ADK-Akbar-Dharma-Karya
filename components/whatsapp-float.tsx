"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { WhatsAppIcon } from "./icons/whatsapp";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={siteData.company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
