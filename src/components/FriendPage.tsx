import '@/styles/friend-page.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import React from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'

let column_width = 200
let gap = 16
const PADDING = 75
const FriendPage = React.memo(() => {
  const container_ref = useRef<HTMLDivElement>(null)
  const page_ref = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>(
    Array(friends.length).fill(null)
  )
  const [columns, setColumns] = useState<number[]>([])
  const calculateColumns = useCallback(() => {
    if (container_ref.current) {
      const width = window.innerWidth
      let factor = 0.8
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
    const observer = new ResizeObserver(() => {
      calculateColumns()
    })
    if (page_ref.current) {
      observer.observe(page_ref.current)
      const id = setTimeout(() => {
        calculateColumns()
      }, 500)
      return () => {
        observer.disconnect()
        clearTimeout(id)
      }
    }
  }, [calculateColumns])
  useEffect(() => {
    if (columns.length === 0) return
    const columnHeights = [...columns]
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        console.log(cardRef.offsetHeight)
        const { offsetHeight } = cardRef
        const column = columnHeights.indexOf(Math.min(...columnHeights))
        const left = column * (column_width + gap)
        const top = columnHeights[column]
        columnHeights[column] += offsetHeight + gap

        cardRef.style.position = 'absolute'
        cardRef.style.width = `${column_width}px`
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
