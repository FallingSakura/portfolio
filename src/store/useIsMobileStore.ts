import { create } from "zustand";

type IsMobileStore = {
  isMobile: boolean;
  setIsMobile: (arg: boolean) => void;
};

export const useIsMobileStore = create<IsMobileStore>((set) => ({
  isMobile: false,
  setIsMobile: (arg: boolean) => set(() => ({ isMobile: arg })),
}));
