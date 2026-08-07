import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './medsSection.css';

const MedsSection = ({ translation, prescriptions }) => {
    const { language } = useParams();
    console.log(translation);
    console.log(prescriptions);
    return (
        <section className="meds-section">
            <article className="translation">
                {/* <SectionHeading
                    title={content.translation.heading[language]}
                    desc={content.translation.title[language]}
                /> */}
            </article>
        </section>
    );
};

export default MedsSection;
