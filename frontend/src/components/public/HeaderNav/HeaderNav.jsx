import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router';
import { Phone, Info, House } from 'lucide-react';
import './headerNav.css';
import Button from '../../Button/Button';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { Accordion } from '@mantine/core';

const HeaderNav = ({ onCloseDrawer = null }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const links = [
        {
            path: `/${language}`,
            label: 'home',
            icon: <House size={20} />,
        },
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

            {/* <Accordion
                styles={{
                    chevron: { display: 'none' },
                    label: { padding: '0' },
                }}
                variant="unstyled"
                className="header__language"
            >
                <Accordion.Item value="language">
                    <Accordion.Control
                        style={{
                            padding: '0',
                            width: '100%',
                        }}
                    >
                        <span className="language-control">
                            <Languages size={20} />
                            {capitalizeFirstLetter(language)}

                            <ChevronDown
                                className="language-control__chevron"
                                size={20}
                            />
                        </span>
                    </Accordion.Control>

                    <Accordion.Panel>
                        <LanguageSelector onCloseDrawer={onCloseDrawer} />
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion> */}
        </nav>
    );
};

export default HeaderNav;
