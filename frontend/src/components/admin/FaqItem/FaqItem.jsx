import './faqItem.css';
import { X } from 'lucide-react';

const FaqItem = ({ faq, editFaq, setEditFaq }) => {
    return (
        <li
            className={`faqs-list__item ${editFaq === faq && 'faqs-list__item--active'}`}
            onClick={() => setEditFaq(faq)}
        >
            {faq.question.sv}
        </li>
    );
};

export default FaqItem;
