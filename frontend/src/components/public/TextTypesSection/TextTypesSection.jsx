import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './textTypesSection.css';
import TextTypeCard from '../TextTypeCard/TextTypeCard';
import SectionCta from '../SectionCta/SectionCta';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useMediaQuery } from '@mantine/hooks';

const TextTypesSection = ({ content }) => {
    const { t } = useTranslation();
    const { language } = useParams();
    const categories = content.categories;
    // const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <section className="text-types-section content-wrapper">
            <SectionHeading title={content.heading[language]} />

            <section className="text-type-cards">
                {categories.map((c, index) => {
                    return (
                        <motion.div
                            key={`textType-${index}`}
                            className="text-type-card-wrapper"
                            initial={{
                                opacity: 0,
                                x: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.3,
                                ease: 'easeOut',
                            }}
                        >
                            <TextTypeCard
                                title={c.title[language]}
                                items={c.items.map((item) => item[language])}
                                id={c.id}
                                language={language}
                            />
                        </motion.div>
                    );
                })}
            </section>

            <SectionCta
                icon="stethoscope"
                path={`/${language}/about`}
                btnText={t('global.buttons.readMore')}
            >
                <h4 className="section-cta__title">
                    {t('home.cta.textTypes.heading')}
                </h4>
            </SectionCta>
        </section>
    );
};

export default TextTypesSection;
