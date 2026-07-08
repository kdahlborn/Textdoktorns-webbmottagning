import { useEffect } from 'react';
import { usePageStore } from '../../../stores/usePageStore';
import './editPagePage.css';
import { useParams } from 'react-router';
import { NavLink } from 'react-router';
import { CircleQuestionMark, House, Phone } from 'lucide-react';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { useForm } from 'react-hook-form';
import HomeEditor from '../../../components/admin/HomeEditor/HomeEditor';

const EditPagePage = () => {
    const { page, loading, error, fetchPage } = usePageStore();
    const { pageName } = useParams();

    useEffect(() => {
        fetchPage(pageName);
    }, [pageName]);
    // useEffect(() => {
    //     console.log(page);
    // }, [page]);

    const editors = {
        home: HomeEditor,
    };

    const Editor = editors[pageName];

    return (
        <section className="edit-page-page admin-page">
            <header className="page-header">
                <h1 className="page-title">
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

            {Editor ? <Editor page={page} /> : null}
        </section>
    );
};

export default EditPagePage;
