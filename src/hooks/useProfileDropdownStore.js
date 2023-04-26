import { create } from "zustand";

const useProfileDropdownStore = create(set => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({isOpen: !state.isOpen})),
  onOpen: () => set(() => ({isOpen: true})),
  onClose: () => set(() => ({isOpen: false})),
}));

export default useProfileDropdownStore;
