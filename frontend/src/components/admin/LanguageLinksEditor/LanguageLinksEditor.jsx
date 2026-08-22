import { FormProvider, useFieldArray } from 'react-hook-form';
import { useLanguageLinksEditor } from '../../../hooks/useLanguageLinksEditor';
import './languageLinksEditor.css';
import FormHeader from '../FormHeader/FormHeader';
import SaveButton from '../SaveButton/SaveButton';
import FormSection from '../FormSection/FormSection';
import FormInput from '../../global/FormInput/FormInput';
import { X, Plus } from 'lucide-react';
import Button from '../../global/Button/Button';

const LanguageLinksEditor = ({ languageLinks }) => {
    const { methods, control, isDirty, saving, saved, onSubmit } =
        useLanguageLinksEditor(languageLinks);

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'languageLinks',
    });

    const addNewLink = () =>
        append({
            title: '',
            url: '',
        });

    return (
        <FormProvider {...methods}>
            <form
                className="form links-form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <FormHeader>
                    {/* <Button onClick={addNewLink}>
                        <Plus size={16} strokeWidth={3} />
                        Lägg till språklänk
                    </Button> */}
                    <SaveButton
                        loading={saving}
                        saved={saved}
                        isDirty={isDirty}
                    />
                </FormHeader>

                <FormSection title="Språklänkar">
                    <Button onClick={addNewLink}>
                        <Plus size={16} strokeWidth={3} />
                        Lägg till språklänk
                    </Button>
                    <ul className="links-form__list">
                        {fields.map((field, index) => {
                            return (
                                <li key={field.id} className="links-form__item">
                                    <FormInput
                                        label="Titel"
                                        path={`languageLinks.${index}.title`}
                                    />
                                    <FormInput
                                        label="URL"
                                        path={`languageLinks.${index}.url`}
                                    />
                                    <Button
                                        className="links-form__delete-btn"
                                        onClick={() => remove(index)}
                                        title="Ta bort"
                                        type="submit"
                                    >
                                        <X size={16} />
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                    {/* <footer className="form__footer links-form__footer">
                        <Button onClick={addNewLink}>
                            <Plus />
                            Lägg till språklänk
                        </Button>
                    </footer> */}
                </FormSection>
            </form>
        </FormProvider>
    );
};

export default LanguageLinksEditor;
