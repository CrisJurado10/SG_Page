import React, { useState, useRef, useCallback, useMemo } from "react";
import { useScrollBehavior } from "../../hooks/useScrollBehavior";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useClickOutside } from "../../hooks/useClickOutside";
import { NAV_LINKS } from "./Navbar/constants";
import { Logo } from "./Navbar/Logo";
import { DesktopNav } from "./Navbar/DesktopNav";
import { ToggleButton } from "./Navbar/ToggleButton";
import { MobileNav } from "./Navbar/MobileNav";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrolled, visible } = useScrollBehavior();
  
  const linkIds = useMemo(() => NAV_LINKS.map(link => link.id), []);
  const activeSection = useScrollSpy(linkIds);

  const navRef = useRef<HTMLElement>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // ✅ Ahora el hook acepta el navRef (HTMLElement | null) sin quejarse
  useClickOutside(navRef, closeMobileMenu, isMobileMenuOpen);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);

    const id = href.replace("#", "");

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 transform-gpu ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-lg shadow-black/5"
            : "bg-white/10 backdrop-blur-md border-white/20 shadow-xl"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Logo scrolled={scrolled} onLinkClick={handleLinkClick} />
            <DesktopNav
              scrolled={scrolled}
              activeSection={activeSection}
              navLinks={NAV_LINKS}
              onLinkClick={handleLinkClick}
            />
            <ToggleButton
              scrolled={scrolled}
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
          </div>
        </div>

        <MobileNav
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          navLinks={NAV_LINKS}
          onLinkClick={handleLinkClick}
        />
      </nav>
    </div>
  );
};

export default Navbar;