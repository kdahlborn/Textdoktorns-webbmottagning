import { FormProvider, useFieldArray } from 'react-hook-form';
import { useLanguageLinksEditor } from '../../../hooks/useLanguageLinksEditor';
import './languageLinksEditor.css';
import FormHeader from '../FormHeader/FormHeader';
import SaveButton from '../SaveButton/SaveButton';
import FormSection from '../FormSection/FormSection';
import FormInput from '../FormInput/FormInput';

const LanguageLinksEditor = ({ languageLinks }) => {
    const { methods, isDirty, saving, saved, onSubmit } =
        useLanguageLinksEditor(languageLinks);

    return (
        <FormProvider {...methods}>
            <form
                className="form language-links-form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <FormHeader>
                    <SaveButton
                        loading={saving}
                        saved={saved}
                        isDirty={isDirty}
                    />
                </FormHeader>

                <FormSection title="Språklänkar">
                    {languageLinks.map((link, index) => {
                        return (
                            <div key={link._id} className="link-item">
                                <FormInput
                                    label={`Titel`}
                                    path={`languageLinks.${index}.title`}
                                />
                                <FormInput
                                    label={`URL`}
                                    path={`languageLinks.${index}.url`}
                                />
                            </div>
                        );
                    })}
                </FormSection>
            </form>
        </FormProvider>
    );
};

export default LanguageLinksEditor;
