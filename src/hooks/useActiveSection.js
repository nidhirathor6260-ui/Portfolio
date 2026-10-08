import { useEffect, useState } from 'react';

/**
 * Tracks which section is in the middle of the viewport, for the navbar highlight.
 * Any element with data-section="<nav id>" is observed, so extra sections
 * (such as Hackathons) can share a nav link.
 */
export function useActiveSection(initial = 'home') {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-section]'));
    if (!targets.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute('data-section'));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
