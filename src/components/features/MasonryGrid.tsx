import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // <-- Senior Hook Import

// Interface defining the shape of our card data
interface CardData {
  id: string;
  title: string;
  shortText: string;
  fullText: string;
  imageUrl: string;
}

// Rock-solid Unsplash image URLs
const mockCards: CardData[] = [
  {
    id: '1',
    title: 'Tarjetas de Crédito Premium',
    shortText: 'Descubre los beneficios exclusivos de nuestras tarjetas metálicas.',
    fullText: 'Acceso a salas VIP en aeropuertos de todo el mundo, seguros de viaje integrales y un programa de recompensas inigualable que te devuelve hasta un 5% en compras. Sin comisiones internacionales.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Inversiones Automatizadas',
    shortText: 'Haz que tu dinero trabaje para ti con nuestros portafolios.',
    fullText: 'Nuestro algoritmo balancea tu portafolio diariamente según las condiciones del mercado y tu perfil de riesgo. Invierte en acciones, bonos y ETFs globales desde solo $10.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Pagos Internacionales',
    shortText: 'Envía y recibe dinero en más de 50 divisas al instante.',
    fullText: 'Olvídate de las altas tarifas bancarias. Convierte divisas al tipo de cambio interbancario real y envía transferencias que llegan en segundos. Ideal para operaciones globales.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Ahorro Inteligente',
    shortText: 'Alcanza tus metas financieras sin esfuerzo con reglas.',
    fullText: 'Configura reglas como "redondear mis compras" o "guardar el 10%". Crea múltiples bóvedas para diferentes objetivos y observa cómo crecen con nuestra tasa preferencial.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Seguridad Biométrica',
    shortText: 'Tu cuenta protegida por la tecnología más avanzada.',
    fullText: 'Implementamos reconocimiento facial y dactilar para autorizar transacciones. Tus fondos están asegurados y utilizamos encriptación AES-256 para proteger tus datos.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Cripto Exchange',
    shortText: 'Compra, vende y almacena activos digitales 24/7.',
    fullText: 'Accede al mercado cripto desde la misma app. Intercambia Bitcoin, Ethereum y stablecoins con los spreads más bajos, manteniendo el control total de tus llaves privadas.',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
  }
];

// Individual Card Component
const MasonryCard: React.FC<{ card: CardData; index: number }> = ({ card, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Attach the scroll reveal hook to each card
  const { ref, isVisible } = useScrollReveal(0.15);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article 
      ref={ref as React.RefObject<HTMLUnknownElement>} // Use type assertion to satisfy TS
      // Apply visibility classes conditionally, utilizing the index to create a staggered delay effect
      className={`break-inside-avoid mb-6 md:mb-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-700 border border-slate-700/50 overflow-hidden group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }} // Staggered entrance
    >
      
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={card.imageUrl}
          alt={card.title}
          loading="lazy"
          decoding="async" /* Offloads image decoding from the main thread to prevent jank and maintain 60fps scrolling */
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

        {/* CRITICAL PERFORMANCE: CSS Grid 0fr to 1fr animation technique */}
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

        {/* Accessible Toggle Button */}
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
};

export const MasonryGrid: React.FC = () => {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal();

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative z-30" id="ecosistema">
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Fade-in Effect */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
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

        {/* Pure CSS Columns Masonry Layout */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-8">
          {mockCards.map((card, index) => (
            <MasonryCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGrid;