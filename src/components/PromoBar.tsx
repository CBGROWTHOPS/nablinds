import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const PROMO_END_DAYS = 14;

function getEndDate(): Date {
  const key = 'promoFirstVisit';
  let firstVisit = localStorage.getItem(key);
  if (!firstVisit) {
    firstVisit = new Date().toISOString();
    localStorage.setItem(key, firstVisit);
  }
  const visit = new Date(firstVisit);
  const end = new Date(visit);
  end.setDate(end.getDate() + PROMO_END_DAYS);
  return end;
}

function formatEndDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
}

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('promoBarDismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
    setEndDate(formatEndDate(getEndDate()));
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('promoBarDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#A89B8A] text-white py-2.5 px-4 relative border-b border-taupe/30 overflow-hidden w-full min-w-0">
      <div className="max-w-7xl mx-auto text-center min-w-0">
        <Link
          to="/consultation"
          className="text-xs sm:text-sm font-medium tracking-wide uppercase pr-8 block hover:text-white/90 transition-colors break-words"
        >
          25% OFF + FREE MEASURE — Shop now through {endDate}
        </Link>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
