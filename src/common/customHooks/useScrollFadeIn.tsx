import { MutableRefObject, RefObject, useCallback, useEffect } from 'react'

type Options = {
  threshold?: number[] | number;
  duration?: number | undefined;
  delay?: number | undefined;
  direction?: string;
}

export default function useScrollFadeIn(
  elmRef:RefObject<HTMLElement | undefined>,
  {
    threshold = [0.1, 0.7],
    duration = 0.7,
    delay = 0,
    direction = 'up',
  }:Options): void
  {
  const handleDirection = (name:string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 20%, 0)';
      case 'down':
        return 'translate3d(0, -20%, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(([entry]) => {
    const node = elmRef?.current;
    if(node && Array.isArray(threshold)) {
      if(entry.intersectionRatio < threshold[0]){
        node.style.opacity = '0';
        node.style.transform = 'translate3d(0, -20%, 0)';
      }
      else if(entry.intersectionRatio > threshold[1]){
        node.style.transitionProperty = 'all';
        node.style.transitionDuration = `${duration}s`;
        node.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        node.style.transitionDelay = `${delay}s`;
        node.style.opacity = '1';
        node.style.transform = 'translate3d(0, 0, 0)';
      }
    }
    else {
      if(entry.isIntersecting && node) {
        node.style.transitionProperty = 'all';
        node.style.transitionDuration = `${duration}s`;
        node.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        node.style.transitionDelay = `${delay}s`;
        node.style.opacity = '1';
        node.style.transform = 'translate3d(0, 0, 0)';
      }
    }
  }, []);

  useEffect(()=> {
    let observer:IntersectionObserver;
    const node = elmRef?.current;
    if(node) {
      observer = new IntersectionObserver(handleScroll, {
        threshold,
      })
      observer.observe(node);
      return () => observer && observer.disconnect();
    };
  }, [handleScroll])
}