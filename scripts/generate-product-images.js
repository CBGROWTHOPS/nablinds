#!/usr/bin/env node
/**
 * NA Blinds Product Image Generation Script
 *
 * This script defines prompts for generating product images. Run with an AI image
 * generation service (DALL·E, Stable Diffusion, Midjourney, etc.) or use Cursor's
 * GenerateImage tool with these prompts.
 *
 * Usage:
 *   1. For each entry in IMAGE_SPECS, use your image generation pipeline with the prompt.
 *   2. Save output to: public/images/products/{category}/{slug}.png
 *   3. Hero images: 16:9 aspect ratio
 *   4. Card images: 4:5 aspect ratio
 *
 * Optional: Add sharp or similar to convert to WebP and optimize:
 *   npm install sharp
 *   const sharp = require('sharp');
 *   await sharp(input).webp({ quality: 80 }).toFile(outputWebp);
 */

const IMAGE_SPECS = [
  // Hero images (16:9)
  { path: 'blinds/hero', prompt: 'Photorealistic South Florida affluent living room interior, custom blinds on large windows, 8-10 ft ceilings, neutral modern decor, palm trees visible through window, realistic lighting, lived-in upscale aesthetic, 16:9' },
  { path: 'shades/hero', prompt: 'Photorealistic South Florida affluent bedroom with window shades, solar or roller shades, 8-10 ft ceilings, neutral modern decor, palm trees outside, realistic lighting, lived-in upscale aesthetic, 16:9' },
  { path: 'shutters/hero', prompt: 'Photorealistic South Florida affluent living room with plantation shutters, white shutters on windows, 8-10 ft ceilings, neutral coastal decor, palm trees visible, realistic lighting, lived-in upscale aesthetic, 16:9' },
  { path: 'drapes/hero', prompt: 'Photorealistic South Florida affluent living room with custom floor-length drapes, cream or taupe fabric, 8-10 ft ceilings, neutral modern decor, palm trees through window, realistic lighting, lived-in upscale aesthetic, 16:9' },
  // Blinds card images (4:5)
  { path: 'blinds/faux-wood-blinds', prompt: 'South Florida bathroom with faux wood blinds on window, moisture-resistant slats, neutral tone, 4:5' },
  { path: 'blinds/real-wood-blinds', prompt: 'South Florida living room with real wood blinds, natural grain, warm finish, 4:5' },
  { path: 'blinds/aluminum-mini-blinds', prompt: 'South Florida room with aluminum mini blinds, slim slats, neutral color, 4:5' },
  { path: 'blinds/cordless-blinds', prompt: 'South Florida bedroom with cordless roller or slat blinds, clean modern look, 4:5' },
  { path: 'blinds/top-down-bottom-up-blinds', prompt: 'South Florida room with top-down bottom-up shades or blinds, privacy with light, 4:5' },
  { path: 'blinds/light-filtering-blinds', prompt: 'South Florida office with light-filtering blinds, soft diffused light, 4:5' },
  { path: 'blinds/room-darkening-blinds', prompt: 'South Florida bedroom with room-darkening blinds, opaque fabric, 4:5' },
  { path: 'blinds/patio-door-blinds', prompt: 'South Florida living room with vertical blinds on sliding glass door, pool view, 4:5' },
  // Shades (some use existing gallery images - these are for product-specific)
  { path: 'shades/woven-wood-shades', prompt: 'South Florida room with woven wood bamboo shades, natural texture, 4:5' },
  { path: 'shades/sheer-shades', prompt: 'South Florida room with sheer shades, soft light diffusion, 4:5' },
  // Shutters (plantation used for most - these for variety)
  { path: 'shutters/cafe-shutters', prompt: 'South Florida room with cafe shutters covering lower half of window, 4:5' },
  // Drapes
  { path: 'drapes/ripple-fold-drapes', prompt: 'South Florida living room with ripple-fold drapes, modern pleats, 4:5' },
  { path: 'drapes/grommet-drapes', prompt: 'South Florida room with grommet drapes, metal rings, casual look, 4:5' },
];

console.log('NA Blinds Product Image Generation\n');
console.log('Generate images using these prompts and save to public/images/products/{path}.png\n');
IMAGE_SPECS.forEach((spec, i) => {
  console.log(`${i + 1}. public/images/products/${spec.path}.png`);
  console.log(`   ${spec.prompt}\n`);
});
