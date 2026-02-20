import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import PromoBar from './PromoBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productsOpenMobile, setProductsOpenMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const location = useLocation();

  const productsDropdown = [
    { name: 'Blinds', path: '/products/blinds' },
    { name: 'Shades', path: '/products/shades' },
    { name: 'Shutters', path: '/products/shutters' },
    { name: 'Drapes', path: '/products/drapes' },
  ];

  const servicesDropdown = [
    { name: 'Motorized Blinds', path: '/motorized-blinds' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = productsDropdown.some((p) => location.pathname.startsWith(p.path));
  const isServicesActive = location.pathname === '/motorized-blinds' || location.pathname === '/services';

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

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  productsOpen || isProductsActive ? 'text-navy' : 'text-warm-dark hover:text-navy'
                }`}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                aria-controls="products-menu"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div id="products-menu" className="absolute top-full left-0 pt-2" role="menu">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px]">
                    {productsDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === item.path ? 'bg-soft-sand text-navy font-medium' : 'text-warm-dark hover:bg-soft-sand hover:text-navy'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  servicesOpen || isServicesActive ? 'text-navy' : 'text-warm-dark hover:text-navy'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div id="services-menu" className="absolute top-full left-0 pt-2" role="menu">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px]">
                    <Link
                      to="/services"
                      role="menuitem"
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === '/services' ? 'bg-soft-sand text-navy font-medium' : 'text-warm-dark hover:bg-soft-sand hover:text-navy'
                      }`}
                    >
                      All Services
                    </Link>
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === item.path ? 'bg-soft-sand text-navy font-medium' : 'text-warm-dark hover:bg-soft-sand hover:text-navy'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/service-areas"
              className={`text-sm font-medium transition-colors ${isActive('/service-areas') ? 'text-navy' : 'text-warm-dark hover:text-navy'}`}
            >
              Service Areas
            </Link>
            <Link
              to="/guides"
              className={`text-sm font-medium transition-colors ${isActive('/guides') ? 'text-navy' : 'text-warm-dark hover:text-navy'}`}
            >
              Guides
            </Link>
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
          <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 space-y-2" aria-label="Mobile navigation">
            <div>
              <button
                onClick={() => setProductsOpenMobile(!productsOpenMobile)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-warm-dark hover:bg-soft-sand active:bg-soft-sand font-medium touch-manipulation"
                aria-expanded={productsOpenMobile}
              >
                Products
                <ChevronDown className={`w-5 h-5 transition-transform ${productsOpenMobile ? 'rotate-180' : ''}`} />
              </button>
              {productsOpenMobile && (
                <div className="pl-4 pt-1 space-y-1">
                  {productsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => { setIsMenuOpen(false); setProductsOpenMobile(false); }}
                      className="block px-4 py-2 rounded-lg text-warm-gray hover:bg-soft-sand active:bg-soft-sand text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-warm-dark hover:bg-soft-sand active:bg-soft-sand font-medium touch-manipulation"
                aria-expanded={servicesOpenMobile}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpenMobile ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpenMobile && (
                <div className="pl-4 pt-1 space-y-1">
                  <Link
                    to="/services"
                    onClick={() => { setIsMenuOpen(false); setServicesOpenMobile(false); }}
                    className="block px-4 py-2 rounded-lg text-warm-gray hover:bg-soft-sand active:bg-soft-sand text-sm"
                  >
                    All Services
                  </Link>
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => { setIsMenuOpen(false); setServicesOpenMobile(false); }}
                      className="block px-4 py-2 rounded-lg text-warm-gray hover:bg-soft-sand active:bg-soft-sand text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/service-areas"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors font-medium touch-manipulation ${
                isActive('/service-areas') ? 'bg-navy text-white' : 'text-warm-dark hover:bg-soft-sand active:bg-soft-sand'
              }`}
            >
              Service Areas
            </Link>
            <Link
              to="/guides"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors font-medium touch-manipulation ${
                isActive('/guides') ? 'bg-navy text-white' : 'text-warm-dark hover:bg-soft-sand active:bg-soft-sand'
              }`}
            >
              Guides
            </Link>
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
