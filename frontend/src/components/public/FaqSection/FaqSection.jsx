import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './faqSection.css';
import { useFaqStore } from '../../../stores/useFaqStore';
import FaqList from '../FaqList/FaqList';

const FaqSection = ({ content, faqs }) => {
    const { language } = useParams();

    return (
        <section className="faq-section content-wrapper">
            <SectionHeading title={content.heading[language]} />
            <FaqList language={language} faqs={faqs} />
        </section>
    );
};

export default FaqSection;
