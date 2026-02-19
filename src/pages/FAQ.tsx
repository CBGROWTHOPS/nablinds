import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function FAQ() {
  useSEO({
    title: 'Window Treatment FAQs South Florida | NA Blinds',
    description: 'Common questions about window treatment installation, pricing, HOA compliance, and process. Get answers from South Florida experts.',
    canonicalUrl: 'https://www.nablinds.co/faq'
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Will my window treatments meet condo or HOA requirements?',
      answer: 'Yes. We work with condos and HOAs across South Florida daily. We help you choose compliant window treatment options and provide documentation when needed for approval.',
    },
    {
      question: 'How quickly can you install window treatments?',
      answer: 'Most projects are completed within 7–10 days after consultation. Same-week consultations are often available, with installation typically scheduled within 2 weeks total.',
    },
    {
      question: 'Do window treatments reduce heat and glare?',
      answer: 'Yes. Solar shades and light-filtering options are specifically designed for South Florida\'s intense sun. They reduce heat, block glare, and lower your AC costs while maintaining your view.',
    },
    {
      question: 'Do you offer motorized or smart shades?',
      answer: 'Yes. We install motorized and smart shade systems controlled by remote, app, or voice commands. They integrate with most home automation systems and add convenience plus child safety.',
    },
    {
      question: 'What happens during the free consultation?',
      answer: 'We review your needs, show product samples, take precise measurements, and provide a clear itemized estimate. No pressure and no obligation to purchase.',
    },
    {
      question: 'How much do custom window treatments cost?',
      answer: 'Pricing depends on window size, product type, and features. Estimates are provided during your free consultation with transparent, itemized breakdowns. No hidden fees.',
    },
    {
      question: 'What areas do you serve in South Florida?',
      answer: 'We serve all of Miami-Dade, Broward, and Palm Beach counties including Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and surrounding cities. Call to confirm service in your area.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. We are fully licensed and insured with a BBB A+ rating. We carry complete liability coverage and workers\' compensation insurance for your protection.',
    },
    {
      question: 'What if I need help after installation?',
      answer: 'We provide ongoing support and honor all manufacturer warranties. Contact us for adjustments, operation questions, or any issues and we\'ll address them promptly.',
    },
    {
      question: 'Can you match my existing home decor?',
      answer: 'Absolutely. We offer thousands of fabric options, colors, and styles. During your consultation, we bring samples to help you select treatments that complement your home\'s design.',
    },
    {
      question: 'What makes you different from big box stores?',
      answer: 'We provide true custom solutions with professional measurement, expert guidance, superior materials, and skilled installation by licensed technicians—not part-time staff.',
    },
    {
      question: 'Do I need to be home for the consultation?',
      answer: 'Yes. Your presence helps us understand your specific needs and preferences. We work around your schedule to find a convenient appointment time.',
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

  return (
    <div>
      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-warm-dark mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-warm-gray leading-relaxed">
            Common questions about our process, pricing, and services.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-soft-sand transition-colors"
                >
                  <span className="text-lg font-semibold text-warm-dark pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-charcoal flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-8 pb-6 transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-warm-gray leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have More Questions?"
        subtitle="We're happy to answer them. Schedule a consultation or give us a call — no obligation."
      />
    </div>
  );
}
