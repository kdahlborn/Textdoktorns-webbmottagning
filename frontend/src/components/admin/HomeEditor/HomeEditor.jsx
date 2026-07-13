import { useEffect, useState } from 'react';
import './homeEditor.css';
import { FormProvider, useForm } from 'react-hook-form';
import { usePageStore } from '../../../stores/usePageStore';
import Button from '../../Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import FormInput from '../FormInput/FormInput';
import ListEditor from '../ListEditor/ListEditor';

const HomeEditor = ({ page }) => {
    const methods = useForm();
    const { register, handleSubmit, reset } = methods;
    const updatePageContent = usePageStore((state) => state.updatePageContent);
    const [language, setLanguage] = useState('sv');

    useEffect(() => {
        if (page) {
            reset(page.content);
        }
    }, [page, reset]);

    const onSubmit = (data) => {
        updatePageContent(page.page, data).then((res) => console.log(res));
    };

    return (
        <FormProvider {...methods}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <LanguageSelector
                    language={language}
                    setLanguage={setLanguage}
                />
                {/* HERO */}
                <section className="form__page-section">
                    <h2 className="form__title">Hero</h2>

                    {page?.content.hero.titleLines[language].map((_, index) => {
                        return (
                            <FormInput
                                key={`hero-title-${index}-${language}`}
                                label={`Rubrik ${index + 1}`}
                                path={`hero.titleLines.${language}[${index}]`}
                            />
                        );
                    })}
                </section>
                {/* SERVICES */}
                <section className="form__page-section">
                    <h2 className="form__title">Tjänster</h2>

                    <FormInput
                        key={`services-title-${language}`}
                        label="Rubrik"
                        path={`services.heading.${language}`}
                    />
                    <FormInput
                        key={`services-desc-${language}`}
                        label="Beskrivning"
                        path={`services.description.${language}`}
                    />
                    {/* SERVICES-CARDS */}
                    {page?.content.services.cards.map((card, index) => {
                        return (
                            <section
                                key={`services-card-${index}`}
                                className="form__page-subsection"
                            >
                                <h3 className="form__subtitle">
                                    {`Tjänst ${index + 1}`}
                                </h3>

                                <FormInput
                                    key={`services-card-${index}-title-${language}`}
                                    label="Rubrik"
                                    path={`services.cards.${index}.title.${language}`}
                                />
                                <FormInput
                                    key={`services-card-${index}-desc-${language}`}
                                    label="Beskrivning"
                                    path={`services.cards.${index}.description.${language}`}
                                />

                                {/* {card.items[language].map((item, itemIndex) => {
                                    return (
                                        <FormInput
                                            key={`services-card-${index}-item-${itemIndex}-${language}`}
                                            path={`services.cards.${index}.items.${language}.${itemIndex}`}
                                        />
                                    );
                                })} */}
                                <ListEditor
                                    // page={page}
                                    // items={card.items}
                                    path={`services.cards.${index}.items`}
                                    language={language}
                                />
                            </section>
                        );
                    })}
                </section>

                <Button text="Spara" type="submit" />
            </form>
        </FormProvider>
    );
};

export default HomeEditor;
