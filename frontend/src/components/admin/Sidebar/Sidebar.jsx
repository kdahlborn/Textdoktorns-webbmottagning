import './sidebar.css';
import Logo from '../../../assets/images/logotypes/logotype-white.svg';
import { NavLink, Link } from 'react-router';
import {
    CircleQuestionMark,
    File,
    FileQuestionMark,
    House,
    LogOut,
    Globe,
    Monitor,
} from 'lucide-react';
import { useAuthStore } from '../../../stores/useAuthStore';
import Button from '../../Button/Button';

const Sidebar = ({ onCloseDrawer = null }) => {
    const logout = useAuthStore((state) => state.logout);
    const links = [
        {
            path: '/admin/pages',
            label: 'Sidor',
            icon: <File />,
        },
        {
            path: '/admin/faqs',
            label: 'FAQ',
            icon: <FileQuestionMark />,
        },
        {
            path: '/admin/language-links',
            label: 'Språklänkar',
            icon: <Globe />,
        },
    ];

    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <img
                    src={Logo}
                    alt="Textdoktorn logotype"
                    className="sidebar__img"
                />
                <h2 className="sidebar__title">Admin</h2>
            </header>

            <nav className="nav" aria-label="Admin navigation">
                <NavLink
                    onClick={onCloseDrawer}
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav__link nav__link--active' : 'nav__link'
                    }
                >
                    <House />
                    Översikt
                </NavLink>
                <section className="nav__content">
                    <h3 className="nav__title">INNEHÅLL</h3>
                    {links.map((link) => {
                        return (
                            <NavLink
                                onClick={onCloseDrawer}
                                key={link.label}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav__link nav__link--active'
                                        : 'nav__link'
                                }
                            >
                                {link.icon}
                                {link.label}
                            </NavLink>
                        );
                    })}
                </section>
            </nav>

            <footer className="sidebar__footer">
                <Link
                    onClick={onCloseDrawer}
                    className="btn sidebar__btn"
                    to="/"
                >
                    <Monitor />
                    Till hemsidan
                </Link>
                <Button
                    text="Logga ut"
                    icon={<LogOut />}
                    className="sidebar__btn"
                    onClick={logout}
                />
            </footer>
        </aside>
    );
};

export default Sidebar;
