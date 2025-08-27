import { create } from "zustand";

type AuthStoreType = {
  id: string | null;
  setId: (id: string) => void;
  username: string | null;
  setUserName: (username: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
  access: string | null;
  setAccess: (token: string) => void;
  refresh: string | null;
  setRefresh: (token: string) => void;
  reset: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  id: localStorage.getItem("id"),
  setId: (id: string) => {
    set({ id });
    localStorage.setItem("id", id);
  },
  username: localStorage.getItem("username"),
  setUserName: (username: string) => {
    set({ username });
    localStorage.setItem("username", username);
  },
  email: localStorage.getItem("email"),
  setEmail: (email: string) => {
    set({ email });
    localStorage.setItem("email", email);
  },
  access: localStorage.getItem("access"),
  setAccess: (token: string) => {
    set({ access: token });
    localStorage.setItem("access", token);
  },
  refresh: localStorage.getItem("refresh"),
  setRefresh: (token: string) => {
    set({ refresh: token });
    localStorage.setItem("refresh", token);
  },
  reset: () => {
    set({
      id: null,
      username: null,
      email: null,
      access: null,
      refresh: null,
    });
    localStorage.clear();
  },
}));

export default useAuthStore;
