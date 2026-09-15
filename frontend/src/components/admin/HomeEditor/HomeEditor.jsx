import './homeEditor.css';
import { FormProvider } from 'react-hook-form';
import FormInput from '../../global/FormInput/FormInput';
import ListEditor from '../ListEditor/ListEditor';
import FormTextArea from '../../global/FormTextArea/FormTextArea';
import FormSection from '../FormSection/FormSection';
import ServiceCardsEditor from '../ServiceCardsEditor/ServiceCardsEditor';
import TextCategoriesEditor from '../TextCategoriesEditor/TextCategoriesEditor';
import FormHeader from '../FormHeader/FormHeader';
import { usePageEditor } from '../../../hooks/usePageEditor';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SaveButton from '../SaveButton/SaveButton';

const HomeEditor = ({ page }) => {
    const {
        methods,
        isDirty,
        savingPage,
        language,
        setLanguage,
        saved,
        onSubmit,
    } = usePageEditor(page);

    return (
        <FormProvider {...methods}>
            <form
                className="form edit-page-page__form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {/* FORM HEADER */}
                <FormHeader>
                    <LanguageSelector
                        language={language}
                        setLanguage={setLanguage}
                    />

                    <SaveButton
                        loading={savingPage}
                        saved={saved}
                        isDirty={isDirty}
                    />
                </FormHeader>
                {/* HERO-SECTION */}
                <FormSection title="Hero-sektion">
                    <ListEditor
                        path="hero.titleLines"
                        language={language}
                        title="Rubriker"
                    />
                </FormSection>
                {/* SERVICES-SECTION */}
                <FormSection title="Sektion för tjänster">
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
                    {/* SERVICE-CARDS */}
                    <ServiceCardsEditor
                        cards={page?.content.services.cards}
                        language={language}
                    />
                </FormSection>

                {/* TYPES OF TEXT-SECTION */}
                <FormSection title="Sektion för texttyper">
                    <FormInput
                        key={`textTypes-title-${language}`}
                        label="Rubrik"
                        path={`textTypes.heading.${language}`}
                    />

                    <TextCategoriesEditor
                        categories={page?.content.textTypes.categories}
                        language={language}
                    />
                </FormSection>
                {/* TRANSLATION-SECTION */}
                <FormSection title="Sektion om översättning">
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
                </FormSection>
                {/* PRESCRIPTIONS SECTION-SECTION */}
                <FormSection title='Sektion om "mediciner"'>
                    <FormInput
                        key={`prescriptions-heading-${language}`}
                        label="Rubrik"
                        path={`prescriptions.heading.${language}`}
                    />
                    <ListEditor
                        path={`prescriptions.items.`}
                        language={language}
                        addOrRemove={false}
                    />
                </FormSection>
                {/* CLIENTS-SECTION */}
                <FormSection title="Sektion om klienter">
                    <FormInput
                        key={`clients-heading-${language}`}
                        label="Rubrik"
                        path={`clients.heading.${language}`}
                    />
                    <FormTextArea
                        key={`clients-desc-${language}`}
                        label="Beskrivning"
                        path={`clients.description.${language}`}
                    />
                </FormSection>
            </form>
        </FormProvider>
    );
};

export default HomeEditor;
