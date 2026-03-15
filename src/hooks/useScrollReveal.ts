import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook that uses the native Intersection Observer API
 * to detect when an element enters the viewport.
 * * @param threshold - Percentage of the element's visibility required to trigger (0 to 1)
 */
export const useScrollReveal = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element scrolls into view, trigger the animation state
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // CRITICAL: Unobserve immediately after it becomes visible 
          // to prevent memory leaks and unnecessary subsequent re-renders
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};