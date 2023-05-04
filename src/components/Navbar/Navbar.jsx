import CartButton from "../Cart/CartButton";
import Searchbar from "./Searchbar";
import Button from "../Button";
import ProfileButton from "../Profile/ProfileButton";
import useLoginModalStore from "../../hooks/useLoginModalStore";
import useSignupModalStore from "../../hooks/useSignupModalStore";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const loginStore = useLoginModalStore();
  const signupStore = useSignupModalStore();

  const navRef = useRef(null);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= navRef.current.clientHeight) {
        setChange(true);
      } else {
        setChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-50 flex w-full flex-wrap items-center justify-between gap-4 ${
        change
          ? "bg-white dark:bg-slate-600"
          : "bg-slate-200 dark:bg-slate-700"
      } bg-slate-200 px-2 py-6 lg:flex-nowrap lg:gap-8`}
    >
      {/* Left */}
      <div className="grow-1 shrink-2 lg:w-full">
        <div className="flex gap-4">
          <Link to="/">Logo</Link>
        </div>
      </div>

      {/* Center */}
      <div className="grow-2 shrink-1 order-1 flex basis-full justify-center lg:-order-none lg:w-full lg:basis-0">
        <Searchbar />
      </div>
      {/* Right */}
      <div className="grow-1 shrink-2 lg:w-full ">
        <div className="flex justify-end gap-4 lg:hidden">
          <CartButton />
          <ProfileButton />
        </div>
        <div className="hidden w-full justify-end gap-4 lg:flex">
          <Button
            label="Sign Up"
            secondary
            onClick={signupStore.onOpen}
          />
          <Button
            label="Sign In"
            onClick={loginStore.onOpen}
          />
          <CartButton />
          <ProfileButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
