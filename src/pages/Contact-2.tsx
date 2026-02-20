import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useSEO } from '../utils/seo';
import ContactInfo from '../components/ContactInfo';

export default function Contact2() {
  const navigate = useNavigate();

  useSEO({
    title: 'Contact NA Blinds | Free Window Treatment Consultation South Florida',
    description: 'Request a free consultation for custom window treatments. Serving Miami-Dade, Broward, and Palm Beach counties. Call 954-629-1373.',
    canonicalUrl: 'https://www.nablinds.co/contact-2'
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://api.leadconnectorhq.com') {
        if (event.data && (
          event.data.type === 'hsFormCallback' ||
          event.data.eventName === 'onFormSubmitted' ||
          event.data === 'form-submitted' ||
          (typeof event.data === 'string' && event.data.includes('submit'))
        )) {
          navigate('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

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
      <section className="relative py-20 md:py-28 px-6 bg-soft-sand overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-contact-2.png)' }}
        />
        <div className="absolute inset-0 bg-warm-dark/70" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-2xl">
            Get Started Today
          </h1>
          <p className="text-xl text-white leading-relaxed drop-shadow-xl">
            Schedule your free in-home consultation. Same-week appointments available. You don't need to know what you want yet. We bring samples and guide you through the options.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />

            <div className="overflow-hidden" id="consultation-form">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
                  <h2 className="text-lg sm:text-2xl text-warm-dark whitespace-nowrap mb-2">
                    Request a Free Estimate
                  </h2>
                  <p className="text-sm text-warm-gray">
                    We bring samples and guide you through the options
                  </p>
                </div>
                <div className="w-full overflow-hidden">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/v8LMVxlC3k5fMrhbqP2F"
                    style={{ width: '100%', height: '602px', border: 'none' }}
                    id="inline-v8LMVxlC3k5fMrhbqP2F"
                    loading="eager"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="NA Blinds Leads - Bolt"
                    data-height="602"
                    data-layout-iframe-id="inline-v8LMVxlC3k5fMrhbqP2F"
                    data-form-id="v8LMVxlC3k5fMrhbqP2F"
                    title="NA Blinds Leads - Bolt">
                  </iframe>
                </div>
              </div>

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

      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-warm-dark mb-8">
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
