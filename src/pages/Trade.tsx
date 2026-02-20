import { Users, Percent, FileCheck, Mail } from 'lucide-react';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useSEO } from '../utils/seo';

export default function Trade() {
  useSEO({
    title: 'To the Trade | Interior Designers & Professionals | NA Blinds',
    description: 'Trade program for interior designers and professionals in South Florida. Partner with NA Blinds for custom window treatments, trade pricing, and white-glove service.',
    canonicalUrl: 'https://www.nablinds.co/trade'
  });

  const benefits = [
    {
      icon: Percent,
      title: 'Trade Pricing',
      description: 'Preferred pricing for design professionals on custom window treatments.',
    },
    {
      icon: FileCheck,
      title: 'Streamlined Process',
      description: 'Dedicated support for specifications, measurements, and project coordination.',
    },
    {
      icon: Users,
      title: 'South Florida Focus',
      description: 'We work daily with designers, builders, and luxury real estate across Miami-Dade, Broward, and Palm Beach.',
    },
  ];

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-trade.png')` }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            To the Trade
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            Partner with NA Blinds for custom window treatments. Trade pricing and white-glove service for interior designers and professionals across South Florida.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-warm-dark mb-6">Designer Partnerships</h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Whether you're specifying for a client or managing a whole-home project, we provide the same level of service and quality that has made us a trusted partner to South Florida homeowners and design professionals for over a decade.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-warm-dark text-lg font-semibold mb-4">Featured Designer Collaboration</h3>
          <p className="text-warm-gray text-sm mb-4">Showcase a notable South Florida project or local designer partnership.</p>
          <ImagePlaceholder width={1200} height={600} description="Designer collaboration — professional room shot from a designer or notable project, aspirational styling" className="rounded-lg" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div key={item.title} className="text-center p-8 rounded-lg bg-soft-sand">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-taupe/20 rounded-full mb-4">
                <item.icon className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-xl text-warm-dark mb-2">{item.title}</h3>
              <p className="text-warm-gray">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center p-8 bg-charcoal-dark rounded-lg text-white">
          <Mail className="w-12 h-12 mx-auto mb-4 text-warm-gold" />
          <h3 className="text-xl mb-2">Get in Touch</h3>
          <p className="text-white/90 mb-6">
            Contact us to learn more about our trade program, pricing structure, and how we can support your next project.
          </p>
          <a
            href="mailto:info@nablinds.co?subject=Trade%20Program%20Inquiry"
            className="inline-flex items-center gap-2 bg-warm-gold text-warm-dark px-6 py-3 rounded font-medium hover:bg-warm-gold/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            info@nablinds.co
          </a>
        </div>
      </section>

      <CTASection
        title="Ready to Partner?"
        subtitle="We work with interior designers, builders, and real estate professionals across South Florida. Get in touch to get started."
      />
    </div>
  );
}
