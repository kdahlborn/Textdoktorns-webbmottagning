import './publicLayout.css';
import { Outlet } from 'react-router';
import Header from '../../components/public/Header/Header';
import { useLanguageSync } from '../../hooks/useLanguageSync';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';
import { useLanguageLinksStore } from '../../stores/useLanguageLinksStore';

const PublicLayout = () => {
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const fetchLanguageLinks = useLanguageLinksStore(
        (state) => state.fetchLanguageLinks,
    );

    useLanguageSync();

    useEffect(() => {
        if (pages.length === 0) fetchPages();
        if (languageLinks.length === 0) fetchLanguageLinks();
    }, [pages.length, languageLinks.length, fetchPages, fetchLanguageLinks]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;
