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

    const pageError = usePageStore((state) => state.error);
    const loadingPages = usePageStore((state) => state.loadingPages);

    const content = page?.content;

    const fetchFaqs = useFaqStore((state) => state.fetchFaqs);
    const faqs = useFaqStore((state) => state.faqs);
    const loadingFaqs = useFaqStore((state) => state.loadingFaqs);
    const faqError = useFaqStore((state) => state.error);
    const faqsFetched = useFaqStore((state) => state.faqsFetched);

    useEffect(() => {
        if (!faqsFetched) {
            fetchFaqs();
        }
    }, [faqsFetched, fetchFaqs]);

    if (loadingPages || loadingFaqs) {
        return <ContentLoader className="page-loader" />;
    }

    if (pageError || faqError || !page) {
        return <ErrorPage />;
    }

    return (
        <div className="page page--contact">
            <ContactSection content={content} />

            <FaqSection content={content.faq} faqs={faqs} />

            <FooterSection />
        </div>
    );
};

export default ContactPage;
