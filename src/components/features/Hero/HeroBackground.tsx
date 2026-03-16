import React, { memo } from 'react';
import type { RefObject } from 'react'; //  import type
import heroBg from '../../../assets/hero-bg.mp4';

interface HeroBackgroundProps {
  parallaxRef: RefObject<HTMLDivElement | null>; // let null
}

export const HeroBackground: React.FC<HeroBackgroundProps> = memo(({ parallaxRef }) => {
  return (
    <div 
      ref={parallaxRef}
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
  );
});

HeroBackground.displayName = 'HeroBackground';