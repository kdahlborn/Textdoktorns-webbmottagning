import { useForm } from 'react-hook-form';
import { useLanguageLinksStore } from '../stores/useLanguageLinksStore';
import { useEffect, useState } from 'react';

export const useLanguageLinksEditor = (languageLinks) => {
    const methods = useForm();
    const { reset, formState } = methods;
    const { isDirty } = formState;

    const { saving, updateLanguageLinks } = useLanguageLinksStore();

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (languageLinks) {
            reset({ languageLinks });
        }
    }, [languageLinks, reset]);

    const onSubmit = (data) => {
        updateLanguageLinks(data.languageLinks).then((res) => {
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
        saving,
        saved,
        onSubmit,
    };
};
