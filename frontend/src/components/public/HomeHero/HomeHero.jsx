import { useParams } from 'react-router';
import './homeHero.css';
import { motion } from 'motion/react';

const HomeHero = ({ content }) => {
    const { language } = useParams();

    return (
        <section className="home-hero">
            <div className="home-hero__content content-wrapper">
                <h1 className="home-hero__title">
                    {content.titleLines.map((title, index) => {
                        return (
                            <motion.span
                                key={`heroTitle-${index}-${language}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.5,
                                    ease: 'easeOut',
                                }}
                            >
                                {title[language]}
                            </motion.span>
                        );
                    })}
                </h1>
            </div>
        </section>
    );
};

export default HomeHero;
