import { useContext } from 'react'
import { LanguageContext } from '../contexts/languageContext'

export const useLanguage = () => useContext(LanguageContext)
