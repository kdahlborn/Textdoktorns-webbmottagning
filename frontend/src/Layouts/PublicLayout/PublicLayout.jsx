import './publicLayout.css';
import { Outlet, useLocation, useParams } from 'react-router';
import Header from '../../components/public/Header/Header';
import { useLanguageSync } from '../../hooks/useLanguageSync';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';
import { useLanguageLinksStore } from '../../stores/useLanguageLinksStore';
import useScrollToTop from '../../hooks/useScrollToTop';
import Seo from '../../components/public/Seo/Seo';
import { useTranslation } from 'react-i18next';

const PublicLayout = () => {
    // SEO
    const { language } = useParams();
    const location = useLocation();
    const pageName = location.pathname.endsWith('/about')
        ? 'about'
        : location.pathname.endsWith('/contact')
          ? 'contact'
          : 'home';
    const { t } = useTranslation();
    const canonical = `${window.location.origin}${location.pathname}`;
    const languages = ['sv', 'en', 'de', 'es', 'fr', 'ru'];

    const getLanguageUrl = (lang) => {
        const path = location.pathname.replace(`/${language}`, `/${lang}`);

        return `${window.location.origin}${path}`;
    };

    const alternateLinks = languages.map((lang) => ({
        lang,
        url: getLanguageUrl(lang),
    }));

    // API
    // pages
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    // language links
    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const fetchLanguageLinks = useLanguageLinksStore(
        (state) => state.fetchLanguageLinks,
    );
    // GET pages & language links
    useEffect(() => {
        if (pages.length === 0) fetchPages();
        if (languageLinks.length === 0) fetchLanguageLinks();
    }, [pages.length, languageLinks.length, fetchPages, fetchLanguageLinks]);

    // HOOKS
    useLanguageSync();
    useScrollToTop();

    return (
        <>
            <Seo
                title={t(`${pageName}.seo.title`)}
                description={t(`${pageName}.seo.description`)}
                language={language}
                canonical={canonical}
                languages={alternateLinks}
            />

            <Header />

            <Outlet />
        </>
    );
};

export default PublicLayout;
