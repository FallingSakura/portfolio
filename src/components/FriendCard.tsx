import '@/styles/friend-card.css'
import { Friend } from '../types/friend'
import { useRef, useEffect, useState, forwardRef } from 'react'
import React from 'react'
const FriendCard = React.memo(forwardRef<HTMLDivElement, Friend>(
  props
  ref
) => {
  console.log('FriendCard')
  return (
    <div
      className={`friend-card ${isActive ? 'active' : ''}`}
      ref={setRef}
      onMouseOver={activate}
      onMouseLeave={deactivate}
    ></div>
  )
})
export default FriendCard
