import React, { memo } from "react";

interface ToggleButtonProps {
  scrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = memo(({ scrolled, isOpen, onToggle }) => (
  <div className="md:hidden">
    <button
      type="button"
      onClick={onToggle}
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
      className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset transition-colors ${
        scrolled
          ? "text-gray-600 hover:bg-gray-100 focus:ring-blue-600"
          : "text-white hover:bg-white/20 focus:ring-white"
      }`}
    >
      <svg
        className="w-6 h-6 transform-gpu transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className={`origin-center transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
          d="M4 6h16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className={`transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
          d="M4 12h16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className={`origin-center transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
          d="M4 18h16"
        />
      </svg>
    </button>
  </div>
));

ToggleButton.displayName = "ToggleButton";
