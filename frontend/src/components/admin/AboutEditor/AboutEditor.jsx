import { FormProvider } from 'react-hook-form';
import { usePageEditor } from '../../../hooks/usePageEditor';
import './aboutEditor.css';
import FormHeader from '../FormHeader/FormHeader';
import FormSection from '../FormSection/FormSection';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';
import CriteriaItemsEditor from '../CriteriaItemsEditor/CriteriaItemsEditor';

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
            <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
                {/* FORM HEADER */}
                <FormHeader
                    language={language}
                    setLanguage={setLanguage}
                    isDirty={isDirty}
                    savingPage={savingPage}
                    saved={saved}
                />
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
