import { useEffect } from 'react';
import { usePageStore } from '../../../stores/usePageStore';
import './editPagePage.css';
import { useParams } from 'react-router';
import { NavLink } from 'react-router';
import { CircleQuestionMark, House, Phone } from 'lucide-react';
import { capitalizeFirstLetter } from '../../../utils/strings';
import HomeEditor from '../../../components/admin/HomeEditor/HomeEditor';
import AboutEditor from '../../../components/admin/AboutEditor/AboutEditor';
import ContactEditor from '../../../components/admin/ContactEditor/ContactEditor';
import ContentLoader from '../../../components/ContentLoader/ContentLoader';

const EditPagePage = () => {
    const { pageName } = useParams();
    const error = usePageStore((state) => state.error);
    const loading = usePageStore((state) => state.loadingPages);
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === pageName),
    );

    const editors = {
        home: HomeEditor,
        about: AboutEditor,
        contact: ContactEditor,
    };

    const Editor = editors[pageName];

    if (loading) {
        return <ContentLoader />;
    }

    if (error) {
        return <p>Något gick fel.</p>;
    }

    if (!page) {
        return <p>Sidan hittades inte.</p>;
    }

    return (
        <main className="edit-page-page admin-main">
            <header className="edit-page-page__header admin-main__header">
                <h1 className="edit-page-page__title admin-main__title">
                    Redigera innehåll: {capitalizeFirstLetter(pageName)}
                </h1>

                <nav className="nav">
                    <NavLink
                        to="/admin/pages/home"
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        <House size={16} />
                        Home
                    </NavLink>
                    <NavLink
                        to="/admin/pages/about"
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        <CircleQuestionMark size={16} />
                        About
                    </NavLink>
                    <NavLink
                        to="/admin/pages/contact"
                        className={({ isActive }) =>
                            isActive ? 'nav__link active' : 'nav__link'
                        }
                    >
                        <Phone size={16} />
                        Contact
                    </NavLink>
                </nav>
            </header>

            <Editor page={page} />
        </main>
    );
};

export default EditPagePage;
