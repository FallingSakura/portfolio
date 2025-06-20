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
  const [isHovered, setIsHovered] = useState(false)
  const [focus, setFocus] = useState('')
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

  // reset the columns to trigger the useEffect and calculate the layout
  const calculateColumns = useCallback((offset?: number) => {
    if (container_ref.current && page_ref.current) {
      gap = 16
      column_width = 200
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
    if (useIsMobileStore.getState().isMobile) return
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
      console.log('haha')
      calculateColumns(200)
    }
  }, [togglNav, calculateColumns])
  /**
   * @description:
   * 1. useDebouncedResizeObserver is a custom hook that uses the ResizeObserver API to observe the page_ref.current element.
   * 2. The callback function is calculateColumns, which is called when the page_ref.current element is resized.
   * 3. The delay is set to 500ms, and the freeze is set to resizeFreeze.current.
   * 4. The freeze is set to resizeFreeze.current, which is a ref that is set to true when the page is resized.
   */
  useDebouncedResizeObserver(calculateColumns, {
    ref: page_ref,
    delay: 300,
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
    console.log('recalculated.')

    const columnHeights = [...columns]
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        // The change in width will affect the height.
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

      <div
        className={`apply ${isHovered || focus !== '' ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`apply-wrapper`}>
          <div className="front-side">
            <h2>Apply for a friend link?</h2>
          </div>
          <div className="back-side">
            <form>
              <label
                htmlFor="name"
                style={{
                  color: focus === 'name' ? 'var(--color-primary)' : ''
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Nick Name"
                onFocus={() => {
                  setFocus('name')
                }}
                onBlur={() => {
                  setFocus('')
                }}
              />
              <label
                htmlFor="github"
                style={{
                  color: focus === 'github' ? 'var(--color-primary)' : ''
                }}
              >
                Github
              </label>
              <input
                type="text"
                id="github"
                name="github"
                placeholder="Your Github Name"
                onFocus={() => {
                  setFocus('github')
                }}
                onBlur={() => {
                  setFocus('')
                }}
              />
              <label
                htmlFor="website"
                style={{
                  color: focus === 'website' ? 'var(--color-primary)' : ''
                }}
              >
                Website
              </label>

              <input
                type="text"
                id="website"
                name="website"
                placeholder="Your Website URL"
                onFocus={() => {
                  setFocus('website')
                }}
                onBlur={() => {
                  setFocus('')
                }}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
})

export default FriendPage
