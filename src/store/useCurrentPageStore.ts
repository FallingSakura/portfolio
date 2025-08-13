import { create } from "zustand";
type CurrentPageStore = {
  currentPage: number;
  setCurrentPage: (arg: number) => void;
};
export const useCurrentPageStore = create<CurrentPageStore>((set) => ({
  currentPage: 0,
  setCurrentPage: (arg: number) => set({ currentPage: arg }),
}));
