import { useEffect } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import { useFaqStore } from '../../../stores/useFaqStore';
import { usePageStore } from '../../../stores/usePageStore';
import './dashboardPage.css';
import DashboardCard from '../../../components/admin/DashboardCard/DashboardCard';
import { Link } from 'react-router';

const DashboardPage = () => {
    const { pages, fetchPages, loadingPage } = usePageStore();
    const { faqs, fetchFaqs, loadingFaqs } = useFaqStore();

    useEffect(() => {
        if (pages.length === 0) fetchPages();
        fetchFaqs();
    }, []);

    return (
        <main className="dashboard admin-main">
            <header className="dashboard__header admin-main__header">
                <h1 className="dashboard__title admin-main__title">Översikt</h1>
            </header>

            <section className="dashboard__content">
                <Link to="/admin/pages">
                    <DashboardCard
                        label="Sidor"
                        count={pages.length}
                        loading={loadingPage}
                    />
                </Link>
                <Link to="/admin/faqs">
                    <DashboardCard
                        label="FAQ"
                        count={faqs.length}
                        loading={loadingFaqs}
                    />
                </Link>
            </section>
        </main>
    );
};

export default DashboardPage;
