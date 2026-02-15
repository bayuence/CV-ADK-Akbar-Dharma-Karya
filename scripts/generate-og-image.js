const sharp = require("sharp");
const path = require("path");

async function generateOGImage() {
  const logoPath = path.join(__dirname, "..", "public", "logoOnly-ADK.png");
  const outputPath = path.join(__dirname, "..", "public", "og-image.png");

  // Create 1200x630 OG image with company branding
  const width = 1200;
  const height = 630;

  // Dark blue background matching the website's dark theme
  const bgColor = { r: 15, g: 23, b: 42 }; // ~hsl(215, 50%, 11%)

  // Resize logo to fit nicely
  const logoBuffer = await sharp(logoPath)
    .resize(280, null, { fit: "inside" })
    .toBuffer();

  const logoMeta = await sharp(logoBuffer).metadata();
  const logoW = logoMeta.width;
  const logoH = logoMeta.height;

  // Create SVG overlay with text
  const svgOverlay = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Gradient background accent -->
    <defs>
      <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:transparent"/>
        <stop offset="30%" style="stop-color:#2563eb;stop-opacity:0.6"/>
        <stop offset="70%" style="stop-color:#2563eb;stop-opacity:0.6"/>
        <stop offset="100%" style="stop-color:transparent"/>
      </linearGradient>
      <linearGradient id="orangeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#ea580c;stop-opacity:0"/>
        <stop offset="50%" style="stop-color:#ea580c;stop-opacity:0.3"/>
        <stop offset="100%" style="stop-color:#ea580c;stop-opacity:0"/>
      </linearGradient>
    </defs>
    
    <!-- Top accent line -->
    <rect x="0" y="0" width="${width}" height="4" fill="url(#accentLine)"/>
    
    <!-- Bottom accent line -->
    <rect x="0" y="${height - 4}" width="${width}" height="4" fill="url(#orangeAccent)"/>

    <!-- Company name -->
    <text x="${width / 2}" y="380" text-anchor="middle" 
          font-family="Georgia, serif" font-size="48" font-weight="bold" fill="white">
      CV Akbar Dharma Karya
    </text>
    
    <!-- Tagline -->
    <text x="${width / 2}" y="430" text-anchor="middle" 
          font-family="Arial, sans-serif" font-size="24" fill="#94a3b8">
      Dari Konsep Hingga Jadi Nyata
    </text>
    
    <!-- Services -->
    <text x="${width / 2}" y="490" text-anchor="middle" 
          font-family="Arial, sans-serif" font-size="18" fill="#64748b">
      Design  •  Build  •  Interior
    </text>
    
    <!-- Location -->
    <text x="${width / 2}" y="580" text-anchor="middle" 
          font-family="Arial, sans-serif" font-size="16" fill="#475569">
      Yogyakarta, Indonesia
    </text>
  </svg>`;

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: bgColor,
    },
  })
    .composite([
      {
        input: logoBuffer,
        left: Math.round((width - logoW) / 2),
        top: Math.round(80),
      },
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(outputPath);

  console.log("✅ OG image generated: public/og-image.png (1200x630)");
}

generateOGImage().catch(console.error);
