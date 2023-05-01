import useLoginModalStore from "../../hooks/useLoginModalStore";
import useSignupModalStore from "../../hooks/useSignupModalStore";
import useProfileDropdownStore from "../../hooks/useProfileDropdownStore";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button";
import { Link } from "react-router-dom";
import {  useEffect, useRef } from "react";

const ProfileButtonDropdown = () => {
  const loginStore = useLoginModalStore();
  const signupStore = useSignupModalStore();
  const profileDropdownStore = useProfileDropdownStore();
  const dropDownRef = useRef(null);

  useEffect(() => {
    if (profileDropdownStore.isOpen) {
      const handleClick = event => {
        if (dropDownRef?.current.contains(event.currentTarget)) {
          return;
        }
        profileDropdownStore.onClose();
      };

      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    }
  }, [profileDropdownStore.isOpen]);

  return (
    <Dropdown
      isOpen={profileDropdownStore.isOpen}
      className="right-[.15rem] top-[4rem] "
      ref={dropDownRef}
    >
      <Link to="/">My profile</Link>
      <Link to="/">Orders</Link>
      <Button
        label="Sign Up"
        secondary
        onClick={signupStore.onOpen}
        className="w-full lg:hidden"
      />
      <Button
        label="Sign In"
        onClick={loginStore.onOpen}
        className="w-full lg:hidden"
      />
      <Button
        label="Log out"
        className="hidden w-full lg:block"
      />
    </Dropdown>
  );
};

export default ProfileButtonDropdown;
