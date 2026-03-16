import React, { useState, memo } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import type { CardData } from './constants'; 

export const MasonryCard: React.FC<{ card: CardData; index: number }> = memo(({ card, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Generic hook eliminates the need for 'as React.RefObject<HTMLUnknownElement>'
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <article 
      ref={ref} 
      className={`break-inside-avoid mb-6 md:mb-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-700 border border-slate-700/50 overflow-hidden group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={card.imageUrl}
          alt={card.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight tracking-tight">
          {card.title}
        </h3>
        <p className="text-slate-300 mb-4 font-medium text-base">
          {card.shortText}
        </p>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
          aria-hidden={!isExpanded}
        >
          <div className="overflow-hidden">
            <p className="text-slate-400 pb-5 pt-4 border-t border-slate-700/50 mt-2 leading-relaxed text-sm md:text-base">
              {card.fullText}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          className="inline-flex items-center justify-center font-bold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg py-2 px-3 -ml-3 mt-2"
        >
          {isExpanded ? 'Ocultar detalles' : 'Ver más'}
          <svg
            className={`w-5 h-5 ml-1 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </article>
  );
});

MasonryCard.displayName = 'MasonryCard';
