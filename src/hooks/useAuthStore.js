import { create } from "zustand";

const initialAuthState = {
  isLogged: false,
  token: "",
  roles: [],
};

const useAuthStore = create(set => ({
  authState: initialAuthState,
  setAuthState: newState =>
    set(state => ({ authState: { ...state.authState, newState } })),
}));

export default useAuthStore;
