import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './medsSection.css';
import {
    FileText,
    Search,
    GraduationCap,
    PencilLine,
    MessageSquarePlus,
} from 'lucide-react';
import CircleIcon from '../CircleIcon/CircleIcon';
import pillsImg from '../../../assets/images/pills.png';

const MedsSection = ({ translation, prescriptions }) => {
    const { language } = useParams();
    const icons = {
        templates: {
            icon: <FileText size={20} />,
            color: 'green',
        },
        analyses: {
            icon: <Search size={20} />,
            color: 'yellow',
        },
        courses: {
            icon: <GraduationCap size={20} />,
            color: 'purple',
        },
        writing: {
            icon: <PencilLine size={20} />,
            color: 'blue',
        },
        languageAdvice: {
            icon: <MessageSquarePlus size={20} />,
            color: 'light-blue',
        },
    };

    return (
        <section className="meds-section content-wrapper">
            <img
                src={pillsImg}
                alt=""
                aria-hidden="true"
                className="meds-section__img"
            />
            <article className="translation">
                <SectionHeading title={translation.heading[language]} />
                <h3 className="translation__title">
                    {translation.title[language]}
                </h3>
                <p className="translation__desc">
                    {translation.text[language]}
                </p>
            </article>

            <article className="meds">
                <SectionHeading title={prescriptions.heading[language]} />

                <ul className="meds__list">
                    {prescriptions.items.map((item) => {
                        return (
                            <li key={item.id} className="meds__item">
                                <CircleIcon
                                    icon={icons[item.id].icon}
                                    color={icons[item.id].color}
                                />
                                {item[language]}
                            </li>
                        );
                    })}
                </ul>
            </article>
        </section>
    );
};

export default MedsSection;
