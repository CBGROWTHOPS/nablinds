import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { scrollToConsultationForm } from '../utils/scrollToForm';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Ready to Transform Your Space?',
  subtitle = 'Schedule your free in-home consultation today. Same-week appointments available.',
}: CTASectionProps) {
  const location = useLocation();
  const isOnContactPage = location.pathname === '/contact' || location.pathname === '/contact-2';

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isOnContactPage) {
      e.preventDefault();
      scrollToConsultationForm();
    }
  };

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-soft-sand">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-warm-dark mb-3 sm:mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-warm-gray mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/contact-2#consultation-form"
            onClick={handleConsultationClick}
            className="bg-ocean text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 active:bg-opacity-80 transition-all flex items-center justify-center gap-2 touch-manipulation shadow-sm"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span>Request Free Estimate</span>
          </Link>
          <a
            href="tel:954-629-1373" onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion("tel:954-629-1373"); }}
            className="bg-white text-ocean border-2 border-ocean px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-ocean hover:text-white active:bg-ocean/90 active:text-white transition-all flex items-center justify-center gap-2 touch-manipulation shadow-sm"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>Call 954-629-1373</span>
          </a>
        </div>
        <p className="mt-4 text-sm sm:text-base text-warm-gray">
          No obligation. No pressure. Professionally measured and installed.
        </p>
      </div>
    </section>
  );
}
