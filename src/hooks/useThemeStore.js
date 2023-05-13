import { create } from "zustand";

const theme = localStorage.getItem("market-theme");
const isLight = theme === "light";

const useThemeStore = create(set => ({
  isLight: isLight,
  toggleTheme: () => set((state) => ({ isLight: !state.isLight})),
}));

export default useThemeStore;