import './adminLayout.css';
import { Outlet, useMatches } from 'react-router';
import Sidebar from '../../components/admin/Sidebar/Sidebar';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';
import { useFaqStore } from '../../stores/useFaqStore';
import { useLanguageLinksStore } from '../../stores/useLanguageLinksStore';
import MobileHeader from '../../components/admin/MobileHeader/MobileHeader';

const AdminLayout = () => {
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    const faqs = useFaqStore((state) => state.faqs);
    const fetchFaqs = useFaqStore((state) => state.fetchFaqs);

    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const fetchLanguageLinks = useLanguageLinksStore(
        (state) => state.fetchLanguageLinks,
    );

    useEffect(() => {
        if (pages.length === 0) fetchPages();
        if (faqs.length === 0) fetchFaqs();
        if (languageLinks.length === 0) fetchLanguageLinks();
    }, [
        pages.length,
        faqs.length,
        languageLinks.length,
        fetchPages,
        fetchFaqs,
        fetchLanguageLinks,
    ]);

    return (
        <div className="admin-layout">
            <div className="desktop-sidebar">
                <Sidebar />
            </div>
            <MobileHeader />

            <Outlet />
        </div>
    );
};

export default AdminLayout;
