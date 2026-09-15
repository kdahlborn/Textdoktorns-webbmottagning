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
import { motion } from 'motion/react';

const MedsSection = ({ translation, prescriptions }) => {
    const { language } = useParams();
    const icons = {
        templates: {
            icon: <FileText size={24} />,
            color: 'green',
        },
        analyses: {
            icon: <Search size={24} />,
            color: 'yellow',
        },
        courses: {
            icon: <GraduationCap size={24} />,
            color: 'purple',
        },
        writing: {
            icon: <PencilLine size={24} />,
            color: 'blue',
        },
        languageAdvice: {
            icon: <MessageSquarePlus size={24} />,
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
            {/* <motion.article
                className="translation"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                }}
            >
                <SectionHeading title={translation.heading[language]} />
                <h3 className="translation__title">
                    {translation.title[language]}
                </h3>
                <p className="translation__desc">
                    {translation.text[language]}
                </p>
            </motion.article> */}
            <motion.article
                className="translation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
            >
                <SectionHeading title={translation.heading[language]} />

                <h3 className="translation__title">
                    {translation.title[language]}
                </h3>

                <p className="translation__desc">
                    {translation.text[language]}
                </p>
            </motion.article>

            <article className="meds">
                <SectionHeading title={prescriptions.heading[language]} />

                <ul className="meds__list">
                    {prescriptions.items.map((item, index) => {
                        return (
                            <motion.li
                                key={item.id}
                                className="meds__item"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: 'easeOut',
                                }}
                            >
                                <CircleIcon
                                    icon={icons[item.id].icon}
                                    color={icons[item.id].color}
                                />
                                {item[language]}
                            </motion.li>
                        );
                    })}
                </ul>
            </article>
        </section>
    );
};

export default MedsSection;
