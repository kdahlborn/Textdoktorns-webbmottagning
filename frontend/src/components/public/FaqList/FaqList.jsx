import { useState } from 'react';
import './faqList.css';
import Button from '../../Button/Button';
import { ChevronDown } from 'lucide-react';
import { Accordion } from '@mantine/core';

const FaqList = ({ faqs, language }) => {
    const [openIndex, setOpenIdnex] = useState(false);
    const toggleAccordion = (index) => {
        setOpenIdnex(openIndex === index ? null : index);
    };
    console.log('FAQS:', faqs);

    const faqItems = faqs.map((faq) => (
        <Accordion.Item
            key={faq.faqId}
            value={faq.question[language]}
            className="faq__item"
        >
            <Accordion.Control className="faq__control">
                <span className="faq__content">{faq.question[language]}</span>
            </Accordion.Control>
            <Accordion.Panel className="faq__panel">
                {faq.answer[language]}
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            FAQ LIST
            <Accordion
                variant="separated"
                radius="10px"
                chevronIconSize={24}
                order={3}
                defaultValue="FAQ"
                className="faq"
                classNames={{ chevron: 'faq__chevron' }}
            >
                {faqItems}
            </Accordion>
        </>
    );
};

export default FaqList;
