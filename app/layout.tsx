import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "CV ADK | Akbar Dharma Karya",
  description:
    "CV Akbar Dharma Karya melayani jasa arsitek, konstruksi, dan desain interior dengan sentuhan modern dan profesional. Dari konsep hingga jadi nyata.",
  keywords: [
    "arsitek jogja",
    "konstruksi jogja",
    "desain interior jogja",
    "kontraktor rumah jogja",
    "renovasi rumah",
    "kitchen set",
    "desain rumah modern",
    "CV Akbar Dharma Karya",
  ],
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/icon-192x192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon-512x512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
  manifest: `${basePath}/manifest.json`,
  openGraph: {
    title: "CV ADK | Akbar Dharma Karya",
    description:
      "Dari konsep hingga jadi nyata. Jasa arsitek, konstruksi, dan desain interior modern di Jogja.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
