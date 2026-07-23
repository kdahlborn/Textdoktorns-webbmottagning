import { useEffect, useState } from 'react';
import { useFaqStore } from '../../../stores/useFaqStore';
import './editFaqPage.css';
import FaqList from '../../../components/admin/FaqList/FaqList';
import Button from '../../../components/Button/Button';
import { Plus } from 'lucide-react';
import FaqEditor from '../../../components/admin/FaqEditor/FaqEditor';

const EditFaqPage = () => {
    const { faqs, fetchFaqs, addFaq } = useFaqStore();
    const [editFaq, setEditFaq] = useState(null);

    useEffect(() => {
        fetchFaqs();
    }, []);

    useEffect(() => {
        console.log(faqs);
    }, [faqs]);

    const newFaq = {
        question: {
            sv: '',
            en: '',
            de: '',
            es: '',
            fr: '',
            ru: '',
        },
        answer: {
            sv: '',
            en: '',
            de: '',
            es: '',
            fr: '',
            ru: '',
        },
    };

    return (
        <main className="faq-page admin-main">
            <header className="main-header">
                <h1 className="main-title">Redigera FAQ</h1>
            </header>

            <section className="faq-page__content">
                <section className="list-wrapper">
                    <header className="list-wrapper__header">
                        <h2 className="faq-page__title">Frågor</h2>
                        <Button
                            icon={<Plus size={16} strokeWidth={3} />}
                            text="Lägg till fråga"
                            className="add-faq-btn"
                            onClick={() => setEditFaq(newFaq)}
                        />
                    </header>
                    <FaqList faqs={faqs} setEditFaq={setEditFaq} />
                </section>
                {editFaq && (
                    <section className="editor-wrapper">
                        <FaqEditor faq={editFaq} />
                    </section>
                )}
            </section>
        </main>
    );
};

export default EditFaqPage;
