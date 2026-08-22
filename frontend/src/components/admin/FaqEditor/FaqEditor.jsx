import './faqEditor.css';
import { FormProvider } from 'react-hook-form';
import { useFaqEditor } from '../../../hooks/useFaqEditor';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useEffect } from 'react';
import FormInput from '../../global/FormInput/FormInput';
import FormTextArea from '../../global/FormTextArea/FormTextArea';
import Button from '../../global/Button/Button';
import { useFaqStore } from '../../../stores/useFaqStore';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';
import SaveButton from '../SaveButton/SaveButton';

const FaqEditor = ({ faq, setEditFaq }) => {
    useEffect(() => {
        console.log(faq);
    }, [faq]);

    const {
        methods,
        language,
        setLanguage,
        isDirty,
        onSubmit,
        saved,
        removeFaq,
        savingFaq,
        loadingFaq,
    } = useFaqEditor(faq);

    return (
        <FormProvider {...methods}>
            <form
                className="form edit-faq-page__form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <LanguageSelector
                    language={language}
                    setLanguage={setLanguage}
                />

                <FormInput
                    key={`faq-question-${language}`}
                    label="Fråga"
                    path={`question.${language}`}
                />

                <FormTextArea
                    key={`faq-answer-${language}`}
                    label="Svar"
                    path={`answer.${language}`}
                />

                {/* FORM FOOTER */}
                <footer className="form__footer">
                    <Button
                        text="Ta bort"
                        className="form__btn form__btn--delete"
                        onClick={() => {
                            removeFaq(faq.faqId);
                            setEditFaq(null);
                        }}
                    />
                    <Button
                        text="Avbryt"
                        className="form__btn form__btn--cancel"
                        onClick={() => setEditFaq(null)}
                    />
                    <SaveButton
                        loading={savingFaq}
                        saved={saved}
                        isDirty={isDirty}
                    />
                </footer>
            </form>
        </FormProvider>
    );
};

export default FaqEditor;
