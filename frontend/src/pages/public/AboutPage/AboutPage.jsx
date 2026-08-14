import { useParams } from 'react-router';
import './aboutPage.css';
import { usePageStore } from '../../../stores/usePageStore';
import AboutSection from '../../../components/public/AboutSection/AboutSection';
import ContentLoader from '../../../components/ContentLoader/ContentLoader';

const AboutPage = () => {
    const { language } = useParams();
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'about'),
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
        <div className="page page--about">
            <AboutSection content={content.hero} />
        </div>
    );
};

export default AboutPage;
