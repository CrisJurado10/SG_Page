import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook that uses the native Intersection Observer API
 * to detect when an element enters the viewport.
 * 
 * @template T - Type of the HTML element being observed
 * @param threshold - Percentage of the element's visibility required to trigger (0 to 1)
 * @returns Ref to attach to the element and boolean visibility state
 */
export const useScrollReveal = <T extends HTMLElement = HTMLElement>(threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  // Using a generic type allows strict typing without ugly assertions in the consumer component
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Performance optimization: Do not initialize observer if already visible
    if (!currentRef || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Architectural Improvement: Use disconnect() to aggressively free up memory
          // by entirely destroying the observer instance once its job is done.
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
};
