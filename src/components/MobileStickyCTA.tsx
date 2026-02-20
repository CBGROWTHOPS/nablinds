import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const shouldHideStickyBar = (pathname: string): boolean => {
  const excludedPages = [
    '/contact',
    '/contact-2',
    '/consultation',
    '/build-your-project',
    '/thank-you',
    '/thank-you-consultation',
    '/thank-you-facebook',
  ];

  if (excludedPages.includes(pathname)) {
    return true;
  }

  if (pathname.startsWith('/internal-docs') || pathname.startsWith('/docs')) {
    return true;
  }

  return false;
};

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const shouldHide = shouldHideStickyBar(location.pathname);

  useEffect(() => {
    if (shouldHide) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 7);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, shouldHide]);

  if (!isVisible || shouldHide) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="flex gap-2 p-3">
        <a
          href="tel:954-629-1373"
          className="flex items-center justify-center gap-2 flex-1 bg-phone text-white px-4 py-3 rounded font-medium text-sm active:bg-phone/90 transition-all touch-manipulation"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => navigate('/consultation')}
          className="flex-[2] bg-warm-dark text-white px-4 py-3 rounded font-medium text-sm hover:bg-warm-dark/90 active:bg-warm-dark/80 transition-all touch-manipulation"
        >
          Request Free Estimate
        </button>
      </div>
    </div>
  );
}
