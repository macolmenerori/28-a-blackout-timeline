import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//Import all translation files
import English from './locales/en.json';
import Spanish from './locales/es.json';

const resources = {
  en: {
    translation: English
  },
  es: {
    translation: Spanish
  }
};

i18next.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'es' // Default language Spanish
});

export default i18next;
