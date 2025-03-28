import '@/styles/friend-page.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useDebouncedResizeObserver } from '../hooks/useDeboucedResizeObserver'
import { useToggleStore } from '../store/useToggleStore'
import { useMobile } from '../hooks/useMobile'
import { useIsMobileStore } from '../store/useIsMobileStore'
import React from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'

let column_width = 200
let gap = 16
const PADDING = 75
const FriendPage = React.memo(() => {
  const isFirstRender = useRef(true)
  const container_ref = useRef<HTMLDivElement>(null)
  const page_ref = useRef<HTMLDivElement>(null)
  const timeRef = useRef<NodeJS.Timeout | null>(null)
  const resizeFreeze = useRef(false)
  const cardRefs = useRef<Array<HTMLDivElement | null>>(
    Array(friends.length).fill(null)
  )
  const [columns, setColumns] = useState<number[]>([])
  const togglNav = useToggleStore((state) => state.togglNav)
  useMobile()
  const isMobile = useIsMobileStore((state) => state.isMobile)

  // reset the columns to trigger the useEffect and calculate the layout
  const calculateColumns = useCallback((offset?: number) => {
    if (container_ref.current && page_ref.current) {
      let factor = 0.8
      let width = page_ref.current.offsetWidth
      if (offset) {
        width += offset
      }
      if (width <= 768) {
        gap = 8
        column_width = 175
        factor = 0.9
      }
      const columnCount = Math.max(
        1,
        Math.floor((width * factor + gap) / (column_width + gap)),
        Math.floor((width * (factor + 0.1) + gap) / (column_width + gap))
      )
      setColumns(Array(columnCount).fill(PADDING))
    }
  }, [])
  useEffect(() => {
    if (isMobile) return
    const freeze = () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
      resizeFreeze.current = true
      timeRef.current = setTimeout(() => {
        resizeFreeze.current = false
      }, 550)
    }

    if (togglNav) {
      freeze()
      calculateColumns(-200)
    } else if (isFirstRender.current) {
      isFirstRender.current = false
      return
    } else {
      freeze()
      calculateColumns(200)
    }
  }, [isMobile, togglNav, calculateColumns])
  /**
   * @description:
   * 1. useDebouncedResizeObserver is a custom hook that uses the ResizeObserver API to observe the page_ref.current element.
   * 2. The callback function is calculateColumns, which is called when the page_ref.current element is resized.
   * 3. The delay is set to 500ms, and the freeze is set to resizeFreeze.current.
   * 4. The freeze is set to resizeFreeze.current, which is a ref that is set to true when the page is resized.
   */
  useDebouncedResizeObserver(calculateColumns, {
    ref: page_ref,
    delay: 500,
    freeze: resizeFreeze
  })
  useEffect(() => {
    // second execution (after the font is loaded because the font size affects the layout)
    document.fonts.ready.then(() => {
      calculateColumns()
    })
  }, [calculateColumns])
  // calculate the layout
  useEffect(() => {
    if (columns.length === 0) return
    const columnHeights = [...columns]
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        // The change in width will affect the height.
        cardRef.style.width = `${column_width}px`
        cardRef.style.position = 'absolute'

        const { offsetHeight } = cardRef
        const column = columnHeights.indexOf(Math.min(...columnHeights))
        const left = column * (column_width + gap)
        const top = columnHeights[column]
        columnHeights[column] += offsetHeight + gap

        cardRef.style.left = `${left}px`
        cardRef.style.top = `${top}px`
      }
    })
    const containerHeight = Math.max(Math.max(...columnHeights), 720)
    if (container_ref.current) {
      container_ref.current.style.height = `${containerHeight}px`
      container_ref.current.style.width = `${
        (column_width + gap) * columns.length - gap
      }px`
    }
  }, [columns])
  return (
    <div className="friend" ref={page_ref} id="friend">
      <div className="friend-cards-container" ref={container_ref}>
        {friends.map((friend, index) => (
          <FriendCard
            {...friend}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            key={`${friend.name}${index}`}
          />
        ))}
      </div>
    </div>
  )
})

export default FriendPage
