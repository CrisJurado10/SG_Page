import React, { useRef, useState, useEffect, type MouseEvent } from 'react';
import { useParallax } from '../../hooks/useParallax';
import heroBg from '../../assets/hero-bg.mp4'; 

export const HeroParallax: React.FC = () => {
  const videoRef = useParallax(0.3);
  const contentRef = useParallax(-0.2);
  const interactiveCardRef = useRef<HTMLDivElement>(null);

  // Mount state for sophisticated entrance animations
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Superior 3D interactive effect using CSS variables for high-performance rendering
  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!interactiveCardRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth) * 2 - 1;
    const yPos = (clientY / innerHeight) * 2 - 1;
    
    interactiveCardRef.current.style.setProperty('--x', `${xPos * -15}px`);
    interactiveCardRef.current.style.setProperty('--y', `${yPos * -15}px`);
    interactiveCardRef.current.style.setProperty('--rx', `${yPos * -8}deg`);
    interactiveCardRef.current.style.setProperty('--ry', `${xPos * 8}deg`);
  };

  const handleMouseLeave = () => {
    if (!interactiveCardRef.current) return;
    interactiveCardRef.current.style.setProperty('--x', `0px`);
    interactiveCardRef.current.style.setProperty('--y', `0px`);
    interactiveCardRef.current.style.setProperty('--rx', `0deg`);
    interactiveCardRef.current.style.setProperty('--ry', `0deg`);
  };

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-32 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={videoRef}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0" 
      >
        <div className="absolute inset-0 bg-slate-900/70 z-10" /> 
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover z-0"
        >
          <source src={heroBg} type="video/mp4" />
        </video>
      </div>

      <div 
        ref={contentRef}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl flex flex-col items-center mt-8 sm:mt-0"
      >
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          La Billetera Digital del <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Futuro
          </span>
        </h1>
        
        <p className={`mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-16 drop-shadow-lg font-light transition-all duration-1000 delay-150 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Gestiona tus tarjetas, invierte en la bolsa y realiza pagos internacionales con la seguridad y fluidez que mereces.
        </p>
        
        <div className={`relative w-full max-w-md mx-auto transition-all duration-1000 delay-300 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

          <div 
            ref={interactiveCardRef}
            style={{ 
              transform: 'perspective(1000px) translate3d(var(--x, 0), var(--y, 0), 0) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' 
            }}
            className="relative w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out will-change-transform"
          >
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

            <button className="mt-8 md:mt-10 w-full relative group overflow-hidden bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center gap-2">
                Comenzar a Invertir
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
