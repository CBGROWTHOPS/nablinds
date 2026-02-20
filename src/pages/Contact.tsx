import { useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useSEO } from '../utils/seo';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useSEO({
    title: 'Contact NA Blinds | Free Window Treatment Consultation South Florida',
    description: 'Request a free consultation for custom window treatments. Serving Miami-Dade, Broward, and Palm Beach counties. Call 954-629-1373.',
    canonicalUrl: 'https://www.nablinds.co/contact'
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#consultation-form') {
      setTimeout(() => {
        const element = document.getElementById('consultation-form');
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-contact.png')`,
          }}
        >
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Get Started Today
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            Schedule your free in-home consultation. Same-week appointments available.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <div id="consultation-form">
              <ContactForm />

              <div className="mt-8 mb-8 text-center px-4">
                <div className="mb-3 text-lg">⭐⭐⭐⭐⭐</div>
                <p className="text-warm-gray italic mb-1">"Installed in our Brickell condo. HOA approved and flawless."</p>
                <p className="text-warm-gray">— David R., Brickell</p>
              </div>

              <div className="text-center">
                <p className="text-warm-gray mb-3 sm:mb-4 text-sm sm:text-base">Prefer to call?</p>
                <a
                  href="tel:954-629-1373"
                  className="inline-flex items-center justify-center gap-2 bg-white text-phone border-2 border-phone px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-phone hover:text-white active:bg-phone active:text-white transition-all touch-manipulation shadow-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>Call 954-629-1373 Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-warm-dark mb-4">
            Same-Week Appointments Available
          </h2>
          <p className="text-lg text-warm-gray">
            We understand your time is valuable. Contact us today and we'll schedule your consultation at your earliest convenience.
          </p>
        </div>
      </section>
    </div>
  );
}
