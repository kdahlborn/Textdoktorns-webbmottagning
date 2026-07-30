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
    const { page, error, fetchPage } = usePageStore();
    const { pageName } = useParams();
    const isPageLoaded = page?.page === pageName;

    useEffect(() => {
        fetchPage(pageName);
    }, [pageName]);

    const editors = {
        home: HomeEditor,
        about: AboutEditor,
        contact: ContactEditor,
    };

    const Editor = editors[pageName];

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
            {!isPageLoaded ? (
                <ContentLoader />
            ) : Editor ? (
                <Editor page={page} />
            ) : null}
        </main>
    );
};

export default EditPagePage;
