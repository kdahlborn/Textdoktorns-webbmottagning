import { useLocation, useNavigate, useParams } from 'react-router';

export const useLanguage = () => {
    const { language } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const changeLanguage = (newLanguage) => {
        if (newLanguage === language) return;

        navigate(location.pathname.replace(`/${language}`, `/${newLanguage}`));
    };

    return { language, changeLanguage };
};
