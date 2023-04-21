import { useCallback } from "react";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-screen
        h-screen
        z-50
        grid
        bg-neutral-800
        bg-opacity-50
        place-content-center
      "
    >
      <div className="w-12 h-12 bg-green-300"></div>
    </div>
  );
};

export default Modal;
