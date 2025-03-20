import '@/styles/toggle-button.css'
import React from 'react'

const ToggleButton = React.memo(
  ({ togglNav, toggle }: { togglNav: boolean; toggle: () => void }) => {
    console.log('ToggleButton')
    return (
      <div className="toggle-button" onClick={toggle}>
        <span
          className={`toggle-bar ${togglNav ? 'bar-hidden' : 'bar1'}`}
        ></span>
        <span
          className={`toggle-bar ${togglNav ? 'bar-rotate-45' : 'bar2'}`}
        ></span>
        <span
          className={`toggle-bar ${togglNav ? 'bar-rotate--45' : 'bar3'}`}
        ></span>
      </div>
    )
  }
)

export default ToggleButton
