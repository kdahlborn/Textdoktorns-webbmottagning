import { Link, useParams } from 'react-router';
import './servicesSection.css';
import SectionHeading from '../SectionHeading/SectionHeading';
import heartDiagnosis from '../../../assets/images/icons/heart-diagnosis.svg';
import heartAcute from '../../../assets/images/icons/heart-acute.svg';
import heartCheck from '../../../assets/images/icons/heart-check.svg';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useTranslation } from 'react-i18next';
import SectionCta from '../SectionCta/SectionCta';

const ServicesSection = ({ content }) => {
    const { t } = useTranslation();
    const { language } = useParams();
    const cards = content.cards;

    // console.log(content);
    return (
        <section className="services-section content-wrapper">
            <SectionHeading
                title={content.heading[language]}
                desc={content.description[language]}
            />

            <section className="service-cards">
                {cards.map((card, index) => {
                    return (
                        <ServiceCard
                            key={card.id}
                            title={card.title[language]}
                            desc={card.description[language]}
                            items={card.items.map((item) => item[language])}
                            note={card.note[language]}
                            id={card.id}
                            language={language}
                        />
                    );
                })}
            </section>

            <SectionCta
                icon="contract_edit"
                path={`/${language}/contact`}
                btnText={t('home.cta.services.button')}
            >
                <div className="section-cta__info">
                    <h5 className="section-cta__title">
                        {t('home.cta.services.heading')}
                    </h5>
                    <p className="section-cta__desc">
                        {t('home.cta.services.description')}
                    </p>
                </div>
                {/* <Link className="btn" to={`/${language}/contact`}>
                    {t('home.cta.services.button')}
                </Link> */}
            </SectionCta>
        </section>
    );
};

export default ServicesSection;
