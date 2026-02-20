import type { ProductCategory } from './products';

export type HubConfig = {
  category: ProductCategory;
  title: string;
  description: string;
  h1: string;
  heroSubhead: string;
  heroImage: string;
  faqs: { q: string; a: string }[];
};

export const HUB_CONFIG: Record<ProductCategory, HubConfig> = {
  blinds: {
    category: 'blinds',
    title: 'Blinds South Florida | Custom Window Blinds Miami, Broward & Palm Beach | NA Blinds',
    description: 'Custom blinds for South Florida homes. Faux wood, real wood, aluminum, vertical & cordless blinds. Professional installation across Miami, Fort Lauderdale, Boca Raton. Free consultation.',
    h1: 'Custom Blinds for South Florida Homes',
    heroSubhead: 'From classic wood and aluminum to modern cordless and motorized options. Professional installation across Miami-Dade, Broward, and Palm Beach.',
    heroImage: '/hero-gallery.png',
    faqs: [
      { q: 'What types of blinds work best in South Florida humidity?', a: 'Faux wood and aluminum blinds hold up best in our humid climate. Real wood can warp; moisture-resistant composites and metals avoid that. We recommend faux wood for bathrooms and coastal homes.' },
      { q: 'Are cordless blinds safe for kids and pets?', a: 'Yes. Cordless blinds eliminate dangling cords, meeting modern safety standards. They use a push-pull or wand mechanism instead. Required in many new builds and ideal for families.' },
      { q: 'Can I get motorized blinds for existing windows?', a: 'Yes. Most window sizes and blind types can be retrofitted with motors. We assess your windows during a free consultation and recommend compatible systems.' },
    ],
  },
  shades: {
    category: 'shades',
    title: 'Window Shades South Florida | Solar, Blackout, Zebra & Roman Shades | NA Blinds',
    description: 'Custom window shades for South Florida. Solar, roller, zebra, roman, cellular & blackout shades. Professional installation in Miami, Fort Lauderdale, Boca Raton. Free consultation.',
    h1: 'Window Shades for South Florida Homes',
    heroSubhead: 'Solar shades for our intense sun, blackout for bedrooms, zebra for modern style. Professional installation across the Tri-County area.',
    heroImage: '/hero-services.png',
    faqs: [
      { q: 'What are the best shades for South Florida sun?', a: 'Solar shades are ideal—they block heat and UV while preserving your view. Cellular shades add insulation. Both reduce cooling costs and protect furnishings from fading.' },
      { q: 'What is the difference between light-filtering and blackout shades?', a: 'Light-filtering shades soften and diffuse light while maintaining some visibility. Blackout shades block virtually all light for complete darkness—best for bedrooms and media rooms.' },
      { q: 'Can shades be motorized?', a: 'Yes. Most shade types—roller, cellular, roman, zebra—can be motorized. We offer systems that work with remotes, apps, and voice assistants. See our motorized options for details.' },
    ],
  },
  shutters: {
    category: 'shutters',
    title: 'Plantation Shutters South Florida | Custom Wood & Poly Shutters | NA Blinds',
    description: 'Custom shutters for South Florida homes. Plantation, poly, wood & café shutters. Professional installation in Miami, Fort Lauderdale, Boca Raton. Built for heat and humidity.',
    h1: 'Custom Shutters for South Florida Homes',
    heroSubhead: 'Plantation shutters that withstand heat, humidity, and salt air. Professional installation across Miami-Dade, Broward, and Palm Beach.',
    heroImage: '/hero-process.png',
    faqs: [
      { q: 'Are wood shutters suitable for South Florida bathrooms?', a: 'Real wood can warp in high humidity. We recommend poly or composite shutters for bathrooms and coastal rooms—they resist moisture and look like wood.' },
      { q: 'What is the difference between café and full-height shutters?', a: 'Café shutters cover only the lower half of the window, giving privacy while leaving the top open for light and view. Full-height shutters cover the entire window for maximum control.' },
      { q: 'Can shutters be used on sliding glass doors?', a: 'Yes. Bypass-track and sliding-door shutters are designed for wide openings. They provide durability for high-traffic patio access and work well in South Florida homes.' },
    ],
  },
  drapes: {
    category: 'drapes',
    title: 'Custom Drapes & Curtains South Florida | NA Blinds',
    description: 'Custom drapes and curtains for South Florida homes. Pinch-pleat, ripple-fold, blackout & sheer. Professional installation in Miami, Fort Lauderdale, Boca Raton. Free consultation.',
    h1: 'Custom Drapes for South Florida Homes',
    heroSubhead: 'Tailored drapery in premium fabrics. From sheer to blackout, classic to contemporary. Professional installation across the Tri-County area.',
    heroImage: '/hero-trade.png',
    faqs: [
      { q: 'What fabrics hold up best in South Florida?', a: 'UV-resistant and moisture-resistant fabrics perform best. We carry lines specifically rated for high-sun and humid climates. Lined drapes also add durability and light control.' },
      { q: 'Can drapes be layered with shades?', a: 'Yes. Layered treatments are popular—sheer or blackout drapes over roller or solar shades give flexibility for light and privacy. We design and install complete layered solutions.' },
      { q: 'Are motorized drapery tracks available?', a: 'Yes. Motorized tracks allow you to open and close drapes with a remote, app, or voice command. Ideal for large windows and smart homes.' },
    ],
  },
};
