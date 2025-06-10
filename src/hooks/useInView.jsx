import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current; // Store ref.current as an local variable
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); 
    };
  }, [options]);

  return [ref, isInView];
};