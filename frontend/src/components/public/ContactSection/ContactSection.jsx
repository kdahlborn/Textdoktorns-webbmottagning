import { useParams } from 'react-router';
import './contactSection.css';
import SectionHeading from '../SectionHeading/SectionHeading';

import ContactPageInfo from '../ContactPageInfo/ContactPageInfo';

const ContactSection = ({ content }) => {
    const { language } = useParams();
    return (
        <section className="contact-section">
            <SectionHeading title={content.heading[language]} />
            <ContactPageInfo info={content} />
        </section>
    );
};

export default ContactSection;
