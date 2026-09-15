import { useForm } from 'react-hook-form';
import { useLanguageLinksStore } from '../stores/useLanguageLinksStore';
import { useEffect, useState } from 'react';

export const useLanguageLinksEditor = (languageLinks) => {
    const methods = useForm({
        defaultValues: {
            languageLinks,
        },
    });
    const { reset, formState, control } = methods;
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
        control,
        isDirty,
        saving,
        saved,
        onSubmit,
    };
};
