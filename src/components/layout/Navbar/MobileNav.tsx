import React, { memo } from "react";
import type { NavLink } from "./constants"; // import type

interface MobileNavProps {
  isOpen: boolean;
  activeSection: string;
  navLinks: NavLink[];
  onLinkClick: (href: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = memo(({
  isOpen,
  activeSection,
  navLinks,
  onLinkClick
}) => (
  <div
    id="mobile-menu"
    aria-hidden={!isOpen}
    className={`md:hidden overflow-hidden transition-all duration-300 transform-gpu ${
      isOpen
        ? "max-h-64 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }`}
  >
    <div className="px-6 pb-6 pt-2 space-y-4">
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.href);
            }}
            aria-current={isActive ? "page" : undefined}
            className={`block text-lg font-medium transition-colors ${
              isActive
                ? "text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  </div>
));

MobileNav.displayName = "MobileNav";
