import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Sun, Moon, Wind, Palette, Droplets, Shield } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function Services() {
  const location = useLocation();

  useSEO({
    title: 'Window Shades & Blinds Installation South Florida | NA Blinds',
    description: 'Explore solar shades, blackout shades, zebra shades, drapes, and motorized window treatments professionally installed across South Florida.',
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
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
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
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b865e6116092501a8.png',
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
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e23865e61df5f24bf18.png',
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
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c109dca1362.png',
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
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e238219f214749c9423.png',
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
      image: '/drapery_panels__006.jpg',
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
      image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9ce352ca1361.png',
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

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/roller_shade__011.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 drop-shadow-lg">
            Custom Window Treatments for South Florida Homes
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            Professional installation of blinds, shades, and drapes. Serving homeowners across Miami-Dade, Broward, and Palm Beach counties.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.name}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-semibold text-warm-dark mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-warm-gray mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-ocean font-medium mb-4">
                    {service.id === 'solar-light-filtering' && 'Custom-measured for a precise fit — no gaps.'}
                    {service.id === 'blackout' && 'Ideal for condos and large South Florida windows.'}
                    {service.id === 'zebra-dual-layer' && 'Installed cleanly in one visit in most homes.'}
                    {service.id === 'vertical-blinds' && 'Perfect for condos and sliding door installations.'}
                    {service.id === 'roman-shades' && 'Custom-measured for perfect, gap-free coverage.'}
                    {service.id === 'custom-drapes' && 'Professional installation ensures flawless hanging and operation.'}
                    {service.id === 'motorized-smart' && 'Designed for South Florida homes and high-rise condos.'}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-ocean mb-1">Best For</p>
                    <p className="text-warm-gray">{service.bestFor}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-warm-gray"
                      >
                        <div className="w-1.5 h-1.5 bg-ocean rounded-full mt-2.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact-2#consultation-form"
                    className="inline-block bg-ocean text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-warm-dark mb-4">
              Features & Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ocean bg-opacity-10 rounded-full mb-6">
                  <feature.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="text-xl font-semibold text-warm-dark mb-3">
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
        title="Not Sure Which Product Is Right?"
        subtitle="Schedule a free consultation. We'll help you choose the best solution for each room. No obligation. No pressure. Professionally measured and installed."
      />
    </div>
  );
}
