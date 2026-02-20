/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = process.env.STATIC_EXPORT === "true" || isGitHubPages;

const nextConfig = {
  // Static export for GitHub Pages or static hosting (Netlify, Cloudflare Pages, etc.)
  ...(isStaticExport && { output: "export" }),
  basePath: isGitHubPages ? "/CV-ADK-Akbar-Dharma-Karya" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/CV-ADK-Akbar-Dharma-Karya" : "",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "9l4mv13h",
    NEXT_PUBLIC_SANITY_DATASET: "production",
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
