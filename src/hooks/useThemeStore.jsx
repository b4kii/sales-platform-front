import { create } from "zustand";

const useThemeStore = create(set => ({
  isLight: true,
  toggleTheme: () => set((state) => ({ isLight: !state.isLight})),
}));

export default useThemeStore;