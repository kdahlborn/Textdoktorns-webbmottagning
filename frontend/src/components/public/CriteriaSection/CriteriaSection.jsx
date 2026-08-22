import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './criteriaSection.css';
import CircleIcon from '../CircleIcon/CircleIcon';
import { motion } from 'motion/react';

const CriteriaSection = ({ content }) => {
    const { language } = useParams();
    const items = content.items;
    const icons = {
        understandable: {
            icon: (
                <span className="material-symbols-outlined">
                    psychology_alt
                </span>
            ),
            color: 'purple',
        },
        correct: {
            icon: <span className="material-symbols-outlined">check</span>,
            color: 'green',
        },
        informative: {
            icon: <span className="material-symbols-outlined">info_i</span>,
            color: 'purple',
        },
        engaging: {
            icon: <span className="material-symbols-outlined">favorite</span>,
            color: 'red',
        },
        concise: {
            icon: <span className="material-symbols-outlined">schedule</span>,
            color: 'yellow',
        },
    };
    return (
        <section className="criteria-section content-wrapper">
            <article className="criteria">
                <motion.div
                    className="criteria__content"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                >
                    <h2 className="criteria__title">
                        {content.sectionTitle[language]}
                        <span className="highlighted">
                            {content.title[language]}
                        </span>
                    </h2>

                    <ul className="criteria__list">
                        {items.map((item, index) => {
                            const icon = icons[item.id];
                            return (
                                <motion.li
                                    key={item.id}
                                    className="criteria__item"
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <CircleIcon
                                        icon={icon.icon}
                                        color={icon.color}
                                    />
                                    <article className="criteria__article">
                                        <h3 className="criteria__subtitle">
                                            {item.title[language]}
                                        </h3>
                                        <p className="criteria__desc">
                                            {item.description[language]}
                                        </p>
                                    </article>
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
            </article>
        </section>
    );
};

export default CriteriaSection;
