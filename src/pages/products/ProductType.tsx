import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CTASection from '../../components/CTASection';
import { FAQSchema, BreadcrumbSchema } from '../../components/JSONLD';
import { useSEO } from '../../utils/seo';
import { PRODUCT_CATEGORIES, getTypesByCategory, getTypeBySlug, type ProductCategory } from '../../data/products';

function TypeLongForm({ category, slug }: { category: ProductCategory; slug: string }) {
  const type = getTypeBySlug(category, slug);
  if (!type) return null;

  const motorizedSlugs = ['motorized-blinds', 'motorized-shades', 'motorized-drapery-tracks'];
  const hasMotorization = motorizedSlugs.includes(slug);

  return (
    <article className="max-w-3xl mx-auto px-6 prose prose-lg prose-headings:text-warm-dark prose-headings:mt-10 prose-headings:mb-4 prose-p:text-warm-gray prose-p:mb-6 prose-p:leading-relaxed prose-a:text-navy prose-li:text-warm-gray text-left">
      <h2>Overview</h2>
      <p>{type.shortDescription} South Florida homeowners choose {type.name.toLowerCase()} for their combination of style, function, and durability in our climate.</p>

      <h2>Best For</h2>
      <ul>
        {category === 'blinds' && ['Living rooms and bedrooms', 'Bathrooms with moisture-resistant options', 'Kitchens and high-traffic areas', 'Sliding doors (vertical and patio-door styles)'].map((x) => <li key={x}>{x}</li>)}
        {category === 'shades' && ['Living rooms with solar or light-filtering', 'Bedrooms with blackout or room-darkening', 'Home offices with glare reduction', 'Any room with modern aesthetic'].map((x) => <li key={x}>{x}</li>)}
        {category === 'shutters' && ['Living rooms and bedrooms', 'Bathrooms with poly shutters', 'Coastal and high-humidity areas', 'Wide windows and sliding doors'].map((x) => <li key={x}>{x}</li>)}
        {category === 'drapes' && ['Master bedrooms and formal living rooms', 'Rooms needing blackout or sheer options', 'Layered treatments with shades', 'Adding softness and texture'].map((x) => <li key={x}>{x}</li>)}
      </ul>

      <h2>Light & Privacy</h2>
      <p>Light control varies by product. We help you select the right opacity and operation for each window. Privacy needs also influence fabric and style choices.</p>

      <h2>Style & Materials</h2>
      <p>Materials are chosen for South Florida conditions—UV resistance, moisture resistance, and fade resistance. We offer samples so you can see how options look in your home.</p>

      <h2>Installation Considerations</h2>
      <p>Professional measurement ensures a proper fit. Inside mount versus outside mount, headroom, and depth affect which products work. We assess during your free consultation.</p>

      {hasMotorization && (
        <>
          <h2>Motorization</h2>
          <p>This product type is designed for motorized operation. Remote, app, and voice control are available. Learn more about our <Link to="/motorized-blinds">motorized window treatments</Link>.</p>
        </>
      )}

      {!hasMotorization && (slug.includes('motorized') || type.name.toLowerCase().includes('motorized')) && (
        <>
          <h2>Motorization Compatibility</h2>
          <p>This style can often be motorized. Explore our <Link to="/motorized-blinds">motorized blinds and shades</Link> for remote and smart home control.</p>
        </>
      )}

      <h2>Care & Maintenance</h2>
      <p>Most treatments require minimal upkeep. Dust regularly; spot-clean as needed. We provide care instructions with each installation. South Florida's humidity and salt air are considered in our product recommendations.</p>
    </article>
  );
}

export default function ProductType() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const cat = category as ProductCategory;
  if (!cat || !['blinds', 'shades', 'shutters', 'drapes'].includes(cat)) {
    return <Navigate to="/" replace />;
  }

  const type = getTypeBySlug(cat, slug || '');
  if (!type) {
    return <Navigate to={`/products/${cat}`} replace />;
  }

  const catName = PRODUCT_CATEGORIES[cat].name;
  const hubPath = `/products/${cat}`;
  const typePath = `${hubPath}/${type.slug}`;
  const types = getTypesByCategory(cat);
  const related = types.filter((t) => t.slug !== type.slug).slice(0, 4);

  const title = `${type.name} South Florida | ${catName} | NA Blinds`;
  const description = `${type.name} for South Florida homes. ${type.shortDescription} Professional installation in Miami, Fort Lauderdale, Boca Raton. Free consultation.`;

  useSEO({
    title,
    description,
    canonicalUrl: `https://www.nablinds.co${typePath}`,
    ogImage: type.imagePath,
  });

  const faqs = [
    { q: `What rooms are ${type.name} best for?`, a: type.shortDescription },
    { q: `Can ${type.name} be installed in South Florida condos?`, a: 'Yes. We install across Miami-Dade, Broward, and Palm Beach, including condos and high-rises. HOA requirements vary—we help ensure compliance.' },
    { q: 'How long does installation take?', a: 'Most installations complete in one visit. Timelines depend on the number of windows and product type. We provide an estimate during your consultation.' },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products/blinds' },
    { name: catName, url: hubPath },
    { name: type.name, url: typePath },
  ];

  return (
    <div>
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative min-h-[350px] md:min-h-[420px] flex items-center py-12 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${type.imagePath}')` }}
        >
          <div className="absolute inset-0 bg-warm-dark/60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-white">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to={hubPath} className="text-white/80 hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <Link to={hubPath} className="text-white/80 hover:text-white">{catName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{type.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg">
            {type.name}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md mb-8 max-w-2xl">
            {type.shortDescription}
          </p>
          <Link
            to="/consultation"
            className="inline-block bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 px-6 bg-warm-white">
        <TypeLongForm category={cat} slug={type.slug} />
      </section>

      {/* Related */}
      <section className="py-16 md:py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-warm-dark text-xl md:text-2xl mb-8">Related {catName}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((t) => (
              <Link
                key={t.slug}
                to={`${hubPath}/${t.slug}`}
                className="group block"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-soft-sand mb-3">
                  <img
                    src={t.imagePath}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-warm-dark font-medium group-hover:text-navy flex items-center gap-1">
                  {t.name}
                  <ChevronRight className="w-4 h-4" />
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to={hubPath} className="text-navy font-medium hover:underline">
              ← Back to all {catName}
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to See Options?"
        subtitle="Schedule a free in-home consultation. We bring samples and help you choose the right fit."
      />
    </div>
  );
}
