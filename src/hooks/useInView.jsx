import { useEffect, useState } from 'react';

export const useInView = ({ref}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
   

    const observer = new IntersectionObserver(
      ([entry]) => {
                setIsInView(entry.isIntersecting)

      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect(); 
    };
  }, [ref]);

  return isInView;
};
