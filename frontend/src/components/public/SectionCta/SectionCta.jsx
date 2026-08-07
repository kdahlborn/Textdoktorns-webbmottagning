import { Link } from 'react-router';
import './sectionCta.css';
import { useTranslation } from 'react-i18next';

const SectionCta = ({ icon, path, btnText, children }) => {
    const { t } = useTranslation();
    return (
        <article className="section-cta">
            <span className="material-symbols-outlined section-cta__icon">
                {icon}
            </span>
            {children}
            <Link className="btn" to={path}>
                {btnText}
            </Link>
        </article>
    );
};

export default SectionCta;
