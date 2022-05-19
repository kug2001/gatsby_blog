import { EffectCallback, useEffect, useRef } from 'react';

export default function useEffectOnce(effect: EffectCallback) {
  const destroyFunc = useRef<void | any>();
  const calledOnce = useRef<boolean>(false);
  const renderAfterCalled = useRef<boolean>(false);

  if(calledOnce.current) {
    renderAfterCalled.current = true;
  }

  useEffect(()=> {
    if(renderAfterCalled.current) {
      return;
    }
    calledOnce.current = true;
    destroyFunc.current = effect();
    return () => {
      if(!renderAfterCalled.current) {
        return;
      }
      if(destroyFunc.current) {
        destroyFunc.current();
      }
    }
  }, [])
}