import FaqItem from '../FaqItem/FaqItem';
import './faqList.css';

const FaqList = ({ faqs, setEditFaq }) => {
    return (
        <ul className="faqs-list">
            {faqs.map((faq) => {
                return (
                    <FaqItem
                        key={faq.faqId}
                        faq={faq}
                        setEditFaq={setEditFaq}
                    />
                );
            })}
        </ul>
    );
};

export default FaqList;
