const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const INPUT = path.join(__dirname, "..", "public", "logoOnly-ADK.png");
const OUTPUT_DIR = path.join(__dirname, "..", "public");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192x192.png", size: 192 },
  { name: "icon-512x512.png", size: 512 },
];

async function generateFavicons() {
  console.log("🔧 Generating favicons from logo...\n");

  const meta = await sharp(INPUT).metadata();
  console.log(`📐 Source: ${meta.width}x${meta.height}px\n`);

  for (const { name, size } of sizes) {
    const output = path.join(OUTPUT_DIR, name);

    // Create a square canvas with transparent background, fit logo inside
    await sharp(INPUT)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(output);

    const stat = fs.statSync(output);
    console.log(`✅ ${name} (${size}x${size}) — ${(stat.size / 1024).toFixed(1)}KB`);
  }

  // Generate ICO (use 32x32 PNG as base, save as .ico)
  // ICO is just a container — we embed the 16 and 32 PNGs
  const png16 = await sharp(INPUT)
    .resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const png32 = await sharp(INPUT)
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Build ICO file (simple ICO with PNG entries)
  const ico = buildIco([png16, png32], [16, 32]);
  fs.writeFileSync(path.join(OUTPUT_DIR, "favicon.ico"), ico);
  console.log(`✅ favicon.ico (16+32) — ${(ico.length / 1024).toFixed(1)}KB`);

  console.log("\n🎉 All favicons generated successfully!");
}

function buildIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let offset = headerSize + dirSize;

  // ICO Header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);       // Reserved
  header.writeUInt16LE(1, 2);       // Type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  // Directory entries
  const dirEntries = [];
  for (let i = 0; i < numImages; i++) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 0);  // Width
    entry.writeUInt8(sizes[i] >= 256 ? 0 : sizes[i], 1);  // Height
    entry.writeUInt8(0, 2);          // Color palette
    entry.writeUInt8(0, 3);          // Reserved
    entry.writeUInt16LE(1, 4);       // Color planes
    entry.writeUInt16LE(32, 6);      // Bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8);  // Size
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += pngBuffers[i].length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

generateFavicons().catch(console.error);
