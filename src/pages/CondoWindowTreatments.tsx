import { Link } from 'react-router-dom';
import { Sun, Eye, Smartphone, Shield, Clock, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const challenges = [
  {
    icon: Sun,
    title: 'Intense Sun & Heat',
    description: 'West-facing condo windows can push interior temperatures 15-20°F above the rest of your unit. The right solar shades block up to 95% of UV and heat without sacrificing your view.',
  },
  {
    icon: Eye,
    title: 'Privacy Without Losing Views',
    description: "High-rise living means nearby buildings can see directly into your space. We install treatments that give you complete privacy while preserving the skyline and water views you're paying for.",
  },
  {
    icon: Smartphone,
    title: 'Smart Home Integration',
    description: 'Motorized shades controlled from your phone, voice assistant, or set on automatic schedules. Program them to close when the afternoon sun hits and open at sunrise — hands-free comfort.',
  },
];

const neighborhoods = [
  'Brickell', 'Sunny Isles', 'Miami Beach', 'Aventura',
  'Fort Lauderdale', 'Hollywood', 'Coral Gables', 'Coconut Grove',
  'Doral', 'Palm Beach', 'Boca Raton', 'Hallandale Beach',
];

const testimonials = [
  {
    quote: 'Professional service from start to finish. They helped us choose the perfect shades for our condo and the installation was flawless.',
    name: 'Maria G.',
    location: 'Coral Gables',
  },
  {
    quote: 'Quick turnaround and excellent quality. Our motorized shades work perfectly and look amazing. Highly recommend!',
    name: 'David R.',
    location: 'Boca Raton',
  },
  {
    quote: 'They made everything so easy. Showed up on time, very clean work, and the results exceeded our expectations.',
    name: 'Jennifer L.',
    location: 'Miami Beach',
  },
];

export default function CondoWindowTreatments() {
  useSEO({
    title: 'Condo & High-Rise Window Treatments | South Florida | NA Blinds',
    description: 'Custom window treatments designed for South Florida condos and high-rises. Solar shades, motorized blinds, and premium drapes. Same-week consultations. 500+ installations.',
    canonicalUrl: 'https://www.nablinds.co/condo-window-treatments'
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-white mb-6">
            Window Treatments Designed for<br className="hidden md:inline" /> South Florida Condo Living
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Control heat, glare, and privacy without losing your view. Professionally measured and installed — most projects completed within 10 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-white text-warm-dark px-8 py-4 rounded font-medium hover:bg-warm-cream transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:954-629-1373"
              className="border border-white/40 text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
            >
              Call 954-629-1373
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Same-week consultations available · 500+ South Florida installations
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-warm-dark mb-4">Condo Windows Need Specialized Solutions</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              South Florida condos face unique challenges that off-the-shelf products cannot solve. We tailor every installation to your specific unit and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-warm-white p-8 rounded-lg">
                  <Icon className="w-8 h-8 text-taupe mb-4" />
                  <h3 className="text-warm-dark mb-3">{item.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 md:py-28 bg-soft-sand">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-warm-dark mb-4">Most Popular for Condos & High-Rises</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-warm-dark mb-3">Solar & Light-Filtering Shades</h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                The go-to for South Florida condos. Block heat and glare while keeping your view — you can still see the ocean, the skyline, the pool. Fabrics that block up to 95% of UV.
              </p>
              <p className="text-xs text-taupe font-medium">Best for: Living rooms, offices, any room with a view</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-warm-dark mb-3">Motorized Smart Shades</h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                Control every shade in your condo from your phone or voice. Set schedules, create scenes, and integrate with Alexa, Google Home, or HomeKit. Particularly practical for large windows and hard-to-reach installations.
              </p>
              <p className="text-xs text-taupe font-medium">Best for: Whole-condo systems, smart home setups</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-warm-dark mb-3">Blackout Shades</h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                Complete darkness and thermal insulation for bedrooms. Modern blackout shades look sleek, operate smoothly, and make a real difference in sleep quality and cooling costs.
              </p>
              <p className="text-xs text-taupe font-medium">Best for: Bedrooms, media rooms, nurseries</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-warm-dark mb-3">Zebra & Dual-Layer Shades</h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                The modern alternative — alternating sheer and opaque bands let you instantly shift between open and private. Clean, contemporary look that pairs well with modern condo interiors.
              </p>
              <p className="text-xs text-taupe font-medium">Best for: Contemporary units, flexible light control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-warm-dark mb-4">500+ Installations Across South Florida</h2>
          <p className="text-warm-gray mb-10 max-w-2xl mx-auto">
            We've transformed condos and high-rises across Miami-Dade, Broward, and Palm Beach counties. Local knowledge means we understand your building, your climate, and your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((name) => (
              <span key={name} className="px-4 py-2 bg-warm-white rounded text-sm text-warm-dark font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why NA Blinds */}
      <section className="py-20 md:py-28 bg-soft-sand">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-warm-dark mb-4">Why Condo Owners Choose NA Blinds</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-taupe mx-auto mb-3" />
              <p className="font-serif text-lg text-warm-dark mb-1">Same-Week</p>
              <p className="text-warm-gray text-sm">Consultations within days, not weeks</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-taupe mx-auto mb-3" />
              <p className="font-serif text-lg text-warm-dark mb-1">Licensed & Local</p>
              <p className="text-warm-gray text-sm">Our team, not subcontractors</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-taupe mx-auto mb-3" />
              <p className="font-serif text-lg text-warm-dark mb-1">4.8★ Rated</p>
              <p className="text-warm-gray text-sm">120+ South Florida homeowners</p>
            </div>
            <div className="text-center">
              <Sun className="w-8 h-8 text-taupe mx-auto mb-3" />
              <p className="font-serif text-lg text-warm-dark mb-1">Climate Experts</p>
              <p className="text-warm-gray text-sm">Products built for Florida heat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-warm-dark mb-4">What Our Condo Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-warm-white p-8 rounded-lg">
                <p className="text-warm-gray italic leading-relaxed mb-4">"{t.quote}"</p>
                <p className="font-medium text-warm-dark text-sm">{t.name}</p>
                <p className="text-taupe text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
