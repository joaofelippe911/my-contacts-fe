import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);
  const elementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const ref = elementRef.current;

    if (!visible && elementRef.current) {
      elementRef.current.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [visible]);

  return {
    shouldRender,
    elementRef,
  };
}
