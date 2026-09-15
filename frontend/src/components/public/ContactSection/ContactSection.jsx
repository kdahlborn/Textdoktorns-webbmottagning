import { useParams } from 'react-router';
import './contactSection.css';
import SectionHeading from '../SectionHeading/SectionHeading';

import ContactPageInfo from '../ContactPageInfo/ContactPageInfo';
import ContactForm from '../ContactForm/ContactForm';

const ContactSection = ({ content }) => {
    const { language } = useParams();
    return (
        <section className="contact-section content-wrapper">
            <SectionHeading title={content.contactInfo.heading[language]} />
            <ContactPageInfo info={content.contactInfo} />
            <ContactForm language={language} content={content.contactForm} />
        </section>
    );
};

export default ContactSection;
