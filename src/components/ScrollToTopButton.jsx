import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      aria-label='Scroll to top'
      onClick={scrollToTop}
      className={`
       scrollToTop 
        ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto cursor-pointer'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
