// Regenerate the PWA icons: `node tools/make-icons.mjs`
// Pure Node, no dependencies. Draws the "Camino" C mark and writes PNGs by hand.

import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BG_TOP = [0xc0, 0x40, 0x27];
const BG_BOTTOM = [0x7a, 0x25, 0x17];
const GLOW = [0xe0, 0x78, 0x3c];
const CREAM = [0xff, 0xfa, 0xf2];
const GOLD = [0xc4, 0x9a, 0x4a];

const SAMPLES = 4;
const GAP_DEGREES = 38;
const RING_RADIUS = 0.27;
const RING_HALF_WIDTH = 0.063;
const CORNER_RADIUS = 0.22;

const OUTPUTS = [
  { file: "icon-192.png", size: 192, rounded: true, contentScale: 1 },
  { file: "icon-512.png", size: 512, rounded: true, contentScale: 1 },
  // Maskable icons must keep their content inside the middle 80%.
  { file: "icon-maskable-512.png", size: 512, rounded: false, contentScale: 0.78 },
  // iOS applies its own corner mask, so this one stays a full opaque square.
  { file: "apple-touch-icon.png", size: 180, rounded: false, contentScale: 1 },
  { file: "favicon-32.png", size: 32, rounded: true, contentScale: 1 },
];

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function sample(x, y, { rounded, contentScale }) {
  let alpha = 1;
  if (rounded) {
    const inset = 0.5 - CORNER_RADIUS;
    const dx = Math.max(Math.abs(x - 0.5) - inset, 0);
    const dy = Math.max(Math.abs(y - 0.5) - inset, 0);
    if (Math.hypot(dx, dy) > CORNER_RADIUS) alpha = 0;
  }
  if (alpha === 0) return [0, 0, 0, 0];

  let color = mix(BG_TOP, BG_BOTTOM, y);
  const glowFalloff = 1 - clamp01(Math.hypot(x - 0.3, y - 0.16) / 0.85);
  color = mix(color, GLOW, 0.4 * glowFalloff * glowFalloff);

  const radius = RING_RADIUS * contentScale;
  const halfWidth = RING_HALF_WIDTH * contentScale;
  const dx = x - 0.5;
  const dy = y - 0.5;

  let angle = (Math.atan2(-dy, dx) * 180) / Math.PI;
  if (angle < 0) angle += 360;

  const arcSpan = 360 - 2 * GAP_DEGREES;
  let strokeT = null;
  if (angle >= GAP_DEGREES && angle <= 360 - GAP_DEGREES) {
    if (Math.abs(Math.hypot(dx, dy) - radius) <= halfWidth) {
      strokeT = (angle - GAP_DEGREES) / arcSpan;
    }
  }
  if (strokeT === null) {
    for (const capAngle of [GAP_DEGREES, 360 - GAP_DEGREES]) {
      const rad = (capAngle * Math.PI) / 180;
      const cx = 0.5 + Math.cos(rad) * radius;
      const cy = 0.5 - Math.sin(rad) * radius;
      if (Math.hypot(x - cx, y - cy) <= halfWidth) {
        strokeT = capAngle === GAP_DEGREES ? 0 : 1;
        break;
      }
    }
  }
  if (strokeT !== null) color = mix(CREAM, GOLD, smoothstep(0.62, 1, strokeT));

  return [color[0], color[1], color[2], 255];
}

function render(size, opts) {
  const pixels = Buffer.alloc(size * size * 4);
  const step = 1 / (size * SAMPLES);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < SAMPLES; sy++) {
        for (let sx = 0; sx < SAMPLES; sx++) {
          const x = (px * SAMPLES + sx + 0.5) * step;
          const y = (py * SAMPLES + sy + 0.5) * step;
          const s = sample(x, y, opts);
          const sa = s[3] / 255;
          r += s[0] * sa;
          g += s[1] * sa;
          b += s[2] * sa;
          a += sa;
        }
      }
      const i = (py * size + px) * 4;
      if (a > 0) {
        pixels[i] = Math.round(r / a);
        pixels[i + 1] = Math.round(g / a);
        pixels[i + 2] = Math.round(b / a);
      }
      pixels[i + 3] = Math.round((a / (SAMPLES * SAMPLES)) * 255);
    }
  }
  return pixels;
}

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encodePng(size, pixels) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8; // bit depth
  header[9] = 6; // truecolour with alpha
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    const offset = y * (stride + 1);
    raw[offset] = 0; // filter type: none
    pixels.copy(raw, offset + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const iconsDir = join(dirname(dirname(fileURLToPath(import.meta.url))), "icons");
mkdirSync(iconsDir, { recursive: true });

for (const { file, size, rounded, contentScale } of OUTPUTS) {
  const png = encodePng(size, render(size, { rounded, contentScale }));
  writeFileSync(join(iconsDir, file), png);
  console.log(`${file} — ${size}x${size}, ${(png.length / 1024).toFixed(1)} kB`);
}
