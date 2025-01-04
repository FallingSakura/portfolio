import { useEffect } from 'react'

export const usePageObserver = (
  containerRef: React.RefObject<HTMLElement>,
  setCurrentPage: (pageIndex: number) => void
) => {
  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const observerOptions = {
      root: container,
      rootMargin: '0px',
      threshold: 0.5 // 页面至少有 50% 可见时触发
    }

    // 回调函数在交叉比例超过 threshold 和初始化时触发，所以需要判断 isIntersecting
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const pageIndex = Number(target.dataset.index)
          setCurrentPage(pageIndex)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const pageElements = Array.from(container.children) as HTMLElement[]
    pageElements.forEach((page, index) => {
      page.dataset.index = index.toString()
      observer.observe(page)
    })

    return () => {
      pageElements.forEach((page) => observer.unobserve(page))
      observer.disconnect()
    }
  }, [containerRef, setCurrentPage])
}
