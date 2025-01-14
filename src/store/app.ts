import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ThemeOptions } from "../themes";
import { ThemeColors } from "../themes/colors/base";
// import type {} from "@redux-devtools/extension"; // required for devtools typing

interface AppState {
  // Theming
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
  toggleTheme: () => void;
  colorMode: ThemeColors;
  setColorMode: (colorMode: ThemeColors) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    theme: "dark",
    setTheme: (theme) => set(() => ({ theme })),
    toggleTheme: () =>
      set((state) => ({
        theme: state.theme === "light" ? "dark" : "light",
      })),
    colorMode: "cyan",
    setColorMode: (colorMode) => set(() => ({ colorMode })),
  }))
);
