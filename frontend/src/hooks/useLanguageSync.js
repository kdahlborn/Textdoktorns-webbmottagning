import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import i18next from '../i18n';

const languages = ['sv', 'en', 'de', 'es', 'fr', 'ru'];

export const useLanguageSync = () => {
    const { language } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!language) return;

        if (languages.includes(language)) {
            i18next.changeLanguage(language);
        } else {
            navigate('/sv', { replace: true });
        }
    }, [language, navigate]);
};
