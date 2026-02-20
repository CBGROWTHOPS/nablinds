import { Phone, Ruler, Palette, Package, Wrench, CheckCircle, Shield } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function Process() {
  useSEO({
    title: 'Window Treatment Installation Process | NA Blinds',
    description: 'Learn how NA Blinds handles everything from consultation to installation. Clear steps, no pressure, predictable results.',
    canonicalUrl: 'https://www.nablinds.co/process'
  });
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Initial Contact',
      description: 'Call or submit a request through our website. We respond within hours to schedule your consultation.',
      details: [
        'Same-week appointments available',
        'No obligation consultation',
        'Discuss your needs and preferences',
      ],
    },
    {
      icon: Ruler,
      number: '02',
      title: 'Professional Measurement & Ordering',
      description: 'We visit your home to assess windows, discuss options, and take precise measurements. Then we place your custom order.',
      details: [
        'Professional measurement of all windows',
        'Review product options and materials',
        'Provide transparent estimate on-site',
        'Discuss timeline and HOA requirements if applicable',
        'Place custom order after approval',
      ],
    },
    {
      icon: Palette,
      number: '03',
      title: 'Design Selection',
      description: 'Choose from thousands of fabrics, colors, and styles. We guide you through every option.',
      details: [
        'Material samples provided',
        'Expert recommendations for each room',
        'HOA-compliant options for condos',
      ],
    },
    {
      icon: FileText,
      number: '04',
      title: 'Transparent Quote',
      description: 'Clear estimate based on window size, product choice, and installation scope. No hidden fees.',
      details: [
        'Itemized breakdown of materials and labor',
        'Warranty information included',
        'No obligation to proceed',
      ],
    },
    {
      icon: Package,
      number: '05',
      title: 'Order & Fabrication',
      description: 'Your custom window treatments are fabricated to exact specifications.',
      details: [
        'Quality materials sourced',
        'Custom fabrication begins',
        'Typical turnaround: 7-10 days',
      ],
    },
    {
      icon: Wrench,
      number: '06',
      title: 'Clean Expert Installation',
      description: 'Licensed installers handle everything with precision and care. Most installations completed in one visit.',
      details: [
        'Scheduled at your convenience',
        'Clean, careful installation',
        'Protects walls, floors, and furniture',
        'Designed to meet common building and condo requirements',
      ],
    },
    {
      icon: CheckCircle,
      number: '07',
      title: 'Final Walkthrough',
      description: 'We ensure everything is perfect and show you how to operate your treatments.',
      details: [
        'Operation demonstration',
        'Care instructions provided',
        'Final inspection and adjustments',
      ],
    },
    {
      icon: Shield,
      number: '08',
      title: 'Ongoing Support',
      description: 'Your satisfaction is guaranteed. Warranty coverage and future adjustments available.',
      details: [
        'Manufacturer warranty honored',
        'Workmanship guarantee',
        'Available for service',
      ],
    },
  ];

  const guarantees = [
    'Precise measurements and perfect fit',
    'High-quality materials and craftsmanship',
    'Professional installation',
    'Transparent pricing',
    'Manufacturer and workmanship warranties',
    'Post-installation support',
  ];

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-process.png')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
            Our Window Treatment Installation Process
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            From consultation to installation, we make the entire experience simple, predictable, and stress-free. Serving homeowners across South Florida.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                <div className="grid md:grid-cols-[120px_1fr] gap-8">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-taupe/20 rounded-full mb-4">
                      <step.icon className="w-10 h-10 text-charcoal" />
                    </div>
                    <div className="text-5xl font-bold text-taupe text-opacity-40">
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-warm-dark mb-8">
                      {step.title}
                    </h2>
                    <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-warm-gray"
                        >
                          <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-24 w-0.5 h-16 bg-taupe/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-warm-dark mb-8">
              Our Commitment to You
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Every project is backed by our satisfaction guarantee.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="grid md:grid-cols-2 gap-6">
              {guarantees.map((guarantee) => (
                <div key={guarantee} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-0.5" />
                  <span className="text-warm-dark">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-warm-dark mb-8">
              Pricing & Timeline
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Clear expectations from consultation to installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-soft-sand p-8 rounded-lg">
              <h3 className="text-xl text-warm-dark mb-4">How Pricing Works</h3>
              <ul className="space-y-3 text-warm-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span>Estimates provided during free in-home consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span>Based on window size, product type, and installation scope</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span>Itemized breakdown of materials and labor</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span>No hidden fees or surprise charges</span>
                </li>
              </ul>
            </div>

            <div className="bg-soft-sand p-8 rounded-lg">
              <h3 className="text-xl text-warm-dark mb-4">Typical Timeline</h3>
              <ul className="space-y-3 text-warm-gray">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span><strong>Same week:</strong> Consultation scheduled</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span><strong>7-10 days:</strong> Custom fabrication completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span><strong>1-2 days:</strong> Installation completed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                  <span>Most projects completed within 2 weeks total</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start With a Conversation"
        subtitle="Free consultation with transparent pricing and no obligation. Professional installation from start to finish."
      />
    </div>
  );
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}
