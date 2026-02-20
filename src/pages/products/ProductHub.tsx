import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { FAQSchema, BreadcrumbSchema } from '../../components/JSONLD';
import { useSEO } from '../../utils/seo';
import { PRODUCT_CATEGORIES, getTypesByCategory, type ProductCategory } from '../../data/products';
import { HUB_CONFIG } from '../../data/productHubContent';

function HubLongForm({ category }: { category: ProductCategory }) {
  const content: Record<ProductCategory, React.ReactNode> = {
    blinds: (
      <>
        <p>South Florida homes face unique challenges: intense sun, high humidity, and salt air. Blinds must perform in these conditions while matching your style. From Miami high-rises to Boca Raton estates, we install blinds built for our climate.</p>
        <h2>Materials That Work in South Florida</h2>
        <p>Faux wood blinds resist moisture and won't warp like real wood in bathrooms or coastal rooms. Aluminum blinds are durable, easy to clean, and budget-friendly. Real wood brings warmth to living rooms and bedrooms where humidity is controlled. We help you choose materials suited to each room.</p>
        <h2>Light Control and Privacy</h2>
        <p>Blinds offer precise control—tilt slats for light, close for privacy. Light-filtering options soften glare while keeping rooms bright. Room-darkening and blackout blinds block light for bedrooms and media rooms. Top-down bottom-up styles provide privacy with natural light from above.</p>
        <h2>Energy Efficiency</h2>
        <p>Properly fitted blinds reduce solar heat gain. In South Florida, that translates to lower cooling costs. Cellular and honeycomb designs add insulation. We ensure correct measurements for minimal gaps and maximum efficiency.</p>
        <h2>Safety and Durability</h2>
        <p>Cordless blinds meet child safety standards—no dangling cords. Motorized options add convenience for hard-to-reach windows. All our blinds are built to withstand daily use and South Florida conditions.</p>
        <h2>Design Styles</h2>
        <p>Blinds come in a range of widths, colors, and finishes. Slim aluminum fits contemporary spaces; wider faux wood suits traditional interiors. We offer samples so you can see how options look in your home.</p>
        <h2>Room-by-Room Guidance</h2>
        <p><strong>Living rooms:</strong> Light-filtering or solar-style slats for views and comfort. <strong>Bedrooms:</strong> Room-darkening or blackout for sleep. <strong>Bathrooms:</strong> Faux wood or moisture-resistant materials. <strong>Kitchens:</strong> Easy-to-clean aluminum or faux wood. <strong>Sliding doors:</strong> Vertical blinds for smooth operation.</p>
        <p>Explore our motorized options at <Link to="/motorized-blinds" className="text-navy font-medium hover:underline">/motorized-blinds</Link> for remote and smart home control.</p>
      </>
    ),
    shades: (
      <>
        <p>Window shades offer a clean, modern look with excellent light and privacy control. In South Florida, solar shades are essential for blocking heat and UV while keeping views. Blackout, zebra, roman, and cellular shades round out options for every room.</p>
        <h2>Materials and Fabrics</h2>
        <p>Solar fabrics are engineered for UV resistance and heat reduction. Blackout fabrics use layered construction for complete light blockage. Cellular shades use honeycomb cells for insulation. We select fabrics rated for high-sun and humid environments.</p>
        <h2>Light and Privacy Control</h2>
        <p>Solar shades filter light—you see out, others see less in. Zebra shades toggle between sheer and opaque. Blackout shades block all light. Roman and cellular shades offer multiple opacity levels. We help match each room's needs.</p>
        <h2>Energy Efficiency</h2>
        <p>Cellular shades provide insulation; solar shades block heat before it enters. Many South Florida homeowners see noticeable cooling savings. We recommend treatments for west- and south-facing windows first.</p>
        <h2>Durability and Safety</h2>
        <p>Cordless operation is standard for safety. Motorization is available for most shade types. Fabrics are tested for fade resistance and durability in our climate.</p>
        <h2>Design Styles</h2>
        <p>Roller shades offer minimalist lines. Roman shades add softness. Zebra shades fit contemporary spaces. Woven woods bring organic texture. We help you find the right look for your home.</p>
        <h2>Room-by-Room Guidance</h2>
        <p><strong>Living rooms:</strong> Solar or light-filtering for views. <strong>Bedrooms:</strong> Blackout or room-darkening. <strong>Offices:</strong> Solar for glare reduction. <strong>Bathrooms:</strong> Moisture-resistant fabrics. <strong>Sliding doors:</strong> Solar or cellular in wider widths.</p>
        <p>For motorized shades, visit <Link to="/motorized-blinds" className="text-navy font-medium hover:underline">/motorized-blinds</Link>.</p>
      </>
    ),
    shutters: (
      <>
        <p>Shutters add lasting value and timeless style. In South Florida, poly and composite shutters resist humidity and salt air better than wood in baths and coastal rooms. Wood shutters remain a premium choice for climate-controlled spaces.</p>
        <h2>Materials for Our Climate</h2>
        <p>Poly shutters won't warp, crack, or peel. Wood shutters bring natural beauty to living rooms and bedrooms. We recommend poly for bathrooms, kitchens, and homes near the water; wood for formal spaces.</p>
        <h2>Light and Privacy</h2>
        <p>Adjustable louvers control light and view. Full-height shutters cover the entire window; café shutters cover the lower half for privacy with upper light. Bypass and bi-fold styles work for wide openings.</p>
        <h2>Energy Efficiency and Durability</h2>
        <p>Shutters provide insulation and block heat. They're built to last decades with minimal maintenance. Proper installation ensures smooth operation and a tight fit.</p>
        <h2>Design Styles</h2>
        <p>Plantation shutters with wide louvers are most popular. Traditional and craftsman styles suit different aesthetics. We offer samples and showrooms to help you choose.</p>
        <h2>Room-by-Room Guidance</h2>
        <p><strong>Living rooms:</strong> Full-height plantation shutters. <strong>Bedrooms:</strong> Full-height or café. <strong>Bathrooms:</strong> Poly shutters. <strong>Kitchens:</strong> Poly or wood. <strong>Sliding doors:</strong> Bypass or sliding-door shutters.</p>
      </>
    ),
    drapes: (
      <>
        <p>Custom drapes add softness and sophistication. From sheer panels to blackout-lined drapes, we offer fabrics suited to South Florida's light and humidity. Paired with shades, drapes complete a layered window treatment.</p>
        <h2>Fabrics and Linings</h2>
        <p>We carry UV-resistant and fade-resistant fabrics. Blackout, thermal, and decorative linings extend options. Lined drapes last longer and improve light control.</p>
        <h2>Light and Privacy</h2>
        <p>Sheers filter light; blackout drapes block it. Layered treatments—sheers with blackout—give daytime and nighttime options. Hardware and track systems affect operation and look.</p>
        <h2>Energy Efficiency</h2>
        <p>Heavy drapes with thermal lining reduce heat transfer. Combined with shades, they can significantly cut cooling costs on sunny windows.</p>
        <h2>Design Styles</h2>
        <p>Pinch-pleat, ripple-fold, grommet—each style has a distinct look. We help match pleat style, length, and fabric to your room.</p>
        <h2>Room-by-Room Guidance</h2>
        <p><strong>Living rooms:</strong> Full-length drapes, often layered with sheers or shades. <strong>Bedrooms:</strong> Blackout or room-darkening drapes. <strong>Dining rooms:</strong> Formal pleated styles. <strong>Any room:</strong> Valances and cornices for a finished look.</p>
        <p>Motorized drapery tracks are available—see <Link to="/motorized-blinds" className="text-navy font-medium hover:underline">/motorized-blinds</Link> for automation options.</p>
      </>
    ),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 prose prose-lg prose-headings:text-warm-dark prose-headings:mt-10 prose-headings:mb-4 prose-p:text-warm-gray prose-p:mb-6 prose-p:leading-relaxed prose-a:text-navy text-left">
      {content[category]}
    </article>
  );
}

function HowToChoose({ category }: { category: ProductCategory }) {
  const items = [
    { label: 'Room', desc: 'Bedrooms need darkness; living rooms need light and view. Match the treatment to the room\'s function.' },
    { label: 'Light level', desc: 'Full sun, partial shade, or north-facing—each affects which opacity and material work best.' },
    { label: 'Style', desc: 'Modern, traditional, coastal—we help align treatments with your aesthetic.' },
    { label: 'Control type', desc: 'Manual, cordless, or motorized. Consider reach, convenience, and smart home integration.' },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-soft-sand">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-warm-dark text-2xl md:text-3xl mb-10 text-center">How to Choose the Right Option</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.label} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-navy font-semibold text-lg mb-3">{item.label}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductHub() {
  const { category } = useParams<{ category: string }>();
  const cat = category as ProductCategory;
  if (!cat || !['blinds', 'shades', 'shutters', 'drapes'].includes(cat)) {
    return <Navigate to="/" replace />;
  }

  const config = HUB_CONFIG[cat];
  const types = getTypesByCategory(cat);
  const catName = PRODUCT_CATEGORIES[cat].name;
  const hubPath = `/products/${cat}`;

  useSEO({
    title: config.title,
    description: config.description,
    canonicalUrl: `https://www.nablinds.co${hubPath}`,
    ogImage: config.heroImage,
  });

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products/blinds' },
    { name: catName, url: hubPath },
  ];

  return (
    <div>
      <FAQSchema items={config.faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-12 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${config.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-warm-dark/60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products/blinds" className="text-white/80 hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{catName}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
            {config.h1}
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md mb-8">
            {config.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/consultation"
              className="bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="#types-grid"
              className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              View Options
            </a>
          </div>
        </div>
      </section>

      {/* Types Grid */}
      <section id="types-grid" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-warm-dark text-2xl md:text-3xl mb-10">Popular {catName} Types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {types.map((type) => (
              <Link
                key={type.slug}
                to={`${hubPath}/${type.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden bg-soft-sand">
                  <img
                    src={type.imagePath}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-warm-dark font-semibold mb-2 group-hover:text-navy flex items-center gap-1">
                    {type.name}
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </h3>
                  <p className="text-sm text-warm-gray line-clamp-3">{type.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-20 md:py-28 px-6 bg-warm-white">
        <HubLongForm category={cat} />
      </section>

      {/* How to Choose */}
      <HowToChoose category={cat} />

      {/* Final CTA */}
      <CTASection
        title="Ready to Find Your Perfect Fit?"
        subtitle="Schedule a free in-home consultation. We bring samples, take measurements, and help you choose the right options for each room."
      />
    </div>
  );
}
