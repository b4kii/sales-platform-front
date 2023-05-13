import useThemeStore from "../hooks/useThemeStore";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect } from "react";

const ThemeButton = () => {
  const themeStore = useThemeStore();

  useEffect(() => {
    let  theme = localStorage.getItem("market-theme");
    if (!theme) {
      localStorage.setItem("market-theme", "light");
    } else {
      theme = themeStore.isLight ? "light" : "dark";
      localStorage.setItem("market-theme", theme);
    }
  }, [themeStore.isLight]);

  return (
    <button
      className="fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-sm shadow-black dark:bg-slate-200 dark:text-black"
      onClick={themeStore.toggleTheme}
    >
      {themeStore.isLight ? (
        <BsFillMoonStarsFill />
      ) : (
        <BsFillSunFill />
      )}
    </button>
  );// 
};

export default ThemeButton;
