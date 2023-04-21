import { Outlet } from 'react-router-dom';
import useThemeStore from '../hooks/useThemeStore';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ThemeButton from '../components/ThemeButton';
import Modal from '../components/Modal';


const Layout = () => {
  // TODO: Handle save theme to local storage
  const themeStore = useThemeStore();

  return (
    <div className={`${themeStore.isLight ? "" : "dark"}`}>
      <Modal />
      <ThemeButton />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;