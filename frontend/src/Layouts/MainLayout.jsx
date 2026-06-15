import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LanguageHandler from '../components/LanguageHandler';
import { useLanguageSync } from '../hooks/useLanguageSync';

const MainLayout = () => {
    useLanguageSync();

    return (
        <>
            {/* <LanguageHandler /> */}
            <Header />
            <Outlet />
        </>
    );
};

export default MainLayout;
