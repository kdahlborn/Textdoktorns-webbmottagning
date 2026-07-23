import './faqItem.css';
import { X } from 'lucide-react';

const FaqItem = ({ faq, setEditFaq }) => {
    return (
        <li className="faqs-list__item" onClick={() => setEditFaq(faq)}>
            {faq.question.sv}
        </li>
    );
};

export default FaqItem;
