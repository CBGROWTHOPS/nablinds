// Configurator data for Build Your Project - NA Blinds
// All images are AI-generated lifestyle photos

export type ProductCategory = 'blinds' | 'shades' | 'shutters' | 'drapes';

const C = '/images/configurator';

export const ROOMS = [
  { id: 'living-room', name: 'Living Room', image: `${C}/configurator-living-room.png`, alt: 'Living room with window coverings' },
  { id: 'bedroom', name: 'Bedroom', image: `${C}/configurator-bedroom.png`, alt: 'Bedroom with window treatments' },
  { id: 'kitchen', name: 'Kitchen', image: `${C}/configurator-kitchen.png`, alt: 'Kitchen with window coverings' },
  { id: 'bathroom', name: 'Bathroom', image: `${C}/configurator-bathroom.png`, alt: 'Bathroom with window coverings' },
  { id: 'home-office', name: 'Home Office', image: `${C}/configurator-home-office.png`, alt: 'Home office with window treatments' },
  { id: 'dining-room', name: 'Dining Room', image: `${C}/configurator-dining-room.png`, alt: 'Dining room with window coverings' },
] as const;

export const CATEGORIES: {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  alt: string;
}[] = [
  { id: 'blinds', name: 'Blinds', description: 'Slatted or layered styles for flexible light and privacy control', image: `${C}/configurator-category-blinds.png`, alt: 'Blinds installed in a modern home' },
  { id: 'shades', name: 'Shades', description: 'Soft fabric or woven looks that filter light', image: `${C}/configurator-category-shades.png`, alt: 'Shades installed in a modern home' },
  { id: 'shutters', name: 'Shutters', description: 'Solid panels with louvers for a premium built-in look', image: `${C}/configurator-category-shutters.png`, alt: 'Shutters installed in a modern home' },
  { id: 'drapes', name: 'Drapes', description: 'Full-length curtains for softness and insulation', image: `${C}/configurator-category-drapes.png`, alt: 'Drapes installed in a modern home' },
];

export const PRODUCT_TYPES: Record<
  ProductCategory,
  { id: string; name: string; description: string; image: string; alt: string }[]
> = {
  blinds: [
    { id: 'roller-blinds', name: 'Roller Blinds', description: 'Clean minimalist design with wide fabric options', image: `${C}/configurator-roller-blinds.png`, alt: 'Roller blinds in a modern interior' },
    { id: 'venetian-blinds', name: 'Venetian Blinds', description: 'Classic horizontal slats for precise light control', image: `${C}/configurator-venetian-blinds.png`, alt: 'Venetian blinds in a modern interior' },
    { id: 'vertical-blinds', name: 'Vertical Blinds', description: 'Perfect for sliding doors and wide windows', image: `${C}/configurator-vertical-blinds.png`, alt: 'Vertical blinds in a modern interior' },
    { id: 'roman-blinds', name: 'Roman Blinds', description: 'Elegant fabric folds for a tailored finish', image: `${C}/configurator-roman-blinds.png`, alt: 'Roman blinds in a modern interior' },
    { id: 'panel-blinds', name: 'Panel Blinds', description: 'Wide panels for large windows and doors', image: `${C}/configurator-panel-blinds.png`, alt: 'Panel blinds in a modern interior' },
    { id: 'zebra-blinds', name: 'Zebra Blinds', description: 'Alternating sheer and solid bands for flexible light control', image: `${C}/configurator-zebra-blinds.png`, alt: 'Zebra blinds in a modern interior' },
  ],
  shades: [
    { id: 'sheer-shades', name: 'Sheer Shades', description: 'Gentle light diffusion with one pull', image: `${C}/configurator-sheer-shades.png`, alt: 'Sheer shades in a modern interior' },
    { id: 'cellular-shades', name: 'Cellular / Honeycomb Shades', description: 'Energy-efficient honeycomb insulation', image: `${C}/configurator-cellular-shades.png`, alt: 'Cellular shades in a modern interior' },
    { id: 'solar-shades', name: 'Solar Shades', description: 'Block heat and UV while keeping your view', image: `${C}/configurator-solar-shades.png`, alt: 'Solar shades in a modern interior' },
    { id: 'woven-wood-shades', name: 'Woven Wood Shades', description: 'Natural texture with bamboo or grasses', image: `${C}/configurator-woven-wood-shades.png`, alt: 'Woven wood shades in a modern interior' },
    { id: 'pleated-shades', name: 'Pleated Shades', description: 'Soft folded fabric for a refined look', image: `${C}/configurator-pleated-shades.png`, alt: 'Pleated shades in a modern interior' },
  ],
  shutters: [
    { id: 'plantation-shutters', name: 'Plantation Shutters', description: 'Wide louvers, timeless style', image: `${C}/configurator-plantation-shutters.png`, alt: 'Plantation shutters in a modern interior' },
    { id: 'timber-shutters', name: 'Timber Shutters', description: 'Real wood construction for premium appeal', image: `${C}/configurator-timber-shutters.png`, alt: 'Timber shutters in a modern interior' },
    { id: 'aluminium-shutters', name: 'Aluminium Shutters', description: 'Durable, modern and low maintenance', image: `${C}/configurator-aluminium-shutters.png`, alt: 'Aluminium shutters in a modern interior' },
    { id: 'basswood-shutters', name: 'Basswood Shutters', description: 'Lightweight hardwood with fine grain', image: `${C}/configurator-basswood-shutters.png`, alt: 'Basswood shutters in a modern interior' },
  ],
  drapes: [
    { id: 'eyelet-drapes', name: 'Eyelet Drapes', description: 'Metal rings for easy sliding, relaxed aesthetic', image: `${C}/configurator-eyelet-drapes.png`, alt: 'Eyelet drapes in a modern interior' },
    { id: 'pinch-pleat-drapes', name: 'Pinch Pleat Drapes', description: 'Classic tailored pleats for elegance', image: `${C}/configurator-pinch-pleat-drapes.png`, alt: 'Pinch pleat drapes in a modern interior' },
    { id: 's-fold-drapes', name: 'S Fold Drapes', description: 'Modern continuous pleats for smooth operation', image: `${C}/configurator-s-fold-drapes.png`, alt: 'S Fold drapes in a modern interior' },
    { id: 'sheer-drapes', name: 'Sheer Drapes', description: 'Soft filtered light and delicate look', image: `${C}/configurator-sheer-drapes.png`, alt: 'Sheer drapes in a modern interior' },
    { id: 'blockout-drapes', name: 'Blockout Drapes', description: 'Total light blockage for bedrooms', image: `${C}/configurator-blockout-drapes.png`, alt: 'Blockout drapes in a modern interior' },
  ],
};

export const COLOURS = [
  { id: 'white', name: 'White', value: '#FFFFFF' },
  { id: 'off-white', name: 'Off White', value: '#F5F5DC' },
  { id: 'cream', name: 'Cream', value: '#FFFDD0' },
  { id: 'beige', name: 'Beige', value: '#D4B896' },
  { id: 'light-grey', name: 'Light Grey', value: '#D3D3D3' },
  { id: 'charcoal', name: 'Charcoal', value: '#36454F' },
  { id: 'black', name: 'Black', value: '#1A1A1A' },
  { id: 'timber', name: 'Timber / Natural', value: 'linear-gradient(135deg, #8B7355 0%, #A0826D 50%, #C4A77D 100%)' },
  { id: 'custom', name: 'Custom', value: 'repeating-conic-gradient(#ccc 0% 25%, #eee 0% 50%) 50% / 20px 20px' },
] as const;

export const CONTROL_TYPES = [
  { id: 'manual', name: 'Manual / Cord', badge: 'Most Popular', description: 'Simple, reliable, cost effective', image: `${C}/configurator-control-manual.png`, alt: 'Manual cord control for window coverings' },
  { id: 'motorised', name: 'Motorised', badge: 'Premium', description: 'Adjust with remote or smartphone for convenience', image: `${C}/configurator-control-motorised.png`, alt: 'Motorised window coverings' },
];

export type ProjectScope = 'single-room' | 'multiple-rooms' | 'whole-home' | 'new-build' | 'exploring';

export const PROJECT_SCOPES: { id: ProjectScope; name: string; description: string }[] = [
  { id: 'single-room', name: 'Single Room', description: 'One room or area' },
  { id: 'multiple-rooms', name: 'Multiple Rooms', description: 'Several rooms in your home' },
  { id: 'whole-home', name: 'Whole Home', description: 'Complete home coverage' },
  { id: 'new-build', name: 'New Build / Renovation', description: 'New construction or major remodel' },
  { id: 'exploring', name: 'Just Exploring Options', description: 'Getting ideas and pricing' },
];

export type WindowCountRange = '1-2' | '3-5' | '6-9' | '10-14' | '15+' | 'not-sure';

export const WINDOW_COUNT_RANGES: { id: WindowCountRange; name: string }[] = [
  { id: '1-2', name: '1–2' },
  { id: '3-5', name: '3–5' },
  { id: '6-9', name: '6–9' },
  { id: '10-14', name: '10–14' },
  { id: '15+', name: '15+' },
  { id: 'not-sure', name: 'Not sure' },
];

export type ProductVariation = 'same' | 'different';

export const PRODUCT_VARIATION_OPTIONS: { id: ProductVariation; name: string; description: string }[] = [
  { id: 'same', name: 'Same for most windows', description: 'One style throughout' },
  { id: 'different', name: 'Different styles in some areas', description: 'Multiple configurations' },
];

export type GroupCount = 2 | 3;

export const GROUP_COUNT_OPTIONS: { id: GroupCount | 'not-sure'; name: string }[] = [
  { id: 2, name: '2 groups' },
  { id: 3, name: '3 groups' },
  { id: 'not-sure', name: 'Not sure' },
];

export const GROUP_AREAS = [
  { id: 'bedrooms', name: 'Bedrooms' },
  { id: 'living-areas', name: 'Living Areas' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'bathroom', name: 'Bathroom' },
  { id: 'office', name: 'Office' },
  { id: 'other', name: 'Other' },
] as const;
