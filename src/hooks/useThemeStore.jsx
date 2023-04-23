import { create } from "zustand";

const theme = localStorage.getItem("market-theme");

const useThemeStore = create(set => ({
  isLight: theme ? theme === "light" ? true : false : true,
  toggleTheme: () => set((state) => ({ isLight: !state.isLight})),
}));

export default useThemeStore;