import { useRef, useCallback } from 'react';
import type { MouseEvent } from 'react'; //  import type

/**
 * Custom hook to handle 3D mouse tracking interaction for high-performance UI cards.
 * Uses CSS variables on the targeted DOM element to avoid React state re-renders, 
 * maintaining 60fps animations.
 */
export const useMouseInteraction = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth) * 2 - 1;
    const yPos = (clientY / innerHeight) * 2 - 1;
    
    ref.current.style.setProperty('--x', `${xPos * -15}px`);
    ref.current.style.setProperty('--y', `${yPos * -15}px`);
    ref.current.style.setProperty('--rx', `${yPos * -8}deg`);
    ref.current.style.setProperty('--ry', `${xPos * 8}deg`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--x', `0px`);
    ref.current.style.setProperty('--y', `0px`);
    ref.current.style.setProperty('--rx', `0deg`);
    ref.current.style.setProperty('--ry', `0deg`);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
};
