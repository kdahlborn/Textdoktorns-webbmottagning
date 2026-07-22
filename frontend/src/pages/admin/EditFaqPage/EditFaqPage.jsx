import { useEffect } from 'react';
import { useFaqStore } from '../../../stores/useFaqStore';
import './editFaqPage.css';

const EditFaqPage = () => {
    const { faqs, fetchFaqs } = useFaqStore();

    useEffect(() => {
        fetchFaqs();
    }, []);

    useEffect(() => {
        console.log(faqs);
    }, [faqs]);

    return (
        <main className="edit-faq-page admin-main">
            <header className="main-header">
                <h1 className="main-title">Redigera FAQ</h1>
            </header>
        </main>
    );
};

export default EditFaqPage;
