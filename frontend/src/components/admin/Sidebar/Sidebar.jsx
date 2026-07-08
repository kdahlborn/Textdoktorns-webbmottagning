import './sidebar.css';
import Logo from '../../../assets/images/logotypes/logotype-white.svg';
import { NavLink } from 'react-router';
import {
    CircleQuestionMark,
    File,
    FileQuestionMark,
    House,
    LogOut,
} from 'lucide-react';
import { useAuthStore } from '../../../stores/useAuthStore';
import Button from '../../Button/Button';

const Sidebar = () => {
    const logout = useAuthStore((state) => state.logout);

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
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav__link active' : 'nav__link'
                    }
                >
                    <House />
                    Översikt
                </NavLink>
                <section className="nav__content">
                    <h3 className="nav__title">INNEHÅLL</h3>
                    <NavLink
                        to="/admin/pages"
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        <File />
                        Sidor
                    </NavLink>
                    <NavLink
                        to="/admin/faqs"
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        <CircleQuestionMark />
                        FAQ
                    </NavLink>
                </section>
            </nav>

            <footer className="sidebar__footer">
                <Button
                    text="Logga ut"
                    icon={<LogOut />}
                    className="logout-btn"
                    onClick={logout}
                />
            </footer>
        </aside>
    );
};

export default Sidebar;
