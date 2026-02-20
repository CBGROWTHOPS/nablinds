import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const exploreLinks = [
    { name: 'Blinds', path: '/products/blinds' },
    { name: 'Shades', path: '/products/shades' },
    { name: 'Shutters', path: '/products/shutters' },
    { name: 'Drapes', path: '/products/drapes' },
    { name: 'Motorized & Smart', path: '/motorized-blinds' },
  ];

  const planLinks = [
    { name: 'Build Your Project', path: '/build-your-project' },
    { name: 'Get Estimate', path: '/consultation' },
    { name: 'Process', path: '/process' },
    { name: 'Guides', path: '/guides' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Trade Program', path: '/trade' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          <div>
            <h3 className="text-warm-dark font-bold text-sm uppercase tracking-wider mb-5">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-warm-gray hover:text-navy transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-dark font-bold text-sm uppercase tracking-wider mb-5">Plan</h3>
            <ul className="space-y-3">
              {planLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-warm-gray hover:text-navy transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-dark font-bold text-sm uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-warm-gray hover:text-navy transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-dark font-bold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:954-629-1373"
                  className="flex items-start gap-3 text-warm-gray hover:text-navy transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-navy" />
                  <span>954-629-1373</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nablinds.co"
                  className="flex items-start gap-3 text-warm-gray hover:text-navy transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-navy" />
                  <span>info@nablinds.co</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
                  <div itemProp="streetAddress">10034 Spanish Isles Blvd</div>
                  <div>
                    <span itemProp="addressLocality">Boca Raton</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">33498</span>
                  </div>
                  <div className="mt-2 text-xs opacity-80">Serving Miami-Dade, Broward & Palm Beach Counties</div>
                </address>
              </li>
              <li className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.facebook.com/nablindsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-navy transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/nablindsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-navy transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-warm-gray">
            <p>© {new Date().getFullYear()} NA Blinds. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-navy transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-navy transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-warm-gray text-sm">
            Licensed & Insured • BBB A+ Rated
          </p>
        </div>
      </div>
    </footer>
  );
}
