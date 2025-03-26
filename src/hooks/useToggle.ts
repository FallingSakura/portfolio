import { useState, useCallback } from 'react'
export const useToggle = (initialState = false) => {
  const [togglNav, setTogglNav] = useState(initialState)

  const toggle = useCallback(() => {
    setTogglNav((prev) => !prev)
  }, [])
  return [togglNav, toggle] as const
}
