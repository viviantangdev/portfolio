import { useEffect } from 'react';

/**
 * Hook to detect clicks outside an element, excluding optional elements
 * @param {React.RefObject} ref - The ref of the element to detect outside clicks
 * @param {Function} onOutsideClick - Callback funktion when clicked outside
 * @param {React.RefObject[]} - [excludeRefs=[]] = array of refs to exclude from outside detection 
 */

export const useClickOutside = (targetRef, onOutsideClick, excludeRefs = []) => {
  useEffect(() => {
    const handleClick = (e) => {
      const isInsideTarget = targetRef.current?.contains(e.target);
      const isInsideExcluded = excludeRefs.some((ref) => ref.current?.contains(e.target));

      if (!isInsideTarget && !isInsideExcluded) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [targetRef, onOutsideClick, excludeRefs]);
};