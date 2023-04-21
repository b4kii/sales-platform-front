import useThemeStore from "../hooks/useThemeStore";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const themeStore = useThemeStore();

  return (
    <button
      className="fixed bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white dark:bg-slate-200 dark:text-black shadow-xl shadow-gray-300"
      onClick={themeStore.toggleTheme}
    >
      {themeStore.isLight ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
};

export default ThemeButton;
