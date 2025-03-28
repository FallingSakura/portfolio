import { useEffect, useRef } from 'react'
export const useDebouncedResizeObserver = (
  callback: () => void,
  options: {
    delay?: number
    ref: React.RefObject<HTMLElement | null>
  } = { delay: 100, ref: { current: null } }
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    const target = options.ref.current
    if (!target) return
    const handleResize: ResizeObserverCallback = () => {
      if (timerRef.current) clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        if (!options.ref.current) return
        callback()
      }, options.delay)
    }
    const observer = new ResizeObserver(handleResize)
    observer.observe(target)

    return () => {
      observer.disconnect()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [callback, options.delay, options.ref])
  return
}
