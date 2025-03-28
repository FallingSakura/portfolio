import { create } from 'zustand'

type ToggleStore = {
  togglNav: boolean
  toggle: () => void
}

export const useToggleStore = create<ToggleStore>((set) => ({
  togglNav: false,
  toggle: () => set((state) => ({ togglNav: !state.togglNav }))
}))
