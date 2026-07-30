import './dashboardCard.css';
import { File, CircleQuestionMark } from 'lucide-react';
import ContentLoader from '../../ContentLoader/ContentLoader';

const DashboardCard = ({ label, count, loading }) => {
    return (
        <article className="dashboard-card">
            {loading ? (
                <ContentLoader />
            ) : (
                <>
                    <section
                        className={`dashboard-card__icon-container ${
                            label === 'Sidor'
                                ? 'dashboard-card__icon-container--blue'
                                : 'dashboard-card__icon-container--green'
                        }`}
                    >
                        {label === 'Sidor' ? (
                            <File size={40} color="var(--primary-blue)" />
                        ) : (
                            <CircleQuestionMark
                                size={40}
                                color="var(--green)"
                            />
                        )}
                    </section>

                    <section className="dashboard-card__info">
                        <h2 className="dashboard-card__title">{label}</h2>
                        <p className="dashboard-card__count">{count}</p>
                        <p className="dashboard-card__desc">
                            {label === 'Sidor'
                                ? 'Hanterar innehåll på webbplatsens sidor'
                                : 'Hanterar vanliga frågor'}
                        </p>
                    </section>
                </>
            )}
        </article>
    );
};

export default DashboardCard;
