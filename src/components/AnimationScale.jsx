import { useEffect, useRef } from 'react';

const AnimationScale = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add('animate-scale');
          obs.unobserve(ref.current); // 🔑 stop after first trigger
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect;
  }, []);

  return (
    <div ref={ref} className='opacity-0'>
      {children}
    </div>
  );
};

export default AnimationScale;
