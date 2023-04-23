import useThemeStore from "../hooks/useThemeStore";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect } from "react";

const ThemeButton = () => {
  const themeStore = useThemeStore();

  useEffect(() => {
    const theme = localStorage.getItem("market-theme");
    if (!theme) {
      localStorage.setItem("market-theme", "light");
    }

    if (themeStore.isLight) {
      localStorage.setItem("market-theme", "light");
    } else {
      localStorage.setItem("market-theme", "dark");
    }

    console.log(theme);
  }, [themeStore.isLight]);

  return (
    <button
      className="fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-sm shadow-black dark:bg-slate-200 dark:text-black"
      onClick={themeStore.toggleTheme}
      // onClick={handleClick}
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
