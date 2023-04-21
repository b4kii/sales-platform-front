import CartButton from "../Cart/CartButton";
import Searchbar from "./Searchbar";
import Button from "../Button";
import ProfileButton from "../Profile/ProfileButton";
import useLoginModalStore from "../../hooks/useLoginModalStore";

const Navbar = () => {
  const loginModalStore = useLoginModalStore()

  return (
    <nav
      className="
        fixed
        top-0
        z-10
        flex
        w-full
        items-center
        justify-between
        gap-8
        bg-slate-200
        px-2
        py-6
        dark:bg-slate-800
      "
    >
      <div
        className="
          flex-grow-1
          flex-shrink-2
          w-full
        "
      >
        <div>logo</div>
      </div>
      <div
        className="
          flex-grow-2
          flex-shrink-1
          w-full
        "
      >
        <Searchbar />
      </div>
      <div
        className="
          flex-grow-1
          flex-shrink-1
          flex
          w-full
          justify-end
          gap-4
        "
      >
        <Button
          label="Sign Up"
          secondary
        />
        <Button label="Sign In" onClick={loginModalStore.onOpen} />
        <CartButton />
        <ProfileButton />
      </div>
    </nav>
  );
};

export default Navbar;
