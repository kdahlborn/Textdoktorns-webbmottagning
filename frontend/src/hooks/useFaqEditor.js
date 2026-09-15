import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useFaqStore } from '../stores/useFaqStore';

export const useFaqEditor = (faq) => {
    const methods = useForm();
    const { reset, formState } = methods;
    const { isDirty } = formState;
    const [language, setLanguage] = useState('sv');
    const [saved, setSaved] = useState(false);
    const { addFaq, updateFaq, removeFaq, savingFaq, loadingFaq } =
        useFaqStore();

    useEffect(() => {
        if (faq) {
            reset(faq);
        }
    }, [faq]);

    const onSubmit = (data) => {
        if (faq.faqId) {
            // If FAQ exists
            updateFaq(faq.faqId, data).then((res) => {
                console.log(res);

                if (res.success) {
                    reset(data);
                    setSaved(true);

                    setTimeout(() => {
                        setSaved(false);
                    }, 3000);
                }
            });
        } else {
            addFaq(data).then((res) => {
                console.log(res);

                if (res.success) {
                    reset(data);
                    setSaved(true);

                    setTimeout(() => {
                        setSaved(false);
                    }, 3000);
                }
            });
        }
    };

    return {
        methods,
        isDirty,
        language,
        setLanguage,
        removeFaq,
        savingFaq,
        loadingFaq,
        saved,
        onSubmit,
    };
};
