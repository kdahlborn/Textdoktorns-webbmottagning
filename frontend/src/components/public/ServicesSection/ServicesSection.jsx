import { useParams } from 'react-router';
import './servicesSection.css';
import SectionHeading from '../SectionHeading/SectionHeading';

const ServicesSection = ({ content }) => {
    const { language } = useParams();

    console.log(content);
    return (
        <section className="services content-wrapper">
            <SectionHeading
                title={content.heading[language]}
                desc={content.description[language]}
            />
        </section>
    );
};

export default ServicesSection;
