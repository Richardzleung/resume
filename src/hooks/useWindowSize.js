import { useState, useEffect, useRef } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object'; //Object represents browser window
  const lastWidth = useRef();
  
  const getSize = () => {
    return {
     viewPortWidth: isClient ? window.innerWidth : undefined,
     isLargishScreen: isClient ? window.innerWidth >= 768 : null
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) return false; //Exit if not user/browser

    const handleResize = () => {
      if (window.innerWidth !== lastWidth.current) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(width)
      }
    }
    window.addEventListener('resize', handleResize) // <-- I am only interested in window.innerWidth !
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;