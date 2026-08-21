import './header.css';
import logotype from '../../../assets/images/logotypes/textdoktorn.svg';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import HeaderNav from '../HeaderNav/HeaderNav';
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import Button from '../../Button/Button';
import { useDisclosure } from '@mantine/hooks';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import LanguageController from '../LanguageController/LanguageController';

const Header = () => {
    const { t } = useTranslation();
    const { language } = useParams();
    const [displayLangSelector, setDisplayLangSelector] = useState(false);
    const [opened, { toggle, close }] = useDisclosure(false);

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

                <Button
                    className={`header__menu-btn ${opened ? 'header__menu-btn--active' : ''}`}
                    onClick={toggle}
                    aria-label="Toggle menu"
                >
                    <span></span>
                </Button>

                <MenuDrawer opened={opened} onClose={close} />

                <div className="header__desktop-menu">
                    <HeaderNav
                        setDisplayLangSelector={setDisplayLangSelector}
                    />
                    <span className="header__line"></span>
                    <LanguageController />
                </div>
            </div>
        </header>
    );
};

export default Header;
