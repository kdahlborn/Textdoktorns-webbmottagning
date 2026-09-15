import FaqItem from '../FaqItem/FaqItem';
import './faqList.css';

const FaqList = ({ faqs, editFaq, setEditFaq }) => {
    return (
        <ul className="faqs-list">
            {faqs.map((faq) => {
                return (
                    <FaqItem
                        key={faq.faqId}
                        faq={faq}
                        editFaq={editFaq}
                        setEditFaq={setEditFaq}
                    />
                );
            })}
        </ul>
    );
};

export default FaqList;
