import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Award, ArrowRight, ChevronDown, Phone } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';
import { getUserLocation } from '../utils/geolocation';

const HERO_SLIDES = [
  'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a7162c656aa364c236bf9.png',
  '/roller_shade__011.jpg',
  '/roller_shade__013.jpg',
  '/roller_shade__012.jpg',
];

export default function Home() {
  useSEO({
    title: 'Custom Window Treatments South Florida | NA Blinds',
    description: 'Professional custom window treatments for South Florida homes and condos. Licensed installation, HOA-compliant, same-week consultations.',
    canonicalUrl: 'https://www.nablinds.co/'
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [userLocation, setUserLocation] = useState<string>('South Florida');
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getUserLocation().then(location => {
      setUserLocation(location);
    });
  }, []);

  const faqs = [
    {
      question: 'Will my window treatments meet condo or HOA requirements?',
      answer: 'Yes. We work with condos and HOAs across South Florida daily and help you choose compliant options. Documentation is provided when needed.',
    },
    {
      question: 'How quickly can you install window treatments?',
      answer: 'Most projects are completed within 7–10 days after consultation. Same-week consultations are often available.',
    },
    {
      question: 'Do window treatments reduce heat and glare?',
      answer: 'Yes. We recommend products specifically designed for South Florida\'s sun to reduce heat, glare, and strain on your AC. Solar shades and light-filtering options work best.',
    },
    {
      question: 'Do you offer motorized or smart shades?',
      answer: 'Yes. We install motorized and smart shade systems controlled by remote, app, or voice. Compatible with most home automation systems.',
    },
    {
      question: 'What happens during the free consultation?',
      answer: 'We review your needs, show product samples, take precise measurements, and provide a clear estimate. No pressure or obligation to purchase.',
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const challenges = [
    'Unbearable heat and glare from large windows',
    'Zero privacy in condos and high-rises',
    'Confusing product choices and bad advice',
    'DIY disasters and amateur installations',
    'Strict HOA rules homeowners worry about breaking',
  ];

  const solutions = [
    'Expert guidance on the right products for your needs',
    'Professional measurement down to the millimeter',
    'Flawless installation by licensed technicians',
    'HOA-compliant solutions that meet all requirements',
    'Done-for-you service from start to finish',
  ];

  const process = [
    {
      number: '01',
      title: 'Free Estimate',
      description: 'No-pressure visit to review your needs, show options, and measure accurately.',
    },
    {
      number: '02',
      title: 'Precise Measurement & Ordering',
      description: 'We take exact measurements and place your custom order.',
    },
    {
      number: '03',
      title: 'Expert Installation',
      description: 'Clean, professional installation. We clean up completely. You are done.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Same-Week Speed',
      description: 'Consultations scheduled within days, not weeks. Most projects completed in under two weeks from first call to finished installation.',
    },
    {
      icon: Shield,
      title: 'HOA & Condo Expertise',
      description: 'We navigate HOA and building requirements daily across South Florida high-rises and communities. Documentation and compliance handled for you.',
    },
    {
      icon: Award,
      title: 'Climate-Optimized Solutions',
      description: 'Products chosen specifically for South Florida heat, humidity, and UV exposure. We recommend what actually performs here, not generic options.',
    },
  ];

  const customSolutions = [
    {
      name: 'Solar & Light-Filtering Shades',
      description: 'Block heat and glare while keeping your view. Ideal for South Florida\'s intense sun.',
    },
    {
      name: 'Blackout Shades',
      description: 'Complete darkness and privacy. Perfect for bedrooms and media rooms.',
    },
    {
      name: 'Zebra & Dual-Layer Shades',
      description: 'Adjust between sheer and opaque instantly. Modern style with flexible control.',
    },
    {
      name: 'Cellular (Honeycomb) Shades',
      description: 'Energy-efficient shades designed to insulate against heat while providing privacy and a clean, modern look.',
    },
    {
      name: 'Vertical Blinds for Sliding Doors',
      description: 'Smooth operation for large openings. Built for high-traffic areas.',
    },
    {
      name: 'Custom Roman Shades',
      description: 'Elegant fabric folds with tailored finishes for a refined, designer look.',
    },
    {
      name: 'Custom Drapes',
      description: 'Soft, flowing fabrics with premium hardware for sophisticated window dressing.',
    },
    {
      name: 'Shutters',
      description: 'Durable, low-maintenance shutters that provide privacy, light control, and a timeless finished look.',
    },
    {
      name: 'Motorized & Smart Shades',
      description: 'Control shades by remote, app, or voice. Automate for comfort and efficiency.',
    },
  ];

  const galleryProjects = [
    {
      title: 'Light-Filtering Roller Shades',
      location: 'Coconut Grove, Living Room',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
    },
    {
      title: 'Blackout Roller Shade',
      location: 'Coral Gables, Bedroom',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b865e6116092501a8.png',
    },
    {
      title: 'Zebra Shades',
      location: 'Pinecrest, Bedroom',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e23865e61df5f24bf18.png',
    },
    {
      title: 'Room-Darkening Roman Shade',
      location: 'Boca Raton, Bedroom',
      image: '/roman_shade__006.jpg',
    },
    {
      title: 'Vertical Blinds',
      location: 'Weston, Living Room',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c109dca1362.png',
    },
    {
      title: 'Solar Roller Shades',
      location: 'Brickell High-Rise, Office',
      image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9ce352ca1361.png',
    },
    {
      title: 'Drapery Panels',
      location: 'Palm Beach, Master Bedroom',
      image: '/drapery_panels__015.jpg',
    },
    {
      title: 'Custom Shutters',
      location: 'Boca Raton, Living Room',
      image: '/shutters__001.jpg',
    },
  ];

  return (
    <div>
      <section className="relative min-h-[450px] md:min-h-[600px] flex items-center py-12 md:py-0 overflow-hidden">
        <div className="absolute inset-0">
          {HERO_SLIDES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: i === heroSlideIndex ? 1 : 0,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-warm-dark bg-opacity-40" />
        </div>

        <div className="relative w-full px-4 sm:px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-5 md:mb-7">
              <div className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide mb-1.5 drop-shadow-lg">
                UP TO 25% OFF + FREE MEASURE
              </div>
              <div className="text-sm sm:text-base md:text-lg font-medium drop-shadow-md">
                Sale extended through 2/20/26
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-6 leading-tight">
              Custom Window Treatments for {userLocation} Homes & Condos
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              Professional installation. Same-week consultations available.<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Trusted in Miami-Dade, Broward & Palm Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto">
              <Link
                to="/consultation"
                className="bg-white text-warm-dark px-6 sm:px-8 py-3 sm:py-4 rounded font-medium hover:bg-warm-cream transition-all text-center text-sm sm:text-base"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:954-629-1373"
                className="bg-warm-dark text-white px-6 sm:px-8 py-4 rounded font-medium text-base sm:text-lg hover:bg-warm-dark/90 active:bg-warm-dark/80 transition-all flex items-center justify-center gap-2 touch-manipulation"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Call 954-629-1373</span>
              </a>
            </div>
            <p className="mt-4 text-sm md:text-base text-white opacity-90">
              We handle everything from measurement to install
            </p>
            <div className="mt-6 md:mt-10 text-center text-sm md:text-lg text-white opacity-90">
              ⭐⭐⭐⭐⭐ 4.8 average rating from 120+ South Florida customers
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-taupe flex-shrink-0" strokeWidth={2} />
              <span className="font-semibold text-warm-dark text-sm sm:text-base">BBB A+ Rated</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-taupe flex-shrink-0" strokeWidth={2} />
              <span className="font-semibold text-warm-dark text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-taupe flex-shrink-0" strokeWidth={2} />
              <span className="font-semibold text-warm-dark text-sm sm:text-base">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-taupe flex-shrink-0" strokeWidth={2} />
              <span className="font-semibold text-warm-dark text-sm sm:text-base">Same-Week Consultations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              South Florida Homeowners Face Real Window Problems
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              We fix them with custom solutions built for your climate and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-soft-sand p-10 rounded-lg">
              <h3 className="text-2xl text-warm-dark mb-8">
                Common Frustrations
              </h3>
              <ul className="space-y-5">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-warm-gray leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-taupe/10 p-10 rounded-lg">
              <h3 className="text-2xl text-warm-dark mb-8">
                The NA Blinds Solution
              </h3>
              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-0.5" />
                    <span className="text-warm-gray leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              Custom Solutions for Every Window
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Control light, reduce heat, increase privacy, and elevate your home's style. Experienced with condo and high-rise installations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSolutions.map((solution) => (
              <div key={solution.name} className="bg-white p-8 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
<h3 className="text-xl text-warm-dark mb-3">
                {solution.name}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-charcoal font-medium hover:gap-3 transition-all border-b border-charcoal/30 pb-0.5"
            >
              Explore All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              Simple Process. Zero Hassle.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {process.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <div className="text-6xl font-bold text-taupe/40 mb-4">
                  {step.number}
                </div>
<h3 className="text-2xl text-warm-dark mb-3">
                {step.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              Real Projects. Real Results.
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
             See how we've transformed homes and condos across South Florida with custom window treatments that perform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} installed in ${project.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-warm-dark mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-taupe">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-navy font-medium hover:gap-3 transition-all justify-center"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              Why Homeowners Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-taupe/20 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-charcoal" />
                </div>
<h3 className="text-xl text-warm-dark mb-3">
                {benefit.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center bg-soft-sand p-8 md:p-10 rounded-lg">
            <h3 className="text-xl text-warm-dark mb-3">Our Satisfaction Guarantee</h3>
            <p className="text-warm-gray leading-relaxed">
              Every installation is backed by manufacturer warranties and our workmanship guarantee. If something isn't right, we make it right — no questions asked. We've built our reputation on standing behind our work for over a decade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center gap-8 mb-8">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8203c13b9c6469cc82d3.png"
                alt="Angi Super Service Award"
                className="h-20 w-auto"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8045a0fb4a71324d0823.png"
                alt="BBB Accredited"
                className="h-20 w-auto"
              />
              <img
                src="/houzz.png"
                alt="Houzz"
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-warm-dark mb-8">
              Trusted by South Florida Homeowners
            </h2>
            <p className="text-lg text-warm-gray mb-12">
              BBB A+ rating and Angi Super Service Award. Quality work and reliable service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 md:p-8 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-gray mb-4 leading-relaxed">
                "Professional service from start to finish. They helped us choose the perfect shades for our condo and the installation was flawless."
              </p>
              <p className="text-sm font-medium text-warm-dark">Maria G., Coral Gables</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-gray mb-4 leading-relaxed">
                "Quick turnaround and excellent quality. Our motorized shades work perfectly and look amazing. Highly recommend!"
              </p>
              <p className="text-sm font-medium text-warm-dark">David R., Boca Raton</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-gray mb-4 leading-relaxed">
                "They made everything so easy. Showed up on time, very clean work, and the results exceeded our expectations."
              </p>
              <p className="text-sm font-medium text-warm-dark">Jennifer L., Miami Beach</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-navy font-medium hover:gap-3 transition-all"
            >
              Read Customer Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-warm-dark mb-8">
              Common Questions Homeowners Ask
            </h2>
            <p className="text-lg text-warm-gray">
              Everything you need to know before scheduling your free consultation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-soft-sand transition-colors"
                >
                  <h3 className="text-base sm:text-xl text-warm-dark pr-4 sm:pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-charcoal flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-4 pb-4 sm:px-8 sm:pb-6 transition-all duration-300 ${
                    openFaqIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-warm-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-navy font-medium hover:gap-3 transition-all"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
