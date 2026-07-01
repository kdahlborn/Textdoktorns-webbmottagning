import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import { useLanguageSync } from '../hooks/useLanguageSync';

const PublicLayout = () => {
    useLanguageSync();

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout;
