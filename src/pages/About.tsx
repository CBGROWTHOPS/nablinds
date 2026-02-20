import { Award, Shield, Users, Heart, CheckCircle } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function About() {
  useSEO({
    title: 'About NA Blinds | 10+ Years Serving South Florida | BBB A+ Rated',
    description: 'Family-owned window treatment company serving South Florida. BBB A+ rating, licensed & insured. Over 500 homes transformed across Miami-Dade, Broward, and Palm Beach counties.',
    canonicalUrl: 'https://www.nablinds.co/about'
  });
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We use premium materials and precise installation techniques to ensure lasting results.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction drives everything we do. We listen, we guide, and we deliver.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent pricing, honest recommendations, and reliable service every time.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Over a decade of experience and thousands of satisfied customers across South Florida.',
    },
  ];

  const credentials = [
    'Licensed & Insured',
    'BBB A+ Rating',
    'Best of Houzz Service',
    'Angi Super Service Award',
    '10+ Years Experience',
    'Locally Owned & Operated',
  ];

  const whyChooseUs = [
    {
      title: 'Local Expertise',
      description: 'We understand South Florida architecture, climate, and design preferences.',
    },
    {
      title: 'Personalized Service',
      description: 'You work directly with experienced professionals, not salespeople.',
    },
    {
      title: 'Quality Products',
      description: 'We partner with trusted manufacturers to offer superior window treatments.',
    },
    {
      title: 'Professional Installation',
      description: 'Our skilled team ensures precise, clean installation every time.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Detailed quotes with no hidden fees or surprise charges.',
    },
    {
      title: 'Ongoing Support',
      description: 'We stand behind our work and are available for any questions or service needs.',
    },
  ];

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-about.png')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            About NA Blinds
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            South Florida light is unlike anywhere else. We've spent over a decade learning exactly how to dress it.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-warm-dark mb-8">
                Our Story
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  NA Blinds was founded with a simple mission: to provide South Florida homeowners with beautiful, functional window treatments backed by service that stands behind every installation. There's a human touch behind everything we do.
                </p>
                <p>
                  For over 10 years, we have been transforming homes throughout Miami-Dade, Broward, and Palm Beach counties. What started as a small operation has grown through word-of-mouth referrals and a commitment to quality that never wavers.
                </p>
                <p>
                  We specialize in residential window treatments and take pride in every project, whether it is a single window or an entire home. Our team brings expertise, professionalism, and genuine care to each installation.
                </p>
                <p>
                  Today, we continue to serve the South Florida community with the same dedication to quality and customer satisfaction that built our reputation.
                </p>
              </div>
            </div>
            <div className="bg-soft-sand p-10 rounded-lg">
              <div className="grid grid-cols-2 gap-8">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-0.5" />
                    <span className="text-warm-dark font-medium">{credential}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-10 pt-10 border-t border-gray-300">
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8203c13b9c6469cc82d3.png"
                  alt="Angi Super Service Award"
                  className="h-16 w-auto"
                />
                <img
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8045a0fb4a71324d0823.png"
                  alt="BBB Accredited"
                  className="h-16 w-auto"
                />
                <img
                  src="/houzz.png"
                  alt="Houzz"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-warm-dark mb-8">
              Our Values
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              These principles guide every decision we make and every project we complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg text-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-taupe/20 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-charcoal" />
                </div>
<h3 className="text-xl text-warm-dark mb-3">
                {value.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-warm-dark mb-8">
              Why Choose NA Blinds?
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              We make the process simple, predictable, and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="bg-soft-sand p-8 rounded-lg">
<h3 className="text-xl text-warm-dark mb-3">
                {reason.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-warm-dark mb-8">
            Serving South Florida
          </h2>
          <p className="text-lg text-warm-gray mb-8 leading-relaxed">
            We are proud to serve homeowners throughout Miami-Dade, Broward, and Palm Beach counties. Our reputation is built on quality work, honest service, and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">500+</p>
              <p className="text-warm-dark font-medium">Homes Transformed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">10+</p>
              <p className="text-warm-dark font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-charcoal mb-2">100%</p>
              <p className="text-warm-dark font-medium">Customer Focused</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Work With a Team You Can Trust"
        subtitle="Over a decade of experience and a commitment to getting it right. Schedule your consultation to see the difference."
      />
    </div>
  );
}
