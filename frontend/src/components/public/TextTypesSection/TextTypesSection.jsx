import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import './textTypesSection.css';
import TextTypeCard from '../TextTypeCard/TextTypeCard';
import SectionCta from '../SectionCta/SectionCta';
import { useTranslation } from 'react-i18next';

const TextTypesSection = ({ content }) => {
    const { t } = useTranslation();
    const { language } = useParams();
    const categories = content.categories;

    // console.log(content);

    return (
        <section className="text-types-section content-wrapper">
            <SectionHeading title={content.heading[language]} />

            <section className="text-type-cards">
                {categories.map((c, index) => {
                    return (
                        <TextTypeCard
                            key={`textType-${index}`}
                            title={c.title[language]}
                            items={c.items.map((item) => item[language])}
                            id={c.id}
                            language={language}
                        />
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
