import './header.css';
import logotype from '../../../assets/images/logotypes/textdoktorn.svg';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import HeaderNav from '../HeaderNav/HeaderNav';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useState } from 'react';

const Header = () => {
    const { t } = useTranslation();
    const { language } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__content content-wrapper">
                <Link to={`/${language}`}>
                    <img
                        src={logotype}
                        className="header__logotype"
                        alt="textdoktorn logotype"
                    />
                </Link>
                <HeaderNav language={language} setIsOpen={setIsOpen} />
                {isOpen && (
                    <LanguageSelector
                        language={language}
                        setIsOpen={setIsOpen}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;
