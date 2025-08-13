import { useEffect, useRef } from "react";
export const useDebouncedResizeObserver = (
  callback: () => void,
  options: {
    delay?: number;
    freeze?: React.MutableRefObject<boolean>;
    ref: React.RefObject<HTMLElement | null>;
  } = { delay: 100, freeze: { current: false }, ref: { current: null } },
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const target = options.ref.current;
    if (!target) return;
    const handleResize: ResizeObserverCallback = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (options.freeze?.current) return;
      timerRef.current = setTimeout(() => {
        if (!options.ref.current) return;
        callback();
      }, options.delay);
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(target);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [callback, options.delay, options.ref, options.freeze]);
  return;
};
