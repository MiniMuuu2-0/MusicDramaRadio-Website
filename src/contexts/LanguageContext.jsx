import { createContext, useEffect } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const language = 'it'

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  )
}
