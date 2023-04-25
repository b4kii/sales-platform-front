import { Outlet } from 'react-router-dom';
import useThemeStore from '../hooks/useThemeStore';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ThemeButton from '../components/ThemeButton';
import Modal from '../components/Modal';
import LoginModal from '../components/Modals/LoginModal';
import SingupModal from '../components/Modals/SignupModal';


const Layout = () => {
  // TODO: Handle save theme to local storage
  const themeStore = useThemeStore();

  return (
    <div className={`${themeStore.isLight ? "" : "dark"}`}>
      <LoginModal />
      <SingupModal />
      <ThemeButton />
      <Navbar />
      <div className="pt-[6rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;