import { create } from 'zustand'

type PauseStore = {
  paused: boolean
  toggle: () => void
}

export const useToggleStore = create<PauseStore>((set) => ({
  paused: false,
  toggle: () => set((state) => ({ paused: !state.paused }))
}))
