import { useRef, useCallback } from "react";
import { useDebouncedResizeObserver } from "./useDeboucedResizeObserver";
import { useIsMobileStore } from "../store/useIsMobileStore";
export const useMobile = () => {
  const setIsMobile = useIsMobileStore((state) => state.setIsMobile);
  const ref = useRef<HTMLElement>(document.documentElement);
  const handleResize = useCallback(() => {
    if (ref.current.offsetWidth <= 1024) setIsMobile(true);
    else setIsMobile(false);
  }, [setIsMobile]);
  useDebouncedResizeObserver(handleResize, { delay: 1000, ref: ref });
};
