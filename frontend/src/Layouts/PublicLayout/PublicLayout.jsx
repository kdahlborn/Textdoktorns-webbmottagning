import './publicLayout.css';
import { Outlet } from 'react-router';
import Header from '../../components/public/Header/Header';
import { useLanguageSync } from '../../hooks/useLanguageSync';
import { usePageStore } from '../../stores/usePageStore';
import { useEffect } from 'react';

const PublicLayout = () => {
    const pages = usePageStore((state) => state.pages);
    const fetchPages = usePageStore((state) => state.fetchPages);

    useLanguageSync();

    useEffect(() => {
        if (pages.length === 0) fetchPages();
    }, [pages.length, fetchPages]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;
