import './aboutPage.css';
import { usePageStore } from '../../../stores/usePageStore';
import AboutSection from '../../../components/public/AboutHero/AboutHero';
import ContentLoader from '../../../components/ContentLoader/ContentLoader';
import CriteriaSection from '../../../components/public/CriteriaSection/CriteriaSection';
import FooterSection from '../../../components/public/FooterSection/FooterSection';

const AboutPage = () => {
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'about'),
    );
    const error = usePageStore((state) => state.error);
    const loading = usePageStore((state) => state.loadingPages);
    const content = page?.content;

    if (loading) {
        return <ContentLoader className="page-loader" />;
    }

    if (!page) {
        return <p>Sidan kunde inte hittas.</p>;
    }

    return (
        <div className="page page--about">
            <AboutSection content={content.hero} />

            <CriteriaSection content={content.criteria} />
            {/* FOOTER-SECTION */}
            <FooterSection />
        </div>
    );
};

export default AboutPage;
