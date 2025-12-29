import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Calendar, Phone } from 'lucide-react';

export default function ConsultationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const location = useLocation();

  const excludedPages = ['/thank-you', '/contact', '/contact-2'].includes(location.pathname) ||
                        location.pathname.startsWith('/docs');

  useEffect(() => {
    if (excludedPages || hasShown) return;

    const timeTimeout = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 120000);

    return () => {
      clearTimeout(timeTimeout);
    };
  }, [hasShown, excludedPages]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || excludedPages) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-warm-gray hover:text-warm-dark transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-warm-dark mb-3">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
            Schedule your free consultation today. Same-week appointments available.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            to="/contact-2#consultation-form"
            onClick={handleClose}
            className="bg-ocean text-white px-6 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 w-full shadow-sm"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span>Request Free Estimate</span>
          </Link>
          <a
            href="tel:954-629-1373"
            onClick={handleClose}
            className="bg-white text-ocean border-2 border-ocean px-6 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-ocean hover:text-white transition-all flex items-center justify-center gap-2 w-full shadow-sm"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>Call 954-629-1373</span>
          </a>
        </div>

        <p className="mt-4 text-sm text-center text-warm-gray">
          No obligation. Professionally measured and installed.
        </p>
      </div>
    </div>
  );
}
