import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('promoBarDismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('promoBarDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-warm-cream text-warm-dark py-2.5 px-4 relative border-b border-taupe/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-medium tracking-wide uppercase pr-8">
          Up to 25% Off for a Limited Time
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-gray hover:text-warm-dark transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
