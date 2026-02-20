export type Room = 'Living Room' | 'Bedroom' | 'Kitchen' | 'Bathroom' | 'Office';
export type ProductType = 'Roller Shades' | 'Roman Shades' | 'Zebra Shades' | 'Vertical Blinds' | 'Drapes' | 'Solar Shades' | 'Shutters' | 'Cellular Shades';

export type Project = {
  id: string;
  title: string;
  location: string;
  room: Room;
  productTypes: ProductType[];
  images: string[];
  beforeImage?: string;
  description: string;
  highlight?: string;
};

export const ROOMS: Room[] = ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'];
export const PRODUCT_TYPES: ProductType[] = ['Roller Shades', 'Roman Shades', 'Zebra Shades', 'Cellular Shades', 'Vertical Blinds', 'Drapes', 'Solar Shades', 'Shutters'];

export const projects: Project[] = [
  {
    id: 'coconut-grove-living-room',
    title: 'Light-Filtering Roller Shades',
    location: 'Coconut Grove',
    room: 'Living Room',
    productTypes: ['Roller Shades'],
    images: [
      '/roller-shades-room.png',
      '/roller_shade__011.jpg',
      '/roller_shade__012.jpg',
      '/roller_shade__013.jpg',
    ],
    description: 'Filters harsh sunlight while maintaining privacy and views. The living room stays bright and comfortable without glare on screens or furniture.',
  },
  {
    id: 'coral-gables-bedroom',
    title: 'Blackout Roller Shades',
    location: 'Coral Gables',
    room: 'Bedroom',
    productTypes: ['Roller Shades'],
    images: [
      '/blackout-shades-room.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b865e6116092501a8.png',
      '/roller_shade__010.jpg',
    ],
    highlight: 'Challenge: East-facing bedroom with harsh morning light. Solution: Custom blackout shades for complete darkness and restful sleep.',
    description: 'Complete darkness for restful sleep. Perfect for shift workers and light-sensitive sleepers.',
  },
  {
    id: 'pinecrest-bedroom-zebra',
    title: 'Zebra Shades',
    location: 'Pinecrest',
    room: 'Bedroom',
    productTypes: ['Zebra Shades'],
    images: [
      '/zebra-shades-room.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e23865e61df5f24bf18.png',
    ],
    description: 'Adjustable light and privacy control. Modern style with flexible control—sheer for daytime, opaque for privacy.',
  },
  {
    id: 'boca-raton-bedroom-roman',
    title: 'Custom Roman Shades',
    location: 'Boca Raton',
    room: 'Bedroom',
    productTypes: ['Roman Shades'],
    images: [
      '/roman-shades-room.png',
      '/roman_shade__006.jpg',
      '/roman_shade__001.jpg',
      '/roman_shade__009.jpg',
    ],
    description: 'Elegant fabric folds with tailored finishes. A refined look that suits traditional and transitional bedrooms. Available in light-filtering or room-darkening options.',
  },
  {
    id: 'delray-beach-kitchen',
    title: 'Light-Filtering Roller Shade',
    location: 'Delray Beach',
    room: 'Kitchen',
    productTypes: ['Roller Shades'],
    images: [
      '/roller-shades-room.png',
      '/roller_shade__001.jpg',
      '/roller_shade__013.jpg',
    ],
    description: 'Designer pattern with soft natural light. Kitchen stays bright for cooking while reducing afternoon glare.',
  },
  {
    id: 'weston-living-room-vertical',
    title: 'Vertical Blinds',
    location: 'Weston',
    room: 'Living Room',
    productTypes: ['Vertical Blinds'],
    images: [
      '/vertical-blinds-room.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c109dca1362.png',
    ],
    highlight: 'Challenge: Wide sliding door to the pool. Solution: Durable vertical blinds for easy operation and UV protection.',
    description: 'Smooth operation for sliding glass doors. Built for high-traffic areas and pool access.',
  },
  {
    id: 'brickell-office-solar',
    title: 'Solar Roller Shades',
    location: 'Brickell',
    room: 'Office',
    productTypes: ['Solar Shades'],
    images: [
      '/solar-shades-room.png',
      'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9ce352ca1361.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
    ],
    description: 'Glare reduction and UV protection with maintained view. Ideal for high-rise condos and home offices.',
  },
  {
    id: 'palm-beach-gardens-drapes',
    title: 'Custom Drapes',
    location: 'Palm Beach Gardens',
    room: 'Bedroom',
    productTypes: ['Drapes'],
    images: [
      '/custom-drapes-room.png',
      '/drapery_panels__015.jpg',
      '/drapery_panels__016.jpg',
      'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c0f5fca135d.png',
    ],
    description: 'Tailored luxury with premium fabric and hardware. Floor-length panels for a sophisticated finish.',
  },
  {
    id: 'miami-beach-bathroom',
    title: 'Privacy Roller Shade',
    location: 'Miami Beach',
    room: 'Bathroom',
    productTypes: ['Roller Shades'],
    images: [
      '/roller-shades-room.png',
      '/roller_shade__010.jpg',
      '/roller_shade__011.jpg',
    ],
    highlight: 'Challenge: Humid coastal bathroom. Solution: Moisture-resistant fabric that holds up in salt air.',
    description: 'Moisture-resistant fabric for humid coastal bathrooms. Privacy without sacrificing light.',
  },
  {
    id: 'boca-raton-living-shutters',
    title: 'Custom Shutters',
    location: 'Boca Raton',
    room: 'Living Room',
    productTypes: ['Shutters'],
    images: [
      '/shutters-room.png',
      '/shutters__001.jpg',
    ],
    description: 'Durable, low-maintenance shutters that provide privacy, light control, and a timeless finished look.',
  },
  {
    id: 'coconut-grove-master',
    title: 'Dual-Layer Shades & Drapes',
    location: 'Coconut Grove',
    room: 'Bedroom',
    productTypes: ['Zebra Shades', 'Drapes'],
    images: [
      '/zebra-shades-room.png',
      '/custom-drapes-room.png',
    ],
    description: 'Combination of zebra shades for light control and custom drapes for a layered, designer look.',
  },
  {
    id: 'key-biscayne-condo',
    title: 'Solar Shades — Condo',
    location: 'Key Biscayne',
    room: 'Living Room',
    productTypes: ['Solar Shades'],
    images: [
      '/solar-shades-room.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
    ],
    highlight: 'Challenge: HOA-compliant window coverings for floor-to-ceiling glass. Solution: Solar shades that meet building requirements.',
    description: 'HOA-compliant solar shades for floor-to-ceiling windows. Glare reduction with maintained ocean view.',
  },
  {
    id: 'fort-lauderdale-office-cellular',
    title: 'Cellular (Honeycomb) Shades',
    location: 'Fort Lauderdale',
    room: 'Office',
    productTypes: ['Cellular Shades'],
    images: [
      '/cellular-shades-room.png',
    ],
    highlight: 'Challenge: West-facing home office with intense afternoon heat. Solution: Energy-efficient cellular shades that insulate and reduce cooling costs.',
    description: 'Energy-efficient honeycomb design insulates against South Florida heat. Clean, modern look with excellent light control.',
  },
  {
    id: 'coral-gables-master-motorized',
    title: 'Motorized Roller Shades',
    location: 'Coral Gables',
    room: 'Bedroom',
    productTypes: ['Roller Shades'],
    images: [
      '/motorized-shades-room.png',
      '/roller_shade__012.jpg',
    ],
    highlight: 'Challenge: Hard-to-reach windows and desire for smart home integration. Solution: Motorized shades controlled by remote, app, or voice.',
    description: 'Control shades by remote, app, or voice. Perfect for large windows and smart home enthusiasts.',
  },
  {
    id: 'delray-beach-living-roman',
    title: 'Custom Roman Shades',
    location: 'Delray Beach',
    room: 'Living Room',
    productTypes: ['Roman Shades'],
    images: [
      '/roman-shades-room.png',
      '/roman_shade__001.jpg',
      '/roman_shade__007.jpg',
      '/roman_shade__006.jpg',
    ],
    description: 'Elegant fabric folds add timeless sophistication to the living room. Tailored to exact window dimensions.',
  },
  {
    id: 'west-palm-beach-drapes',
    title: 'Designer Drapery Panels',
    location: 'West Palm Beach',
    room: 'Living Room',
    productTypes: ['Drapes'],
    images: [
      '/drapery_panels__003.jpg',
      '/drapery_panels__006.jpg',
      '/drapery_panels__012.jpg',
      '/custom-drapes-room.png',
    ],
    description: 'Floor-length panels in premium fabric frame the view. Custom hardware and blackout lining available.',
  },
  {
    id: 'miami-living-room-solar',
    title: 'Solar Shades — Living Room',
    location: 'Miami',
    room: 'Living Room',
    productTypes: ['Solar Shades'],
    images: [
      '/solar-shades-room.png',
      'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
    ],
    description: 'Glare reduction with maintained view. Ideal for living rooms with floor-to-ceiling windows facing the pool or water.',
  },
];
