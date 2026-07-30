import { useForm } from 'react-hook-form';
import { usePageStore } from '../stores/usePageStore';
import { useEffect, useState } from 'react';

export const usePageEditor = (page) => {
    const methods = useForm();
    const { register, handleSubmit, reset, formState } = methods;
    const { isDirty } = formState;
    const { savingPage, updatePageContent } = usePageStore();
    const [language, setLanguage] = useState('sv');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (page) {
            reset(page.content);
        }
    }, [page, reset]);

    const onSubmit = (data) => {
        updatePageContent(page.page, data).then((res) => {
            console.log(res);

            if (res.success) {
                setSaved(true);

                setTimeout(() => {
                    setSaved(false);
                }, 3000);
            }
        });
    };

    return {
        methods,
        isDirty,
        savingPage,
        language,
        setLanguage,
        saved,
        onSubmit,
    };
};
