/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/CV-ADK-Akbar-Dharma-Karya" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/CV-ADK-Akbar-Dharma-Karya" : "",
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
