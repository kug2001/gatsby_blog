import { useRef, useCallback, useEffect } from 'react'

type Props = {
  threshold: number[] | number;
  duration?: number | undefined;
  delay?: number | undefined;
  direction?: string;
}

export const useScrollFadeIn = ({
  threshold,
  duration = 1,
  delay = 0,
  direction = 'up'
}:Props) => {

  const dom = useRef(null);

  const handleDirection = (name:string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 20%, 0)';
      case 'down':
        return 'translate3d(0, -20%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(([entry]) => {
    const { current }:any = dom;
    if(Array.isArray(threshold)) {
      if(entry.intersectionRatio < threshold[0]){
        current.style.opacity = 0;
        current.style.transform = handleDirection(direction);
      }
      else if(entry.intersectionRatio > threshold[1]){
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    }
    else {
      if(entry.isIntersecting && current) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    }
  }, []);

  useEffect(()=> {
    let observer:IntersectionObserver;
    const { current } = dom;
    if(current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold,
      })
      observer.observe(current);
      return () => observer && observer.disconnect();
    };
  }, [handleScroll])


  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    }
  }
}