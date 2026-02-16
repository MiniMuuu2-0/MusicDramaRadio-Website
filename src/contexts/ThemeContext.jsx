import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    console.log('Toggle chiamato, isDark attuale:', isDark)
    console.log('Classi HTML prima:', document.documentElement.classList.toString())
    
    if (isDark) {
      // Passa a light
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
      console.log('Passato a light mode')
    } else {
      // Passa a dark
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
      console.log('Passato a dark mode')
    }
    
    console.log('Classi HTML dopo:', document.documentElement.classList.toString())
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}