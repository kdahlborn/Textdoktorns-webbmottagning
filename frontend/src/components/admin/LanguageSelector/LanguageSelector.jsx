import './languageSelector.css';
import Button from '../../Button/Button';

const LanguageSelector = ({ language, setLanguage }) => {
    const languages = ['sv', 'en', 'de', 'es', 'fr', 'ru'];
    return (
        <section className="lang-selector">
            {languages.map((lang) => {
                return (
                    <Button
                        key={lang}
                        text={lang}
                        className={
                            language === lang ? 'lang-btn active' : 'lang-btn'
                        }
                        onClick={() => setLanguage(lang)}
                    />
                );
            })}
        </section>
    );
};

export default LanguageSelector;
