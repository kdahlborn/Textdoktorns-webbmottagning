import { useEffect } from 'react';
import { useLanguageLinksStore } from '../../../stores/useLanguageLinksStore';
import './editLanguageLinksPage.css';
import ContentLoader from '../../../components/ContentLoader/ContentLoader';
import LanguageLinksEditor from '../../../components/admin/LanguageLinksEditor/LanguageLinksEditor';

const EditLanguageLinksPage = () => {
    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const loading = useLanguageLinksStore((state) => state.loading);
    // useEffect(() => {
    //     console.log(languageLinks);
    // }, [languageLinks]);

    if (loading) {
        return <ContentLoader />;
    }
    return (
        <main className="edit-language-links-page admin-main">
            <header className="edit-language-links-page__header admin-main__header">
                <h1 className="edit-language-links-page__title admin-main__title">
                    Redigera språklänkar
                </h1>
            </header>

            <LanguageLinksEditor languageLinks={languageLinks} />
        </main>
    );
};

export default EditLanguageLinksPage;
