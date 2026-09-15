import './dashboardCard.css';

import ContentLoader from '../../global/ContentLoader/ContentLoader';

const DashboardCard = ({ title, count, icon, color, desc, loading }) => {
    return (
        <article className="dashboard-card">
            {loading ? (
                <ContentLoader />
            ) : (
                <>
                    <section
                        className={`dashboard-card__icon-container dashboard-card__icon-container--${color}`}
                    >
                        {icon}
                    </section>

                    <section className="dashboard-card__info">
                        <h2 className="dashboard-card__title">{title}</h2>
                        <p className="dashboard-card__count">{count}</p>
                        <p className="dashboard-card__desc">{desc}</p>
                    </section>
                </>
            )}
        </article>
    );
};

export default DashboardCard;
