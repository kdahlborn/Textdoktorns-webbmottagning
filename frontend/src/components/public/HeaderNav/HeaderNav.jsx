import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router';
import { Phone, Info, Languages } from 'lucide-react';
import './headerNav.css';
import Button from '../../Button/Button';

const HeaderNav = ({ setDisplayLangSelector, onCloseDrawer = null }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const links = [
        {
            path: `/${language}/contact`,
            label: 'contact',
            icon: <Phone size={20} />,
        },
        {
            path: `/${language}/about`,
            label: 'about',
            icon: <Info size={20} />,
        },
    ];

    return (
        <nav className="header__nav">
            {links.map((link) => {
                return (
                    <NavLink
                        onClick={onCloseDrawer}
                        key={`link-${link.label}`}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive
                                ? 'header__link header__link--active'
                                : 'header__link'
                        }
                    >
                        {link.icon}
                        {t(`header.nav.${link.label}`)}
                    </NavLink>
                );
            })}
            <Button
                className="header__link"
                onClick={() => setDisplayLangSelector((prev) => !prev)}
            >
                {<Languages size={20} />}
                {t(`header.languageSelector.current`)}
            </Button>
        </nav>
    );
};

export default HeaderNav;
