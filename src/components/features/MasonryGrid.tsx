import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MOCK_CARDS } from './Masonry/constants';
import { MasonryCard } from './Masonry/MasonryCard';

export const MasonryGrid: React.FC = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative z-30" id="ecosistema">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Ecosistema</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Soluciones financieras diseñadas para adaptarse a tu estilo de vida y potenciar tu crecimiento sin límites.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8">
          {MOCK_CARDS.map((card, index) => (
            <MasonryCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGrid;
