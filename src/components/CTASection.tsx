import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Let\u2019s Discuss Your Project',
  subtitle = 'Schedule a free in-home consultation. We bring samples, take measurements, and provide a clear estimate — no obligation.',
}: CTASectionProps) {

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-charcoal-dark">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-warm-gold mb-8 leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/consultation"
            className="bg-white text-charcoal-dark px-6 sm:px-8 py-4 rounded font-medium text-base sm:text-lg hover:bg-white/90 active:bg-white/80 transition-all flex items-center justify-center gap-2 touch-manipulation"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span>Schedule Consultation</span>
          </Link>
          <a
            href="tel:954-629-1373"
            className="bg-transparent text-white border border-white/50 px-6 sm:px-8 py-4 rounded font-medium text-base sm:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 touch-manipulation"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>Call 954-629-1373</span>
          </a>
        </div>
      </div>
    </section>
  );
}
