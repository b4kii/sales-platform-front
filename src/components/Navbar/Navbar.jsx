import CartButton from "../Cart/CartButton";
import Searchbar from "./Searchbar";
import Button from "../Button";
import ProfileButton from "../Profile/ProfileButton";
import useLoginModalStore from "../../hooks/useLoginModalStore";
import useSignupModalStore from "../../hooks/useSignupModalStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const loginStore = useLoginModalStore();
  const signupStore = useSignupModalStore();

  return (
    <nav
      className=" fixed top-0 z-50 flex w-full items-center justify-between gap-8 bg-slate-200 px-2 py-6 dark:bg-slate-700
      "
    >
      <div className=" flex-grow-1 flex-shrink-2 w-[50%]">
        <Link to="/">Logo</Link>
      </div>
      <div className=" flex-grow-2 flex-shrink-1 w-full">
        <Searchbar />
      </div>
      <div className=" flex-grow-1 flex-shrink-2 flex w-full justify-end gap-4 ">
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
    </nav>
  );
};

export default Navbar;
