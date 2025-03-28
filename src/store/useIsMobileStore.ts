import { create } from 'zustand'

type IsMobileStore = {
  isMobile: boolean
  setIsMobile: (arg: boolean) => void
}

export const useIsMobileStore = create<IsMobileStore>((set) => ({
  isMobile: window.innerWidth <= 1024,
  setIsMobile: (arg: boolean) => set(() => ({ isMobile: arg }))
}))
