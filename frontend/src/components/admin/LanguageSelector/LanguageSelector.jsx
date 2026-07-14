import './languageSelector.css';
import Button from '../../Button/Button';

const LanguageSelector = ({ language, setLanguage }) => {
    const languages = ['sv', 'en', 'de', 'es', 'fr', 'ru'];
    return (
        <ul className="lang-selector">
            {languages.map((lang) => {
                return (
                    <li className="lang-selector__item">
                        <Button
                            key={lang}
                            text={lang}
                            className={
                                language === lang
                                    ? 'lang-btn active'
                                    : 'lang-btn'
                            }
                            onClick={() => setLanguage(lang)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default LanguageSelector;
