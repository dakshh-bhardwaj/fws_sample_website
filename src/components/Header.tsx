import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Contrast } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { highContrast, toggleHighContrast } = useAccessibility();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Blog', href: '/blog' },
    { name: 'Donate', href: '/donate' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-xl font-bold text-blue-600">
              <span className="sr-only">Frontier's welfare society</span>
              Frontier's welfare society
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium underline decoration-2 underline-offset-4 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 decoration-blue-600'
                      : 'text-gray-700 hover:text-blue-600 decoration-transparent hover:decoration-blue-300'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleHighContrast}
              aria-label={`${highContrast ? 'Disable' : 'Enable'} high contrast mode`}
              aria-pressed={highContrast}
            >
              <Contrast className="h-4 w-4" />
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium underline decoration-2 underline-offset-4 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 decoration-blue-600'
                      : 'text-gray-700 hover:text-blue-600 decoration-transparent hover:decoration-blue-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
