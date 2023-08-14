import { create } from 'zustand'

export type Theme = 'dark' | 'light'

interface ThemeState {
  currentTheme: Theme
  updateTheme: (newTheme: Theme) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  currentTheme: 'dark',
  updateTheme: (newTheme: Theme) => set(() => ({ currentTheme: newTheme })),
}))
