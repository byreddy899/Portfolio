import { useEffect } from 'react';

export function useIntersectionReveal(selector = '.rv', threshold = 0.05) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('on'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold]);
}

