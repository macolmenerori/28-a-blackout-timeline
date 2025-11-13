import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'es' | 'en';

interface I18nContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'app-language';

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const { i18n } = useTranslation();

  // Get initial language from localStorage or i18n current language
  const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
    // Fall back to current i18n language or default to 'es'
    const currentLang = i18n.language;
    return currentLang.startsWith('es') ? 'es' : currentLang.startsWith('en') ? 'en' : 'es';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Change language and persist to localStorage
  const changeLanguage = useCallback(
    (lang: Language) => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
      localStorage.setItem(STORAGE_KEY, lang);
    },
    [i18n]
  );

  // Initialize language on mount
  useEffect(() => {
    const initialLang = getInitialLanguage();
    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    language,
    changeLanguage
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Custom hook to use the I18n context
export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
