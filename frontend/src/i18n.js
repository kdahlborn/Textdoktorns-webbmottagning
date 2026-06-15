import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import sv from './locales/sv.json';
import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';

i18next.use(initReactI18next).init({
    resources: {
        sv: { translation: sv },
        en: { translation: en },
        de: { translation: de },
        es: { translation: es },
        fr: { translation: fr },
        ru: { translation: ru },
    },

    fallbackLng: 'sv',

    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
