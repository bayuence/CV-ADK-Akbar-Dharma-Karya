/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  // Only use static export for GitHub Pages deployment
  // Dev & Sanity Studio need server-side features
  ...(isGitHubPages && { output: "export" }),
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
