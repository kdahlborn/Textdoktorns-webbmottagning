import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import i18next from '../i18n';

const languages = ['sv', 'en', 'de', 'es', 'fr', 'ru'];

export const useLanguageSync = () => {
    const { lang } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!lang) return;

        if (languages.includes(lang)) {
            i18next.changeLanguage(lang);
        } else {
            navigate('/sv', { replace: true });
        }
    }, [lang, navigate]);
};
