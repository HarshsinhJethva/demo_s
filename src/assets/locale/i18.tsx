import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './en.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  //   len: 'en',
  fallbackLng: 'en',
  resources: {
    en: English,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
