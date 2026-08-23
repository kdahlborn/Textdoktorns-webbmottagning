import { useEffect, useState } from 'react';
import { useFaqStore } from '../../../stores/useFaqStore';
import './editFaqPage.css';
import FaqList from '../../../components/admin/FaqList/FaqList';
import Button from '../../../components/global/Button/Button';
import { Plus } from 'lucide-react';
import FaqEditor from '../../../components/admin/FaqEditor/FaqEditor';
import ContentLoader from '../../../components/global/ContentLoader/ContentLoader';
import { AnimatePresence, motion } from 'motion/react';

const EditFaqPage = () => {
    const { faqs, fetchFaqs, loadingFaqs } = useFaqStore();
    const [editFaq, setEditFaq] = useState(null);

    useEffect(() => {
        if (faqs.length === 0) fetchFaqs();
    }, []);

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
        <main className="edit-faq-page admin-main">
            <header className="edit-faq-page__header admin-main__header">
                <h1 className="edit-faq-page__title admin-main__title">
                    Redigera FAQ
                </h1>
            </header>

            <section className="edit-faq-page__content">
                {loadingFaqs ? (
                    <ContentLoader />
                ) : (
                    <>
                        <section className="list-wrapper">
                            <header className="list-wrapper__header">
                                <h2 className="edit-faq-page__title">Frågor</h2>
                                <Button
                                    className="add-faq-btn"
                                    onClick={() => setEditFaq(newFaq)}
                                >
                                    <Plus size={16} strokeWidth={3} />
                                    Lägg till fråga
                                </Button>
                            </header>
                            <FaqList
                                faqs={faqs}
                                editFaq={editFaq}
                                setEditFaq={setEditFaq}
                            />
                        </section>
                        <AnimatePresence mode="wait">
                            {editFaq && (
                                <motion.section
                                    className="editor-wrapper"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <FaqEditor
                                        faq={editFaq}
                                        setEditFaq={setEditFaq}
                                    />
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </section>
        </main>
    );
};

export default EditFaqPage;
