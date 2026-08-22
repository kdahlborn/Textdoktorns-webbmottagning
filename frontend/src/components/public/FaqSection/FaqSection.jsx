import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './faqSection.css';
import { useFaqStore } from '../../../stores/useFaqStore';
import FaqList from '../FaqList/FaqList';
import { useState } from 'react';
import ContentLoader from '../../global/ContentLoader/ContentLoader';

const FaqSection = ({ content, faqs }) => {
    const { language } = useParams();
    const loadingFaqs = useFaqStore((state) => state.loadingFaqs);

    return (
        <section className="faq-section content-wrapper">
            <SectionHeading title={content.heading[language]} />
            {loadingFaqs ? (
                <ContentLoader />
            ) : (
                <FaqList language={language} faqs={faqs} />
            )}
        </section>
    );
};

export default FaqSection;
