import { useParams } from 'react-router';
import './homeHero.css';

const HomeHero = ({ content }) => {
    const { language } = useParams();

    return (
        <section className="home-hero">
            <div className="home-hero__content content-wrapper">
                <h1 className="home-hero__title">
                    {content.titleLines.map((title, index) => {
                        return (
                            <span key={`heroTitle-${index}-${language}`}>
                                {title[language]}
                            </span>
                        );
                    })}
                </h1>
            </div>
        </section>
    );
};

export default HomeHero;
