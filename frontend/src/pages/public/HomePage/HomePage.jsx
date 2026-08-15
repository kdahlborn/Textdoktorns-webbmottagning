import { useEffect } from 'react';
import { usePageStore } from '../../../stores/usePageStore';
import './homePage.css';
import { useParams } from 'react-router';
import HomeHero from '../../../components/public/HomeHero/HomeHero';

import ContentLoader from '../../../components/ContentLoader/ContentLoader';
import ServicesSection from '../../../components/public/ServicesSection/ServicesSection';
import TextTypesSection from '../../../components/public/TextTypesSection/TextTypesSection';
import MedsSection from '../../../components/public/MedsSection/MedsSection';
import ClientsSection from '../../../components/public/ClientsSection/ClientsSection';
import FooterSection from '../../../components/public/FooterSection/FooterSection';

const HomePage = () => {
    const { language } = useParams();
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'home'),
    );
    const error = usePageStore((state) => state.error);
    const loading = usePageStore((state) => state.loadingPages);
    const content = page?.content;

    if (loading) {
        return <ContentLoader />;
    }

    if (!page) {
        return <p>Sidan kunde inte hittas.</p>;
    }

    return (
        <div className="page page--home">
            {/* HERO-SECTION */}
            <HomeHero content={content.hero} />
            {/* SERVICES-SECTION */}
            <ServicesSection content={content.services} />
            {/* TEXT-TYPES-SECTION */}
            <TextTypesSection content={content.textTypes} />
            {/* MEDS-SECTION */}
            <MedsSection
                translation={content.translation}
                prescriptions={content.prescriptions}
            />
            {/* CLIENTS-SECTION */}
            <ClientsSection content={content.clients} />
            {/* FOOTER-SECTION */}
            <FooterSection />
        </div>
    );
};

export default HomePage;
