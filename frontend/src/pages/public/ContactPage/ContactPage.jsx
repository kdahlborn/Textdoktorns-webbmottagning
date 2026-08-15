import ContentLoader from '../../../components/ContentLoader/ContentLoader';
import ContactSection from '../../../components/public/ContactSection/ContactSection';
import { usePageStore } from '../../../stores/usePageStore';
import './contactPage.css';

const ContactPage = () => {
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'contact'),
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
        <div className="page page--contact">
            <ContactSection content={content.contactInfo} />
        </div>
    );
};

export default ContactPage;
