import { Outlet } from "react-router-dom";
import useThemeStore from "../hooks/useThemeStore";
import { lazy, Suspense } from "react";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ThemeButton from "../components/ThemeButton";
import LoginModal from "../components/Modals/LoginModal";
import SignupModal from "../components/Modals/SignupModal";

const Layout = () => {
  const themeStore = useThemeStore();

  return (
  // TODO: Loading component
    <Suspense fallback={<div>Layout loading...</div>}>
      <div className={`${themeStore.isLight ? "light" : "dark"}`}>
        <LoginModal />
        <SignupModal />
        <ThemeButton />
        <Navbar />
        <div className="pt-[10rem] lg:pt-[6rem]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
