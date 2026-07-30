import './homeHero.css';

const HomeHero = ({ content, language }) => {
    return (
        <section className="home-hero">
            <div className="home-hero__content content-wrapper">
                <h1 className="home-hero__title">
                    {content.titleLines.map((title) => {
                        return <span>{title[language]}</span>;
                    })}
                </h1>
            </div>
        </section>
    );
};

export default HomeHero;
