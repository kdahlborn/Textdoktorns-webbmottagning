import { useEffect } from 'react';
import { usePageStore } from '../../../stores/usePageStore';
import './homePage.css';
import { useParams } from 'react-router';
import HeroSection from '../../../components/public/HeroSection/HeroSection';
import ContentLoader from '../../../components/ContentLoader/ContentLoader';
import ServicesSection from '../../../components/public/ServicesSection/ServicesSection';

const HomePage = () => {
    const { language } = useParams();
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'home'),
    );
    const error = usePageStore((state) => state.error);
    const loading = usePageStore((state) => state.loadingPages);
    const content = page?.content;

    useEffect(() => {
        console.log(page);
    }, [page]);

    if (loading) {
        return <ContentLoader />;
    }

    if (!page) {
        return <p>Sidan kunde inte hittas.</p>;
    }

    return (
        <div className="page page--home">
            {/* HERO-SECTION */}
            <HeroSection content={content.hero} />
            {/* SERVICES-SECTION */}
            <ServicesSection content={content.services} />
        </div>
    );
};

export default HomePage;
