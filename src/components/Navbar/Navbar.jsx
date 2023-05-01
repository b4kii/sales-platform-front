import CartButton from "../Cart/CartButton";
import Searchbar from "./Searchbar";
import Button from "../Button";
import ProfileButton from "../Profile/ProfileButton";
import useLoginModalStore from "../../hooks/useLoginModalStore";
import useSignupModalStore from "../../hooks/useSignupModalStore";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const loginStore = useLoginModalStore();
  const signupStore = useSignupModalStore();

  const navigate = useNavigate();

  return (
    <nav
      className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between gap-4 bg-slate-200 px-2 py-6 dark:bg-slate-700 lg:flex-nowrap lg:gap-8
      "
    >
      {/* Left */}
      <div className="grow-1 shrink-2 lg:w-full">
        <div className="flex gap-4">
          <Link to="/">Logo</Link>
        </div>
      </div>

      {/* Center */}
      <div className="grow-2 shrink-1 order-1 lg:-order-none basis-full lg:basis-0 flex justify-center lg:w-full">
        <Searchbar />
      </div>
      {/* Right */}
      <div className="grow-1 shrink-2 lg:w-full ">
        <div className="flex justify-end lg:hidden gap-4">
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