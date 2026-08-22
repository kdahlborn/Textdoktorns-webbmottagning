import './publicLayout.css';
import { Outlet } from 'react-router';
import Header from '../../components/public/Header/Header';
import { useLanguageSync } from '../../hooks/useLanguageSync';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';
import { useLanguageLinksStore } from '../../stores/useLanguageLinksStore';
import useScrollToTop from '../../hooks/useScrollToTop';
import { useFaqStore } from '../../stores/useFaqStore';

const PublicLayout = () => {
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const fetchLanguageLinks = useLanguageLinksStore(
        (state) => state.fetchLanguageLinks,
    );

    const faqs = useFaqStore((state) => state.faqs);
    const fetchFaqs = useFaqStore((state) => state.fetchFaqs);

    useLanguageSync();
    useScrollToTop();

    useEffect(() => {
        if (pages.length === 0) fetchPages();
        if (languageLinks.length === 0) fetchLanguageLinks();
        if (faqs.length === 0) fetchFaqs();
    }, [
        pages.length,
        languageLinks.length,
        faqs.length,
        fetchPages,
        fetchLanguageLinks,
        fetchFaqs,
    ]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;
