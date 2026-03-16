import React, { memo } from 'react';
import type { RefObject } from 'react'; // import type

interface InteractiveCardProps {
  isMounted: boolean;
  cardRef: RefObject<HTMLDivElement | null>; // let null
}

export const InteractiveCard: React.FC<InteractiveCardProps> = memo(({ isMounted, cardRef }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto transition-all duration-1000 delay-300 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

      <div 
        ref={cardRef}
        style={{ 
          transform: 'perspective(1000px) translate3d(var(--x, 0), var(--y, 0), 0) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' 
        }}
        className="relative w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out will-change-transform"
      >
        {/* ... Resto del contenido de la tarjeta igual ... */}
        <div className="flex justify-between items-center border-b border-white/5 pb-5 mb-6">
          <span className="text-slate-300 font-medium tracking-wide">Balance Total</span>
          <span className="text-emerald-400 font-bold text-xl tracking-tight">+$12,450.00</span>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm text-slate-400 mb-2 font-medium">
              <span>Inversiones SG</span>
              <span className="text-blue-400">75%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-3/4 rounded-full"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm text-slate-400 mb-2 font-medium">
              <span>Ahorro Programado</span>
              <span className="text-purple-400">40%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 w-2/5 rounded-full"></div>
            </div>
          </div>
        </div>

        <button className="mt-8 md:mt-10 w-full relative group overflow-hidden bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="relative flex items-center justify-center gap-2">
            Comenzar a Invertir
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
});

InteractiveCard.displayName = 'InteractiveCard';