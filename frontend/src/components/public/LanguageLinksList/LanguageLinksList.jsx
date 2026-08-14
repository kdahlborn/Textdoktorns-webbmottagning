import { useTranslation } from 'react-i18next';
import { useLanguageLinksStore } from '../../../stores/useLanguageLinksStore';
import './languageLinksList.css';

const LanguageLinksList = ({ language }) => {
    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const { t } = useTranslation();

    return (
        <ul className="language-links footer__list">
            <h3 className="language-links__title footer__subtitle">
                {t('footer.headings.links')}
            </h3>

            {languageLinks.map((link) => {
                return (
                    <li
                        key={link.title}
                        className="language-links__item footer__list-item"
                    >
                        <a
                            href={link.url}
                            className="language-links__link footer__link"
                        >
                            {link.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default LanguageLinksList;
