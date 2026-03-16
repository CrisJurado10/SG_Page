import React, { useState, useEffect } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { useMouseInteraction } from '../../hooks/useMouseInteraction';
import { HeroBackground } from './Hero/HeroBackground';
import { HeroHeader } from './Hero/HeroHeader';
import { InteractiveCard } from './Hero/InteractiveCard';

export const HeroParallax: React.FC = () => {
  const videoRef = useParallax(0.3);
  const contentRef = useParallax(-0.2);
  
  const { ref: interactiveCardRef, handleMouseMove, handleMouseLeave } = useMouseInteraction<HTMLDivElement>();

  // Mount state for sophisticated entrance animations
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-32 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackground parallaxRef={videoRef} />

      <div 
        ref={contentRef}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl flex flex-col items-center mt-8 sm:mt-0"
      >
        <HeroHeader isMounted={isMounted} />
        
        <InteractiveCard 
          isMounted={isMounted} 
          cardRef={interactiveCardRef} 
        />
      </div>
    </section>
  );
};

export default HeroParallax;
