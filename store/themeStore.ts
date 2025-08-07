import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
    theme: "light" | "dark";
    isDarkModeEnabled: boolean;
};

export type Actions = {
    toggleTheme: () => void;
}

type ThemeStore = State & Actions;

const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme: "dark",
            isDarkModeEnabled: true,
            toggleTheme: () => {
                const { isDarkModeEnabled } = get();
                set({isDarkModeEnabled: !isDarkModeEnabled, theme: isDarkModeEnabled ? "dark" : "light"})
            }
        }),
        {
            name: "theme-storage",
        }
    )
)

export default useThemeStore;