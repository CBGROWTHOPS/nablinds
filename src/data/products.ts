export type ProductCategory = 'blinds' | 'shades' | 'shutters' | 'drapes';

export type ProductTypeConfig = {
  slug: string;
  name: string;
  shortDescription: string;
  imagePath: string;
};

export const PRODUCT_CATEGORIES: Record<ProductCategory, { name: string; path: string }> = {
  blinds: { name: 'Blinds', path: '/products/blinds' },
  shades: { name: 'Shades', path: '/products/shades' },
  shutters: { name: 'Shutters', path: '/products/shutters' },
  drapes: { name: 'Drapes', path: '/products/drapes' },
};

export const BLINDS_TYPES: ProductTypeConfig[] = [
  { slug: 'faux-wood-blinds', name: 'Faux Wood Blinds', shortDescription: 'Durable, moisture-resistant alternative to real wood. Ideal for bathrooms and humid South Florida climates.', imagePath: '/shutters-room.png' },
  { slug: 'real-wood-blinds', name: 'Real Wood Blinds', shortDescription: 'Classic warmth and natural grain. Premium choice for living rooms and formal spaces.', imagePath: '/shutters-room.png' },
  { slug: 'aluminum-mini-blinds', name: 'Aluminum Mini Blinds', shortDescription: 'Slim slats, budget-friendly. Easy to clean and maintain for high-traffic areas.', imagePath: '/vertical-blinds-room.png' },
  { slug: 'vertical-blinds', name: 'Vertical Blinds', shortDescription: 'Perfect for sliding doors and wide windows. Smooth operation for pool and patio access.', imagePath: '/vertical-blinds-room.png' },
  { slug: 'cordless-blinds', name: 'Cordless Blinds', shortDescription: 'Safe for kids and pets. Clean look with push-pull or wand operation.', imagePath: '/roller-shades-room.png' },
  { slug: 'motorized-blinds', name: 'Motorized Blinds', shortDescription: 'Remote, app, and voice control. Ideal for hard-to-reach windows and smart homes.', imagePath: '/motorized-shades-room.png' },
  { slug: 'top-down-bottom-up-blinds', name: 'Top-Down Bottom-Up Blinds', shortDescription: 'Privacy with natural light. Lower from top or raise from bottom for flexible control.', imagePath: '/roller-shades-room.png' },
  { slug: 'light-filtering-blinds', name: 'Light-Filtering Blinds', shortDescription: 'Soft diffused light while maintaining privacy. Great for bedrooms and offices.', imagePath: '/solar-shades-room.png' },
  { slug: 'room-darkening-blinds', name: 'Room-Darkening Blinds', shortDescription: 'Significant light blockage for better sleep. Bedrooms and media rooms.', imagePath: '/blackout-shades-room.png' },
  { slug: 'patio-door-blinds', name: 'Patio Door Blinds', shortDescription: 'Designed for sliding glass doors. Durable for pool and patio access.', imagePath: '/vertical-blinds-room.png' },
];

export const SHADES_TYPES: ProductTypeConfig[] = [
  { slug: 'roller-shades', name: 'Roller Shades', shortDescription: 'Clean, minimalist design. Wide fabric and opacity options for any room.', imagePath: '/roller-shades-room.png' },
  { slug: 'solar-shades', name: 'Solar Shades', shortDescription: 'Block heat and UV while keeping your view. Essential for South Florida sun.', imagePath: '/solar-shades-room.png' },
  { slug: 'zebra-shades', name: 'Zebra Shades', shortDescription: 'Alternating sheer and solid bands. Modern look with flexible light control.', imagePath: '/zebra-shades-room.png' },
  { slug: 'roman-shades', name: 'Roman Shades', shortDescription: 'Elegant fabric folds. Tailored finish for bedrooms and dining rooms.', imagePath: '/roman-shades-room.png' },
  { slug: 'cellular-shades', name: 'Cellular Shades', shortDescription: 'Honeycomb insulation. Energy-efficient for South Florida heat.', imagePath: '/cellular-shades-room.png' },
  { slug: 'woven-wood-shades', name: 'Woven Wood Shades', shortDescription: 'Natural texture with bamboo or grasses. Warm, organic aesthetic.', imagePath: '/zebra-shades-room.png' },
  { slug: 'sheer-shades', name: 'Sheer Shades', shortDescription: 'Gentle light diffusion. Between sheer and opaque with one pull.', imagePath: '/solar-shades-room.png' },
  { slug: 'blackout-shades', name: 'Blackout Shades', shortDescription: 'Complete darkness. Bedrooms, nurseries, and media rooms.', imagePath: '/blackout-shades-room.png' },
  { slug: 'motorized-shades', name: 'Motorized Shades', shortDescription: 'Remote and voice control. Convenience for any shade type.', imagePath: '/motorized-shades-room.png' },
];

export const SHUTTERS_TYPES: ProductTypeConfig[] = [
  { slug: 'plantation-shutters', name: 'Plantation Shutters', shortDescription: 'Wide louvers, timeless style. Most popular shutter choice in South Florida.', imagePath: '/shutters-room.png' },
  { slug: 'poly-shutters', name: 'Poly Shutters', shortDescription: 'Moisture-resistant composite. Perfect for bathrooms and coastal homes.', imagePath: '/shutters-room.png' },
  { slug: 'wood-shutters', name: 'Wood Shutters', shortDescription: 'Real wood construction. Premium option for formal spaces.', imagePath: '/shutters-room.png' },
  { slug: 'cafe-shutters', name: 'Café Shutters', shortDescription: 'Cover lower half only. Privacy with upper light and view.', imagePath: '/shutters-room.png' },
  { slug: 'full-height-shutters', name: 'Full-Height Shutters', shortDescription: 'Floor-to-ceiling coverage. Maximum light and privacy control.', imagePath: '/shutters-room.png' },
  { slug: 'bypass-track-shutters', name: 'Bypass Track Shutters', shortDescription: 'Sliding panels for wide openings. Great for sliding doors.', imagePath: '/shutters-room.png' },
  { slug: 'bi-fold-shutters', name: 'Bi-Fold Shutters', shortDescription: 'Fold and stack to the sides. Flexible for various window sizes.', imagePath: '/shutters-room.png' },
  { slug: 'sliding-door-shutters', name: 'Sliding Door Shutters', shortDescription: 'Designed for patio doors. Durable for high-traffic access.', imagePath: '/shutters-room.png' },
];

export const DRAPES_TYPES: ProductTypeConfig[] = [
  { slug: 'pinch-pleat-drapes', name: 'Pinch-Pleat Drapes', shortDescription: 'Classic tailored pleats. Traditional elegance for formal rooms.', imagePath: '/custom-drapes-room.png' },
  { slug: 'ripple-fold-drapes', name: 'Ripple-Fold Drapes', shortDescription: 'Modern continuous pleats. Smooth operation and contemporary look.', imagePath: '/custom-drapes-room.png' },
  { slug: 'grommet-drapes', name: 'Grommet Drapes', shortDescription: 'Metal rings for easy sliding. Casual, relaxed aesthetic.', imagePath: '/custom-drapes-room.png' },
  { slug: 'blackout-drapes', name: 'Blackout Drapes', shortDescription: 'Total light blockage with drapes. Bedrooms and media rooms.', imagePath: '/blackout-shades-room.png' },
  { slug: 'sheer-curtains', name: 'Sheer Curtains', shortDescription: 'Soft filtered light. Layer over shades for privacy with view.', imagePath: '/custom-drapes-room.png' },
  { slug: 'layered-drapery', name: 'Layered Drapery', shortDescription: 'Sheer plus blackout or decorative. Designer look with flexibility.', imagePath: '/custom-drapes-room.png' },
  { slug: 'motorized-drapery-tracks', name: 'Motorized Drapery Tracks', shortDescription: 'Motorized operation for drapes. Luxury and convenience combined.', imagePath: '/motorized-shades-room.png' },
  { slug: 'custom-valances', name: 'Custom Valances', shortDescription: 'Decorative top treatments. Finish the look above blinds or shades.', imagePath: '/custom-drapes-room.png' },
];

export function getTypesByCategory(category: ProductCategory): ProductTypeConfig[] {
  switch (category) {
    case 'blinds': return BLINDS_TYPES;
    case 'shades': return SHADES_TYPES;
    case 'shutters': return SHUTTERS_TYPES;
    case 'drapes': return DRAPES_TYPES;
    default: return [];
  }
}

export function getTypeBySlug(category: ProductCategory, slug: string): ProductTypeConfig | undefined {
  return getTypesByCategory(category).find((t) => t.slug === slug);
}
