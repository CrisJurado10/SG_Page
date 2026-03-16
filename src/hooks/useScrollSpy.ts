import { useState, useEffect } from "react";

export const useScrollSpy = (linkIds: string[], offset: number = 120) => {
  const [activeSection, setActiveSection] = useState(linkIds[0]);

  useEffect(() => {
    const sections = linkIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleScrollSpy = () => {
      let currentSection = linkIds[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top - offset <= 0) {
          currentSection = section.id;
        }
      }

      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (scrollBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [linkIds, offset]);

  return activeSection;
};
