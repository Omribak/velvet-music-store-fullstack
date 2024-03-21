import { useEffect, RefObject } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  displayRef: RefObject<HTMLElement>,
  callback: () => void
): void => {
  const handleClickOutside = (event: MouseEvent): void => {
    const clickedElement = event.target as Node;

    if (
      ref.current &&
      !ref.current.contains(clickedElement) &&
      displayRef.current &&
      !displayRef.current.contains(clickedElement)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, displayRef, callback]);
};

export default useClickOutside;
