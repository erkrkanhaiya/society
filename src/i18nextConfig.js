import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './Assets/Locales/en/translation.json';
import translationSR from './Assets/Locales/sr/translation.json';
// import translationDE from './Assets/Locales/de/translation.json';
import translationAR from './Assets/Locales/ar/translation.json';
import translationEL from './Assets/Locales/el/translation.json';

const availableLanguages = ['en', 'sr', 'el', 'ar', 'de'];

const fallbackLng = ['en'];

const resources = {
  en: { translation: translationEN },
  sr: { translation: translationSR },
  el: { translation: translationEL },
  ar: { translation: translationAR },
  // de: { translation: translationDE },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;