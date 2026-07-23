import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export const useFaqEditor = (faq) => {
    const methods = useForm();
    const { register, handleSubmit, reset, formState } = methods;
    const { isDirty } = formState;
    const [language, setLanguage] = useState('sv');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (faq) {
            reset(faq);
        }
    }, [faq]);

    const onSubmit = (data) => {
        // updatePageContent(page.page, data).then((res) => {
        //     console.log(res);
        //     if (res.success) {
        //         setSaved(true);
        //         setTimeout(() => {
        //             setSaved(false);
        //         }, 3000);
        //     }
        // });
    };

    return {
        methods,
        isDirty,
        language,
        setLanguage,
        saved,
        onSubmit,
    };
};
