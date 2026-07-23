import './faqEditor.css';
import { FormProvider } from 'react-hook-form';
import { useFaqEditor } from '../../../hooks/useFaqEditor';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useEffect } from 'react';
import FormSection from '../FormSection/FormSection';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';
import Button from '../../Button/Button';
import { useFaqStore } from '../../../stores/useFaqStore';

const FaqEditor = ({ faq }) => {
    useEffect(() => {
        console.log(faq);
    }, [faq]);

    const faqExists = faq.faqId;

    const { methods, language, setLanguage, isDirty, onSubmit, saved } =
        useFaqEditor(faq);

    const { addFaq } = useFaqStore();

    return (
        <FormProvider {...methods}>
            <form
                className="form"
                onSubmit={methods.handleSubmit((data) => {
                    if (faqExists) {
                        console.log('Faq exists');
                    } else {
                        addFaq(data);
                    }
                })}
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
                    />
                    <Button
                        text="Avbryt"
                        className="form__btn form__btn--cancel"
                    />
                    <Button text="Spara" className="form__btn" type="submit" />
                </footer>
            </form>
        </FormProvider>
    );
};

export default FaqEditor;
