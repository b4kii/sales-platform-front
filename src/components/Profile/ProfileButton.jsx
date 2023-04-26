import { RxAvatar } from "react-icons/rx";
import ProfileButtonDropdown from "./ProfileButtonDropdown";
import useProfileDropdownStore from "../../hooks/useProfileDropdownStore";
import { useRef } from "react";

const ProfileButton = () => {
  const profileDropdownStore = useProfileDropdownStore();
  const buttonRef = useRef(null);

  const handleClick = (event) => {
    event.stopPropagation();
    profileDropdownStore.toggleOpen();
  };

  return (
    <div
      className="relative grid place-content-center"
      ref={buttonRef}
    >
      <button
        onClick={handleClick}
        className="
      "
      >
        <RxAvatar
          size={50}
          className="text-purple-800 hover:text-purple-400 dark:text-white"
        />
        {/* TODO: Fetch image from users  */}
        {/* <img src="" alt="" /> */}
      </button>
      <ProfileButtonDropdown buttonRef={buttonRef} />
    </div>
  );
};

export default ProfileButton;
