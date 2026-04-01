import { useContext, useMemo } from 'react'
import { LanguageContext } from './languageContext'
import { ThemeContext } from './themeContext'

export function ThemeProvider({ children }) {
  const { isDark, toggleTheme } = useContext(LanguageContext)

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme
    }),
    [isDark, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
