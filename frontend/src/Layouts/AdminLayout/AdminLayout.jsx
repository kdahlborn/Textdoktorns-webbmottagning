import './adminLayout.css';
import { Outlet, useMatches } from 'react-router';
import Sidebar from '../../components/admin/Sidebar/Sidebar';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';
import { useFaqStore } from '../../stores/useFaqStore';

const AdminLayout = () => {
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    const faqs = useFaqStore((state) => state.faqs);
    const fetchFaqs = useFaqStore((state) => state.fetchFaqs);

    useEffect(() => {
        if (pages.length === 0) fetchPages();
        if (faqs.length === 0) fetchFaqs();
    }, [pages.length, faqs.length, fetchPages, fetchFaqs]);

    return (
        <div className="admin-layout">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
