import { Link, useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './aboutSection.css';
import { splitNameFromStr } from '../../../utils/strings';
import AboutArticle from '../AboutArticle/AboutArticle';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import portrait from '../../../assets/images/textdoktorn-removed-bg.png';

const AboutSection = ({ content }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const { before, name } = splitNameFromStr(content.title[language], [
        'Björn Dahlborn',
        'Бьёрн Дальборн',
    ]);

    return (
        <section className="about-section">
            <div className="about-section__content content-wrapper">
                <SectionHeading title={content.sectionTitle[language]} />

                <article className="about">
                    <h1 className="about__title">
                        {before}
                        <span className="highlighted">{name}</span>
                    </h1>

                    <p className="about__intro">
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
                    </p>

                    <span className="line"></span>

                    <p className="about__desc">
                        {content.description[language]}
                    </p>

                    <Link to={`/${language}/contact`} className="btn">
                        {t('global.buttons.contact')}
                    </Link>
                </article>
                <img
                    src={portrait}
                    alt="Björn Dahlborn smiling"
                    className="about-section__img"
                />
            </div>
        </section>
    );
};

export default AboutSection;
