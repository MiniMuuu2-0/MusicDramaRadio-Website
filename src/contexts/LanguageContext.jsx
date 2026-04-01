import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const LanguageContext = createContext()

const STORAGE_KEYS = {
  consent: 'mdr_cookie_consent',
  language: 'mdr_language',
  theme: 'mdr_theme'
}

const VALID_LANGUAGES = ['it', 'en']
const DEFAULT_LANGUAGE = 'it'
const PREFERENCES_CONSENT = 'preferences'
const ESSENTIAL_CONSENT = 'essential'

function readStorage(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Ignore storage failures and keep preferences in memory only.
  }
}

function removeStorage(key) {
  try {
    window.localStorage.removeItem(key)
  } catch {
    // Ignore storage failures and keep preferences in memory only.
  }
}

function getInitialConsent() {
  const savedConsent = readStorage(STORAGE_KEYS.consent)

  if (savedConsent === PREFERENCES_CONSENT || savedConsent === ESSENTIAL_CONSENT) {
    return savedConsent
  }

  return null
}

function getInitialLanguage() {
  const savedConsent = getInitialConsent()
  const savedLanguage = readStorage(STORAGE_KEYS.language)

  if (savedConsent === PREFERENCES_CONSENT && VALID_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage
  }

  return DEFAULT_LANGUAGE
}

function getInitialTheme() {
  const savedConsent = getInitialConsent()
  const savedTheme = readStorage(STORAGE_KEYS.theme)

  if (savedConsent === PREFERENCES_CONSENT) {
    return savedTheme === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function hasStoredLanguageChoice() {
  const savedConsent = getInitialConsent()
  const savedLanguage = readStorage(STORAGE_KEYS.language)
  return savedConsent === PREFERENCES_CONSENT && VALID_LANGUAGES.includes(savedLanguage)
}

export function LanguageProvider({ children }) {
  const [cookieConsent, setCookieConsent] = useState(getInitialConsent)
  const [language, setLanguage] = useState(getInitialLanguage)
  const [isDark, setIsDark] = useState(getInitialTheme)
  const [hasChosenLanguage, setHasChosenLanguage] = useState(hasStoredLanguageChoice)
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(() => getInitialConsent() === null)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const persistTheme = useCallback((nextIsDark) => {
    writeStorage(STORAGE_KEYS.theme, nextIsDark ? 'dark' : 'light')
  }, [])

  const persistLanguage = useCallback((nextLanguage) => {
    writeStorage(STORAGE_KEYS.language, nextLanguage)
  }, [])

  const selectLanguage = useCallback((nextLanguage) => {
    if (!VALID_LANGUAGES.includes(nextLanguage)) {
      return
    }

    setLanguage(nextLanguage)
    setHasChosenLanguage(true)

    if (cookieConsent === PREFERENCES_CONSENT) {
      persistLanguage(nextLanguage)
    }
  }, [cookieConsent, persistLanguage])

  const toggleTheme = useCallback(() => {
    setIsDark((currentValue) => {
      const nextValue = !currentValue

      if (cookieConsent === PREFERENCES_CONSENT) {
        persistTheme(nextValue)
      }

      return nextValue
    })
  }, [cookieConsent, persistTheme])

  const updateCookieConsent = useCallback((nextConsent) => {
    if (nextConsent !== PREFERENCES_CONSENT && nextConsent !== ESSENTIAL_CONSENT) {
      return
    }

    setCookieConsent(nextConsent)
    setIsCookieBannerVisible(false)
    writeStorage(STORAGE_KEYS.consent, nextConsent)

    if (nextConsent === PREFERENCES_CONSENT) {
      persistLanguage(language)
      persistTheme(isDark)
      return
    }

    removeStorage(STORAGE_KEYS.language)
    removeStorage(STORAGE_KEYS.theme)
  }, [isDark, language, persistLanguage, persistTheme])

  const openCookiePreferences = useCallback(() => {
    setIsCookieBannerVisible(true)
  }, [])

  const closeCookiePreferences = useCallback(() => {
    setIsCookieBannerVisible(false)
  }, [])

  const value = useMemo(
    () => ({
      cookieConsent,
      closeCookiePreferences,
      hasChosenLanguage,
      isCookieBannerVisible,
      isDark,
      language,
      openCookiePreferences,
      selectLanguage,
      toggleTheme,
      updateCookieConsent
    }),
    [
      closeCookiePreferences,
      cookieConsent,
      hasChosenLanguage,
      isCookieBannerVisible,
      isDark,
      language,
      openCookiePreferences,
      selectLanguage,
      toggleTheme,
      updateCookieConsent
    ]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
