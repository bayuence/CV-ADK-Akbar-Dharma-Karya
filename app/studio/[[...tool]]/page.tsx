/**
 * This route handles Sanity Studio.
 * All routes under /studio will be handled by Sanity Studio.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
