import { createContext, ReactNode, useState } from 'react'

type Theme = 'dark' | 'light'

interface IThemeContext {
  theme: Theme
  changeTheme?: (newTheme: Theme) => void
}
export const ThemeContext = createContext<IThemeContext>({ theme: 'light' })

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const changeTheme = (newTheme: Theme): void => {
    setTheme(newTheme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}
