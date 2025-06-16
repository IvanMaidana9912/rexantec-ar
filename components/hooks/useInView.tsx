import { useState, useEffect, RefObject } from 'react';

export function useInView (
  ref: RefObject<Element | null>,
  options: { threshold?: number; triggerOnce?: boolean }
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) obs.disconnect();
        }
      },
      { threshold: options.threshold ?? 0 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options.threshold, options.triggerOnce]);

  return inView;
}