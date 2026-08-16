import { useState } from 'react';
import './faqList.css';
import Button from '../../Button/Button';
import { ChevronDown } from 'lucide-react';

const FaqList = ({ faqs, language }) => {
    const [openIndex, setOpenIdnex] = useState(false);
    const toggleAccordion = (index) => {
        setOpenIdnex(openIndex === index ? null : index);
    };

    return (
        <ul className="faqs">
            {faqs.map((faq, index) => {
                return (
                    <li
                        key={faq.faqId}
                        className={`faqs__item ${openIndex === index ? 'faqs__item--open' : ''}`}
                    >
                        <Button
                            className="faqs__btn"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="faqs__question">
                                {faq.question[language]}
                            </span>
                            <span className="faqs__chevron">
                                <ChevronDown
                                    size={30}
                                    color="var(--light-blue)"
                                />
                            </span>
                        </Button>
                        <article className="faqs__content">
                            <div className="faqs__content-inner">
                                <p className="faqs__answer">
                                    {faq.answer[language]}
                                </p>
                            </div>
                        </article>
                    </li>
                );
            })}
        </ul>
    );
};

export default FaqList;
