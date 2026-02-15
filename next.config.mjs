/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/CV-ADK-Akbar-Dharma-Karya",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/CV-ADK-Akbar-Dharma-Karya",
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
