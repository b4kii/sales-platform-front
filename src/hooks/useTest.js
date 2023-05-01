import { create } from "zustand";

const useTest = create((set) => ({
    isLogged: false,
    setIsLogged: (state) => set({isLogged: !state.isLogged})
}))

export default useTest;