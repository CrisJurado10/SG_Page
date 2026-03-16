import React, { memo } from "react";

interface LogoProps {
  scrolled: boolean;
  onLinkClick: (href: string) => void;
}

export const Logo: React.FC<LogoProps> = memo(({ scrolled, onLinkClick }) => (
  <a
    href="#home"
    onClick={(e) => {
      e.preventDefault();
      onLinkClick("#home");
    }}
    className={`text-2xl font-black tracking-tighter rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
      scrolled ? "text-blue-600" : "text-white"
    }`}
  >
    SG{" "}
    <span className={scrolled ? "text-gray-900" : "text-blue-400"}>
      SynerGy
    </span>
  </a>
));

Logo.displayName = "Logo";
