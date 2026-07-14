import { useEffect, useState } from 'react';
import './homeEditor.css';
import { FormProvider, useForm } from 'react-hook-form';
import { usePageStore } from '../../../stores/usePageStore';
import Button from '../../Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import FormInput from '../FormInput/FormInput';
import ListEditor from '../ListEditor/ListEditor';
import FormTextArea from '../FormTextArea/FormTextArea';

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
                    <h2 className="form__title">Hero-sektion</h2>

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
                    <h2 className="form__title">Sektion för tjänster</h2>

                    <FormInput
                        key={`services-title-${language}`}
                        label="Rubrik"
                        path={`services.heading.${language}`}
                    />
                    <FormTextArea
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
                                <FormTextArea
                                    key={`services-card-${index}-desc-${language}`}
                                    label="Beskrivning"
                                    path={`services.cards.${index}.description.${language}`}
                                />

                                <ListEditor
                                    path={`services.cards.${index}.items`}
                                    language={language}
                                />

                                <FormTextArea
                                    key={`service-card-${index}-note-${language}`}
                                    label="Notering"
                                    path={`services.cards.${index}.note.${language}`}
                                />
                            </section>
                        );
                    })}
                </section>
                {/* TYPES OF TEXT */}
                <section className="form__page-section">
                    <h2 className="form__title">Sektion för texttyper</h2>

                    <FormInput
                        key={`textTypes-title-${language}`}
                        label="Rubrik"
                        path={`textTypes.heading.${language}`}
                    />

                    {page?.content.textTypes.categories.map((c, index) => {
                        return (
                            <section className="form__page-subsection">
                                <h3 className="form__subtitle">
                                    {`Kategori ${index + 1}`}
                                </h3>

                                <FormInput
                                    key={`textTypes-category-title`}
                                    label="Kategori"
                                    path={`textTypes.categories.${index}.title.${language}`}
                                />

                                <ListEditor
                                    path={`textTypes.categories.${index}.items`}
                                    language={language}
                                />
                            </section>
                        );
                    })}
                </section>
                {/* TRANSLATION */}
                <section className="form__page-section">
                    <h2 className="form__title">Sektion om översättning</h2>

                    <FormInput
                        key={`translation-heading-${language}`}
                        label="Rubrik"
                        path={`translation.heading.${language}`}
                    />
                    <FormInput
                        key={`translation-title-${language}`}
                        label="Underrubrik"
                        path={`translation.title.${language}`}
                    />
                    <FormTextArea
                        key={`translation-text-${language}`}
                        label="Text"
                        path={`translation.text.${language}`}
                    />
                </section>

                <footer className="form__footer">
                    <Button text="Spara" type="submit" />
                </footer>
            </form>
        </FormProvider>
    );
};

export default HomeEditor;
