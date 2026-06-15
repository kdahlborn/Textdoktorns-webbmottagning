import './header.css';
import Logo from '../../assets/images/logotypes/textdoktorn.svg';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    return (
        <header className="header">
            <Link to={`/${lang}`}>
                <img src={Logo} alt="Textdoktorn logotype" />
            </Link>
            <p>{t('navbar.contact')}</p>
        </header>
    );
};

export default Header;
