import React, { useState, useMemo } from 'react';

// Interface for navigation links
interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Memoized navigation links to prevent unnecessary re-renders
  const navLinks: NavLink[] = useMemo(
    () => [
      { id: 'home', label: 'Inicio', href: '/' },
      { id: 'cards', label: 'Tarjetas', href: '/cards' },
      { id: 'services', label: 'Servicios', href: '/services' },
      { id: 'contact', label: 'Contacto', href: '/contact' },
    ],
    []
  );

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
              SynergyPay
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile, visible on md and up */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors"
                aria-current={link.id === 'home' ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Visible only on small screens */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-90 hidden' : 'block'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'block rotate-0' : 'hidden -rotate-90'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - CSS Transitions for height/opacity */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
