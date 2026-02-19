import { useEffect } from 'react';
import { CheckCircle, Phone, Home, Wrench } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';

  useEffect(() => {
    document.title = 'Thank You | NA Blinds';

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'NA Blinds - Custom Window Treatments in South Florida | Miami, Broward, Palm Beach';
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-block touch-manipulation">
            <img
              src="/nablinds_logo_transparent_black.png"
              alt="NA Blinds"
              className="h-10 sm:h-12"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-taupe/20 rounded-full mb-4 sm:mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-charcoal" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-warm-dark mb-3 sm:mb-4 leading-tight px-2">
            Thanks — Your Consultation Request Is Confirmed
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            A member of the NA Blinds team will call you shortly to confirm your free in-home consultation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-warm-dark mb-8">What Happens Next</h2>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-taupe/20 rounded-full">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-warm-dark text-base sm:text-lg mb-1">1. We'll Call You</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We'll contact you shortly from 954-629-1373 to confirm your consultation.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-taupe/20 rounded-full">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-warm-dark text-base sm:text-lg mb-1">2. In-Home Consultation</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We'll review your needs, show options, and take precise measurements. No pressure.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-taupe/20 rounded-full">
                  <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-warm-dark text-base sm:text-lg mb-1">3. Installation</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Most projects are completed within 7–10 days after ordering.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200">
            <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
              No obligation. You're free to ask questions and explore options.
            </p>
          </div>
        </div>

        <div className="bg-navy rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 text-center">
          <a
            href="tel:9546291373"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-navy px-5 py-4 sm:px-8 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 w-full sm:w-auto touch-manipulation shadow-sm"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="hidden min-[400px]:inline">Call Now to Confirm Your Consultation</span>
            <span className="min-[400px]:hidden">Call to Confirm</span>
          </a>
          <p className="text-white/90 text-xs sm:text-sm mt-3 sm:mt-4">
            Available Monday–Saturday, 8am–6pm
          </p>
        </div>

        <div className="bg-soft-sand rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-warm-dark mb-8 text-center">
            Why Homeowners Trust NA Blinds
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">BBB A+ Rated</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">10+ Years Serving South Florida</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">Same-Week Consultations</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-warm-dark mb-8">
            Want to Get the Most From Your Consultation?
          </h2>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Rooms you'd like to focus on</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Heat, glare, or privacy concerns</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">Condo or HOA requirements (if applicable)</span>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <Link
            to="/"
            className="text-gray-500 hover:text-navy transition-colors duration-200 text-sm touch-manipulation inline-block py-2 px-4"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
