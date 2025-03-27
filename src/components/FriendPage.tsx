import '@/styles/friend-page.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import React from 'react'
import FriendCard from './FriendCard'
import { friends } from '../data/friends'

const COLUMN_WIDTH = 200
const gap = 16
const FriendPage = React.memo(() => {
  const container_ref = useRef<HTMLDivElement>(null)
  const page_ref = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>(
    Array(friends.length).fill(null)
  )
  const [columns, setColumns] = useState<number[]>([])
  const calculateColumns = useCallback(() => {
    if (container_ref.current) {
      // const width = container_ref.current.clientWidth
      const width = window.innerWidth * 0.8
      const columnCount = Math.max(
        1,
        Math.floor(width / (COLUMN_WIDTH + gap)),
        Math.floor((width * 9) / 8 / (COLUMN_WIDTH + gap))
      )
      setColumns(Array(columnCount).fill(0))
    }
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      calculateColumns()
    })
    if (page_ref.current) {
      observer.observe(page_ref.current)
      calculateColumns()
    }
    return () => {
      observer.disconnect()
    }
  }, [calculateColumns])
  useEffect(() => {
    console.log('columns changed')
    const columnHeights = [...columns]
    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        const { offsetHeight } = cardRef
        const column = columnHeights.indexOf(Math.min(...columnHeights))
        const left = column * (COLUMN_WIDTH + gap)
        const top = columnHeights[column]
        columnHeights[column] += offsetHeight + gap

        cardRef.style.position = 'absolute'
        cardRef.style.width = `${COLUMN_WIDTH}px`
        cardRef.style.left = `${left}px`
        cardRef.style.top = `${top}px`
        cardRef.style.opacity = '1'
      }
    })
    const containerHeight = Math.max(Math.max(...columnHeights) - gap, 720)
    if (container_ref.current) {
      container_ref.current.style.height = `${containerHeight}px`
      container_ref.current.style.width = `${
        (COLUMN_WIDTH + gap) * columns.length - gap
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
