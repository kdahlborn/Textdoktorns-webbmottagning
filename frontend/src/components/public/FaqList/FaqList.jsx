import { Accordion } from '@mantine/core';
import { motion } from 'framer-motion';
import './faqList.css';

const FaqList = ({ faqs, language }) => {
    return (
        <Accordion
            variant="separated"
            radius="10px"
            chevronIconSize={24}
            order={3}
            className="faq"
            classNames={{
                chevron: 'faq__chevron',
            }}
        >
            {faqs.map((faq, index) => (
                <Accordion.Item
                    key={faq.faqId}
                    value={String(faq.faqId)}
                    className="faq__item"
                >
                    <Accordion.Control className="faq__control">
                        <motion.span
                            className="faq__content"
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {faq.question[language]}
                        </motion.span>
                    </Accordion.Control>

                    <Accordion.Panel className="faq__panel">
                        {faq.answer[language]}
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default FaqList;
