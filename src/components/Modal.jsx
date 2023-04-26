import { useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "./Button";

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
      onClick={handleClose}
      className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center backdrop-blur-md">
      <div
        className="
          relative
          mx-auto
          my-6
          h-full
          w-full
          lg:h-auto
          lg:w-3/6
          lg:max-w-3xl
        "
      >
        {/* Content */}
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="
            relative
            flex
            h-full
            w-full
            flex-col
            rounded-lg
            border-0
            shadow-md
            dark:bg-slate-700
            dark:shadow-slate-950
            lg:h-auto
            bg-white
          "
        >
          {/* Header */}
          <div
            className="
              flex
              items-center
              justify-between
              p-10
            "
          >
            <h2 className="text-3xl font-semibold text-purple-800 dark:text-white">
              {title}
            </h2>
            <button
              onClick={handleClose}
              className="
              ml-auto
              border-0
              p-1
              text-purple-800
              dark:text-white
              transition
              hover:opacity-70
              "
            >
              <AiOutlineCloseCircle size={40} />
            </button>
          </div>
            {/* body */}
            <div className="relative flex-auto p-10">{body}</div>
            {/* footer */}
            <div className="flex flex-col gap-2 p-10">
              {footer}
              <Button
                onClick={handleSubmit}
                primary
                label={actionLabel}
                disabled={disabled}
                className="w-full"
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
