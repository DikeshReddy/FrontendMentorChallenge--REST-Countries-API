import { create } from "zustand";

interface storetype {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Mode = create<storetype>()((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
