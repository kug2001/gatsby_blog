import React, { RefObject, useEffect, useState, } from 'react';

interface option extends IntersectionObserverInit {
  freezeOnceVisible: boolean;
}


export default function useIntersectionObserver(
  element: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: option
): IntersectionObserverEntry | undefined {

  const [ entry, setEntry ] = useState<IntersectionObserverEntry | undefined>();
  
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  }

  useEffect(()=> {
    const node = element?.current;
    const hasIOSupport = !!window.IntersectionObserver; // 이중 부정 사용

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold,  root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [element, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry;
}