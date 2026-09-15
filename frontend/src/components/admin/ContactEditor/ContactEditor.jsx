import { FormProvider } from 'react-hook-form';
import { usePageEditor } from '../../../hooks/usePageEditor';
import './contactEditor.css';
import FormSection from '../FormSection/FormSection';
import FormInput from '../../global/FormInput/FormInput';
import FormHeader from '../FormHeader/FormHeader';
import SaveButton from '../SaveButton/SaveButton';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const ContactEditor = ({ page }) => {
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
                {/* CONTACT INFO */}
                <FormSection title="Kontaktinformation">
                    <FormInput
                        key={`contactInfo-heading-${language}`}
                        label="Rubrik"
                        path={`contactInfo.heading.${language}`}
                    />
                    <FormInput label="E-mail" path={'contactInfo.email'} />
                    <FormInput label="Telefon" path={'contactInfo.phone'} />
                    <FormInput
                        key={`contactInfo-address-${language}`}
                        label="Adress"
                        path={`contactInfo.address.${language}`}
                    />
                </FormSection>
                {/* CONTACT FORM */}
                <FormSection title="Kontaktformulär">
                    <FormInput
                        key={`contactForm-heading-${language}`}
                        label="Rubrik"
                        path={`contactForm.heading.${language}`}
                    />
                </FormSection>
                {/* FAQ */}
                <FormSection title="FAQ">
                    <FormInput
                        key={`faq-heading-${language}`}
                        label="Rubrik"
                        path={`faq.heading.${language}`}
                    />
                </FormSection>
            </form>
        </FormProvider>
    );
};

export default ContactEditor;
