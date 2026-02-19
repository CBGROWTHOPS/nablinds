import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import PromoBar from './PromoBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Guides', path: '/guides' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <PromoBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center touch-manipulation">
            <img
              src="/nablinds_logo_transparent_black.png"
              alt="NA Blinds"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <Link
            to="/"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 text-warm-dark font-bold text-lg tracking-wide touch-manipulation"
          >
            NA BLINDS
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-navy'
                    : 'text-warm-dark hover:text-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:954-629-1373"
              className="text-warm-dark border border-warm-dark/30 px-5 py-2 rounded font-medium hover:bg-warm-cream transition-all flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>954-629-1373</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-warm-dark touch-manipulation hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium touch-manipulation ${
                  isActive(item.path)
                    ? 'bg-navy text-white'
                    : 'text-warm-dark hover:bg-soft-sand active:bg-soft-sand'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:954-629-1373"
              className="flex items-center justify-center gap-2 text-warm-dark border border-warm-dark/30 px-4 py-3 rounded font-medium touch-manipulation active:bg-warm-cream"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Call 954-629-1373</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
