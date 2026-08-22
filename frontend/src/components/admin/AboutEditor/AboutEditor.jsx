import { FormProvider } from 'react-hook-form';
import { usePageEditor } from '../../../hooks/usePageEditor';
import './aboutEditor.css';
import FormHeader from '../FormHeader/FormHeader';
import FormSection from '../FormSection/FormSection';
import FormInput from '../../global/FormInput/FormInput';
import FormTextArea from '../../global/FormTextArea/FormTextArea';
import CriteriaItemsEditor from '../CriteriaItemsEditor/CriteriaItemsEditor';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SaveButton from '../SaveButton/SaveButton';

const AboutEditor = ({ page }) => {
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
                {/* HERO */}
                <FormSection title="Hero-sektion">
                    <FormInput
                        key={`hero-sectionTitle-${language}`}
                        label="Rubrik 1"
                        path={`hero.sectionTitle.${language}`}
                    />
                    <FormInput
                        key={`hero-title-${language}`}
                        label="Rubrik 2"
                        path={`hero.title.${language}`}
                    />
                    <FormTextArea
                        key={`hero-intro-${language}`}
                        label="Introduktion"
                        path={`hero.intro.${language}`}
                    />
                    <FormInput
                        key={`hero-link-${language}`}
                        label="Länk-text"
                        path={`hero.educationLinkText.${language}`}
                    />
                    <FormTextArea
                        key={`hero-desc-${language}`}
                        label="Beskrivning"
                        path={`hero.description.${language}`}
                    />
                </FormSection>
                {/* CRITERIAS */}
                <FormSection title="Kriterier">
                    <FormInput
                        key={`criteria-sectionTitle-${language}`}
                        label="Rubrik 1"
                        path={`criteria.sectionTitle.${language}`}
                    />
                    <FormInput
                        key={`criteria-title-${language}`}
                        label="Rubrik 2"
                        path={`criteria.title.${language}`}
                    />
                    <CriteriaItemsEditor
                        items={page?.content.criteria.items}
                        language={language}
                    />
                </FormSection>
            </form>
        </FormProvider>
    );
};

export default AboutEditor;
