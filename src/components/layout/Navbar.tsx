import React, { useState, useMemo, useEffect, useRef } from 'react';

interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks: NavLink[] = useMemo(
    () => [
      { id: 'home', label: 'Inicio', href: '/' },
      { id: 'cards', label: 'Tarjetas', href: '#tarjetas' },
      { id: 'services', label: 'Servicios', href: '#servicios' },
    ],
    []
  );

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-4 pt-4 transition-all duration-300">
      <nav 
        ref={navRef}
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 border ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-gray-200 shadow-lg shadow-black/5' 
            : 'bg-white/10 backdrop-blur-md border-white/20 shadow-xl'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="/" 
                className={`text-2xl font-black tracking-tighter transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md ${
                  scrolled ? 'text-blue-600' : 'text-white'
                }`}
              >
                SG <span className={scrolled ? 'text-gray-900' : 'text-blue-400'}>SynerGy</span>
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`group relative px-1 py-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md ${
                    scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                  }`}
                  aria-current={link.id === 'home' ? 'page' : undefined}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
                    scrolled ? 'bg-blue-600' : 'bg-blue-400'
                  }`}></span>
                </a>
              ))}
            </div>

            <div className="flex items-center md:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset transition-colors ${
                  scrolled 
                    ? 'text-gray-600 hover:bg-gray-100 focus:ring-blue-600' 
                    : 'text-white hover:bg-white/20 focus:ring-white'
                }`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">{isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
                {/* Advanced single-SVG hamburger to cross morphing animation */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    className={`transition-all duration-300 origin-center ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                    d="M4 6h16" 
                  />
                  <path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    className={`transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                    d="M4 12h16" 
                  />
                  <path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    className={`transition-all duration-300 origin-center ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                    d="M4 18h16" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* High-performance CSS Grid expand/collapse animation for mobile menu */}
        <div
          className={`md:hidden grid transition-all duration-300 ease-in-out border-t ${
            isMobileMenuOpen ? 'grid-rows-[1fr] border-gray-200/50 opacity-100' : 'grid-rows-[0fr] border-transparent opacity-0'
          } ${scrolled ? 'bg-white/95' : 'bg-slate-900/95 backdrop-blur-xl'}`}
          id="mobile-menu"
        >
          <div className="overflow-hidden">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    scrolled 
                      ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;