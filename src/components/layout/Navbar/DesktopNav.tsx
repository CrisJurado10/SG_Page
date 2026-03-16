import React, { memo, useRef, useEffect } from "react";
import type { NavLink } from "./constants"; // import type

interface DesktopNavProps {
  scrolled: boolean;
  activeSection: string;
  navLinks: NavLink[];
  onLinkClick: (href: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = memo(({
  scrolled,
  activeSection,
  navLinks,
  onLinkClick
}) => {
  const underlineRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const activeLink = linksRef.current[activeSection];
    const underline = underlineRef.current;

    if (!activeLink || !underline) return;

    underline.style.width = `${activeLink.offsetWidth}px`;
    underline.style.left = `${activeLink.offsetLeft}px`;
  }, [activeSection]);

  return (
    <div className="hidden md:flex items-center space-x-8 relative">
      <span
        ref={underlineRef}
        className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 transform-gpu"
      />
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;

        return (
          <a
            key={link.id}
            ref={(el) => {
              linksRef.current[link.id] = el;
            }}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.href);
            }}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-1 py-2 font-medium transition-colors rounded-md ${
              scrolled
                ? "text-gray-600 hover:text-blue-600"
                : "text-gray-200 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
});

DesktopNav.displayName = "DesktopNav";
