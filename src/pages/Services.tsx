import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Sun, Moon, Wind, Palette, Droplets, Shield, Ruler, MessageSquare, Calculator, Smartphone, Home, CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function Services() {
  const location = useLocation();

  useSEO({
    title: 'Window Treatment Services South Florida | Free Estimate & Installation | NA Blinds',
    description: 'Professional window treatment services in Miami, Fort Lauderdale & Palm Beach. Free in-home estimates, expert design consultation, precision measuring, and smart home integration.',
    canonicalUrl: 'https://www.nablinds.co/services'
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);
  const services = [
    {
      id: 'solar-light-filtering',
      name: 'Solar & Light-Filtering Shades',
      description: 'Block heat and glare while keeping your view. Designed specifically for South Florida\'s intense sun.',
      bestFor: 'Living rooms, offices, condos, and floor-to-ceiling windows.',
      features: [
        'Reduce heat and AC strain',
        'Glare reduction without darkness',
        'Maintain your view',
        'UV protection',
      ],
      image: '/solar-shades-room.png',
    },
    {
      id: 'blackout',
      name: 'Blackout Shades',
      description: 'Complete darkness and privacy when you need it. Perfect for bedrooms and media rooms.',
      bestFor: 'Bedrooms, media rooms, and nurseries.',
      features: [
        'Complete light blocking',
        'Maximum privacy',
        'Temperature control',
        'Cordless and motorized options',
      ],
      image: '/blackout-shades-room.png',
    },
    {
      id: 'zebra-dual-layer',
      name: 'Zebra & Dual-Layer Shades',
      description: 'Adjust between sheer and opaque instantly. Modern style with flexible light control.',
      bestFor: 'Bedrooms, home offices, and contemporary spaces.',
      features: [
        'Adjustable light control',
        'Privacy without total darkness',
        'Modern, clean aesthetic',
        'Easy operation',
      ],
      image: '/zebra-shades-room.png',
    },
    {
      id: 'vertical-blinds',
      name: 'Vertical Blinds',
      description: 'Smooth operation for large openings. Built for sliding doors and high-traffic areas.',
      bestFor: 'Sliding glass doors, wide windows, and patio access.',
      features: [
        'Wide range of materials',
        'Easy sliding operation',
        'Durable construction',
        'Budget-friendly solution',
      ],
      image: '/vertical-blinds-room.png',
    },
    {
      id: 'roman-shades',
      name: 'Custom Roman Shades',
      description: 'Elegant fabric folds with tailored finishes for a refined, designer look. Choose from smooth, relaxed, or hobbled fold styles.',
      bestFor: 'Master bedrooms, dining rooms, and formal living spaces.',
      features: [
        'Premium fabric selection',
        'Multiple fold styles available',
        'Lined and unlined options',
        'Custom-measured for perfect fit',
      ],
      image: '/roman-shades-room.png',
    },
    {
      id: 'custom-drapes',
      name: 'Custom Drapes',
      description: 'Soft, flowing fabrics with premium hardware for sophisticated window dressing. Designed for style and function.',
      bestFor: 'Master bedrooms, formal living rooms, and luxury spaces.',
      features: [
        'Thousands of fabrics and patterns',
        'Premium drapery hardware',
        'Blackout, thermal, or decorative linings',
        'Professional installation included',
      ],
      image: '/custom-drapes-room.png',
    },
    {
      id: 'motorized-smart',
      name: 'Motorized & Smart Shades',
      description: 'Control shades by remote, app, or voice. Automate for comfort and efficiency.',
      bestFor: 'Tech-enabled homes, high windows, and convenience-focused spaces.',
      features: [
        'Remote and app control',
        'Voice integration available',
        'Programmable schedules',
        'Compatible with most shade types',
      ],
      image: '/motorized-shades-room.png',
    },
  ];

  const features = [
    {
      icon: Sun,
      title: 'Light Control',
      description: 'Precise control from sheer to blackout.',
    },
    {
      icon: Moon,
      title: 'Privacy',
      description: 'Complete privacy without losing natural light.',
    },
    {
      icon: Wind,
      title: 'Energy Efficiency',
      description: 'Reduce cooling costs in South Florida heat.',
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Thousands of fabrics and colors to match your home.',
    },
    {
      icon: Droplets,
      title: 'Moisture Resistant',
      description: 'Materials suited for bathrooms and humid areas.',
    },
    {
      icon: Shield,
      title: 'Child Safety',
      description: 'Cordless and motorized options for family homes.',
    },
  ];

  const coreServices = [
    {
      icon: Calculator,
      title: 'Free In-Home Estimate',
      description: 'We come to you with samples and provide a detailed quote on the spot. No obligation, no pressure. See exactly what your project will cost before you commit.',
    },
    {
      icon: Ruler,
      title: 'Professional Measuring',
      description: 'Precise measurements are critical for a clean fit. Our technicians measure every window to the millimeter, accounting for depth, headroom, and mounting options.',
    },
    {
      icon: MessageSquare,
      title: 'Expert Design Consultation',
      description: 'Not sure what works best? We assess your rooms, lighting, and lifestyle to recommend the right products. We bring fabric samples so you can see options in your actual space.',
    },
    {
      icon: Smartphone,
      title: 'Motorized & Smart Home Integration',
      description: 'Control your shades by remote, app, or voice. We install motorized systems compatible with Alexa, Google Home, Apple HomeKit, and most smart home platforms.',
    },
  ];

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-services.png')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
            Professional Window Treatment Services
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md max-w-2xl">
            From your first call to finished installation, we handle everything. Free estimates, expert guidance, precision measuring, and professional installation across South Florida.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-warm-dark mb-4">What We Do</h2>
            <p className="text-lg text-warm-gray max-w-3xl">
              Window treatments are only as good as the service behind them. We handle measurement, design, ordering, and installation so you get a perfect result without the hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service) => (
              <div key={service.title} className="bg-soft-sand p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="text-xl text-warm-dark pt-2">{service.title}</h3>
                </div>
                <p className="text-warm-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/consultation"
              className="inline-block bg-navy text-white px-8 py-4 rounded font-medium hover:bg-navy/90 transition-colors"
            >
              Schedule Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 md:py-20 px-6 bg-warm-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-warm-dark mb-4">Serving South Florida Homeowners</h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                We install window treatments throughout Miami-Dade, Broward, and Palm Beach counties. Whether you're in a downtown Miami high-rise, a Boca Raton single-family home, or a Fort Lauderdale condo, we bring the showroom to you.
              </p>
              <p className="text-warm-gray leading-relaxed mb-6">
                South Florida's climate demands specific solutions. Intense sun, humidity, and salt air affect which products perform best. We recommend treatments built for these conditions, not generic options that fade or warp.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Miami', 'Fort Lauderdale', 'Boca Raton', 'West Palm Beach', 'Coral Gables', 'Hollywood', 'Pembroke Pines', 'Weston'].map((city) => (
                  <span key={city} className="bg-soft-sand px-3 py-1 rounded text-sm text-warm-gray">{city}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-soft-sand p-8 rounded-lg">
                <h3 className="text-lg text-warm-dark mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'Same-week consultations available',
                    'We bring samples to your home',
                    'Transparent pricing with no hidden fees',
                    'Professional installation in one visit',
                    'Manufacturer warranties included',
                    'HOA documentation provided when needed',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-warm-gray">
                      <CheckCircle className="w-5 h-5 text-phone flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-warm-dark mb-4">Products We Install</h2>
            <p className="text-lg text-warm-gray max-w-3xl">
              We carry a full range of window treatments from leading manufacturers. Each product is custom-measured and professionally installed.
            </p>
          </div>
          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.name}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-warm-dark mb-8">
                    {service.name}
                  </h2>
                  <p className="text-lg text-warm-gray mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-charcoal font-medium mb-4">
                    {service.id === 'solar-light-filtering' && 'Custom-measured for a precise fit — no gaps.'}
                    {service.id === 'blackout' && 'Ideal for condos and large South Florida windows.'}
                    {service.id === 'zebra-dual-layer' && 'Installed cleanly in one visit in most homes.'}
                    {service.id === 'vertical-blinds' && 'Perfect for condos and sliding door installations.'}
                    {service.id === 'roman-shades' && 'Custom-measured for perfect, gap-free coverage.'}
                    {service.id === 'custom-drapes' && 'Professional installation ensures flawless hanging and operation.'}
                    {service.id === 'motorized-smart' && 'Designed for South Florida homes and high-rise condos.'}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-charcoal mb-1">Best For</p>
                    <p className="text-warm-gray">{service.bestFor}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-warm-gray"
                      >
                        <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/consultation"
                    className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-warm-dark mb-8">
              Features & Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-taupe/20 rounded-full mb-6">
                  <feature.icon className="w-6 h-6 text-charcoal" />
                </div>
<h3 className="text-xl text-warm-dark mb-3">
                {feature.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Where to Start?"
        subtitle="We bring samples to your home and help you choose the right solution for each room. No pressure, just guidance."
      />
    </div>
  );
}
