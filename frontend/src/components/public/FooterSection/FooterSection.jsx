import LanguageLinksList from '../LanguageLinksList/LanguageLinksList';
import './footerSection.css';
import { Link, useParams } from 'react-router';
import logotype from '../../../assets/images/logotypes/logotype-white.svg';
import FooterContact from '../FooterContact/FooterContact';
import { useTranslation } from 'react-i18next';

const FooterSection = () => {
    const { language } = useParams();
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__content content-wrapper">
                <LanguageLinksList language={language} />

                <FooterContact language={language} />

                <Link
                    className="footer__home-link"
                    to={`/${language}`}
                    aria-label="To home page"
                >
                    <img
                        src={logotype}
                        alt="textdoktorn logotype"
                        className="footer__img"
                    />
                </Link>
                <p className="footer__copyright">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default FooterSection;
