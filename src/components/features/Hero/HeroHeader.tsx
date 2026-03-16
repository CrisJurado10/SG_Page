import React, { memo } from 'react';

interface HeroHeaderProps {
  isMounted: boolean;
}

export const HeroHeader: React.FC<HeroHeaderProps> = memo(({ isMounted }) => {
  return (
    <>
      <h1 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        La Billetera Digital del <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Futuro
        </span>
      </h1>
      
      <p className={`mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-16 drop-shadow-lg font-light transition-all duration-1000 delay-150 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Gestiona tus tarjetas, invierte en la bolsa y realiza pagos internacionales con la seguridad y fluidez que mereces.
      </p>
    </>
  );
});

HeroHeader.displayName = 'HeroHeader';
