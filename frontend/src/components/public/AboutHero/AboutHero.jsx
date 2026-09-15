import { Link, useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './aboutHero.css';
import { splitNameFromStr } from '../../../utils/strings';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import portrait from '../../../assets/images/textdoktorn-removed-bg.png';
import { motion } from 'motion/react';

const AboutHero = ({ content }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const { before, name } = splitNameFromStr(content.title[language], [
        'Björn Dahlborn',
        'Бьёрн Дальборн',
    ]);

    return (
        <section className="about-hero">
            <div className="about-hero__content content-wrapper">
                <SectionHeading title={content.sectionTitle[language]} />

                <article className="about">
                    <motion.h1
                        className="about__title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeIn',
                        }}
                    >
                        {before}
                        <span className="highlighted">{name}</span>
                    </motion.h1>

                    <motion.p
                        className="about__intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: 'easeIn',
                        }}
                    >
                        {content.intro[language]}
                        <a
                            href="https://www.su.se/utbildning/utbildningskatalog/hl/hlank"
                            target="_blank"
                            className="about__link"
                        >
                            {content.educationLinkText[language]}
                            <span className="link-arrow">
                                {<ArrowRight size={16} />}
                            </span>
                        </a>
                    </motion.p>

                    <span className="line"></span>

                    <motion.p
                        className="about__desc"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: 'easeIn',
                        }}
                    >
                        {content.description[language]}
                    </motion.p>

                    <Link to={`/${language}/contact`} className="btn">
                        {t('global.buttons.contact')}
                    </Link>
                </article>
                <motion.img
                    src={portrait}
                    alt="Björn Dahlborn smiling"
                    className="about-section__img"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: 'easeOut',
                    }}
                />
            </div>
        </section>
    );
};

export default AboutHero;
