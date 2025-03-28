import '@/styles/toggle-button.css'
import React from 'react'
import { useToggleStore } from '../../store/useToggleStore'

const ToggleButton = React.memo(() => {
  const togglNav = useToggleStore((state) => state.togglNav)
  const toggle = useToggleStore((state) => state.toggle)
  return (
    <div className="toggle-button" onClick={toggle}>
      <span className={`toggle-bar ${togglNav ? 'bar-hidden' : 'bar1'}`}></span>
      <span
        className={`toggle-bar ${togglNav ? 'bar-rotate-45' : 'bar2'}`}
      ></span>
      <span
        className={`toggle-bar ${togglNav ? 'bar-rotate--45' : 'bar3'}`}
      ></span>
    </div>
  )
})

export default ToggleButton
