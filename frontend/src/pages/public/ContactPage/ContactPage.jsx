import { useEffect } from 'react';
import ContentLoader from '../../../components/global/ContentLoader/ContentLoader';
import ContactSection from '../../../components/public/ContactSection/ContactSection';
import FaqSection from '../../../components/public/FaqSection/FaqSection';
import FooterSection from '../../../components/public/FooterSection/FooterSection';
import { useFaqStore } from '../../../stores/useFaqStore';
import { usePageStore } from '../../../stores/usePageStore';
import './contactPage.css';
import ErrorPage from '../ErrorPage/ErrorPage';

const ContactPage = () => {
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'contact'),
    );
    const error = usePageStore((state) => state.error);
    const loading = usePageStore((state) => state.loadingPages);
    const content = page?.content;
    const fetchFaqs = useFaqStore((state) => state.fetchFaqs);
    const faqs = useFaqStore((state) => state.faqs);

    useEffect(() => {
        if (faqs.length === 0) fetchFaqs();
    }, [faqs.length, fetchFaqs]);

    if (loading) {
        return <ContentLoader className="page-loader" />;
    }

    if (!page) {
        return <ErrorPage />;
    }

    return (
        <div className="page page--contact">
            {/* CONTACT-SECTION */}
            <ContactSection content={content} />
            {/* FAQ-SECTION */}
            <FaqSection content={content.faq} faqs={faqs} />
            {/* FOOTER-SECTION */}
            <FooterSection />
        </div>
    );
};

export default ContactPage;
