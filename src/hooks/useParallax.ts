import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply a parallax effect to an element.
 * It modifies the transform style directly on the ref to ensure 60fps performance
 * with GPU acceleration via translate3d.
 *
 * @param speedMultiplier - How fast the element moves relative to the scroll speed.
 *                          Positive values move down, negative values move up on scroll down.
 * @returns A ref object to be attached to the target HTMLDivElement.
 */
export const useParallax = (speedMultiplier: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous scheduled frame to prevent stacking
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      // Schedule new transform update
      rafId.current = requestAnimationFrame(() => {
        if (ref.current) {
          const scrollY = window.scrollY;
          // Apply translate3d to force hardware acceleration for smoother performance
          ref.current.style.transform = `translate3d(0, ${scrollY * speedMultiplier}px, 0)`;
        }
      });
    };

    // Add scroll event listener using passive flag for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set correct position on mount
    handleScroll();

    // Cleanup listener and pending animation frames on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [speedMultiplier]);

  return ref;
};
