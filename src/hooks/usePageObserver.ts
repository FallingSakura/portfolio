import { useEffect } from 'react'

export const usePageObserver = (
  containerRef: React.RefObject<HTMLElement>,
  setCurrentPage: (pageIndex: number) => void,
  scrollFreeze: React.MutableRefObject<boolean>
) => {
  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5
      // trigger when at least 50% of the page is visible
    }

    // 回调函数在交叉比例超过 threshold 和初始化时触发，所以需要判断 isIntersecting
    // callback function will be triggered when the intersection ratio exceeds the threshold and when it is initialized, so we need to check isIntersecting
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !scrollFreeze.current) {
          const target = entry.target as HTMLElement
          const pageIndex = Number(target.dataset.index)
          setCurrentPage(pageIndex)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const pageElements = Array.from(container.children) as HTMLElement[]
    let minus = 0
    pageElements.forEach((page, index) => {
      // if page is absolute, it's not a page
      if (window.getComputedStyle(page).position === 'absolute') {
        minus++
        return
      }
      page.dataset.index = (index - minus).toString()
      observer.observe(page)
    })

    return () => {
      pageElements.forEach((page) => observer.unobserve(page))
      observer.disconnect()
    }
  }, [containerRef, setCurrentPage, scrollFreeze])
}
