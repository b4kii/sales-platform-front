import { create } from "zustand";

const useSignupModalStore = create(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignupModalStore;
