import { MapPin, CheckCircle } from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function ServiceAreas() {
  useSEO({
    title: 'Window Treatments Miami, Broward & Palm Beach | NA Blinds',
    description: 'Professional window treatments serving Miami-Dade, Broward, and Palm Beach counties. Homes, condos, and HOA-compliant installations.',
    canonicalUrl: 'https://www.nablinds.co/service-areas'
  });
  const counties = [
    {
      name: 'Miami-Dade County',
      cities: [
        'Miami',
        'Miami Beach',
        'Coral Gables',
        'Coconut Grove',
        'Brickell',
        'Key Biscayne',
        'Pinecrest',
        'Kendall',
        'Doral',
        'Aventura',
        'Sunny Isles Beach',
        'Homestead',
      ],
    },
    {
      name: 'Broward County',
      cities: [
        'Fort Lauderdale',
        'Hollywood',
        'Pembroke Pines',
        'Miramar',
        'Coral Springs',
        'Davie',
        'Plantation',
        'Sunrise',
        'Weston',
        'Deerfield Beach',
        'Pompano Beach',
        'Lauderhill',
      ],
    },
    {
      name: 'Palm Beach County',
      cities: [
        'West Palm Beach',
        'Boca Raton',
        'Boynton Beach',
        'Delray Beach',
        'Wellington',
        'Jupiter',
        'Palm Beach Gardens',
        'Lake Worth',
        'Greenacres',
        'Royal Palm Beach',
      ],
    },
  ];

  const benefits = [
    'Local team with South Florida expertise',
    'Same-week appointments available',
    'Understand local climate and design preferences',
    'Fast response times',
    'Familiar with local architecture and building styles',
    'Established relationships with local suppliers',
  ];

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-service-areas.png')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
            Window Treatment Services Across South Florida
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            Professional window treatment installation for homes, condos, and high-rises. Trusted by South Florida homeowners since 2013.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {counties.map((county) => (
              <div key={county.name} className="bg-soft-sand p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-charcoal" />
                  <h2 className="text-2xl text-warm-dark">
                    {county.name}
                  </h2>
                </div>
                <p className="text-warm-gray mb-6 leading-relaxed">
                  {county.name === 'Miami-Dade County' && 'Serving homes, condos, and high-rises throughout Miami-Dade County. Experienced with HOA-compliant installations and climate-specific solutions for coastal properties.'}
                  {county.name === 'Broward County' && 'Professional window treatment installation across Broward County. Specialized in both single-family homes and high-rise condo installations.'}
                  {county.name === 'Palm Beach County' && 'Trusted window treatment provider throughout Palm Beach County. Expert in luxury homes, condos, and HOA-regulated properties.'}
                </p>
                <h3 className="text-sm text-charcoal mb-3">Cities We Serve:</h3>
                <ul className="space-y-2">
                  {county.cities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-3 text-warm-gray text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-taupe rounded-full flex-shrink-0"></div>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-soft-sand rounded-lg text-center">
            <p className="text-warm-gray">
              Don't see your city listed?{' '}
              <a href="tel:954-629-1373" className="text-navy font-medium hover:underline">
                Call us at 954-629-1373
              </a>{' '}
              to confirm service availability in your area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-warm-dark mb-8">
              Why Choose a Local Provider?
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              We understand South Florida living and design our solutions accordingly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white p-6 rounded-lg flex items-start gap-4"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-0.5" />
                <span className="text-warm-dark">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-soft-sand p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-warm-dark mb-8">
                  South Florida Expertise
                </h2>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Living in South Florida means dealing with intense sunlight, heat, and humidity. We specialize in window treatments designed for this climate.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-warm-gray">
                    <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                    <span>Solar shades to reduce heat and glare</span>
                  </li>
                  <li className="flex items-start gap-3 text-warm-gray">
                    <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                    <span>Moisture-resistant materials for coastal homes</span>
                  </li>
                  <li className="flex items-start gap-3 text-warm-gray">
                    <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient options to lower cooling costs</span>
                  </li>
                  <li className="flex items-start gap-3 text-warm-gray">
                    <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                    <span>Hurricane-resistant installation methods</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg text-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <MapPin className="w-16 h-16 text-charcoal mx-auto mb-4" />
<h3 className="text-2xl text-warm-dark mb-3">
                Serving All of South Florida
                </h3>
                <p className="text-warm-gray mb-6">
                  No matter where you are in the tri-county area, we're ready to help.
                </p>
                <a
                  href="tel:954-629-1373"
                  className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Call 954-629-1373
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
