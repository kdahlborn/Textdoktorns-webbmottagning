import { useEffect } from 'react';
import Sidebar from '../../../components/admin/Sidebar/Sidebar';
import { useFaqStore } from '../../../stores/useFaqStore';
import { usePageStore } from '../../../stores/usePageStore';
import './dashboardPage.css';
import DashboardCard from '../../../components/admin/DashboardCard/DashboardCard';
import { Link } from 'react-router';
import { useLanguageLinksStore } from '../../../stores/useLanguageLinksStore';
import { File, CircleQuestionMark, Globe } from 'lucide-react';
import { colorsTuple } from '@mantine/core';

const DashboardPage = () => {
    const pages = usePageStore((state) => state.pages);
    const loadingPages = usePageStore((state) => state.loadingPages);

    const faqs = useFaqStore((state) => state.faqs);
    const loadingFaqs = useFaqStore((state) => state.loadingFaqs);

    const languageLinks = useLanguageLinksStore((state) => state.languageLinks);
    const loadingLanguageLinks = useLanguageLinksStore(
        (state) => state.loading,
    );

    const cards = [
        {
            title: 'Sidor',
            path: '/admin/pages',
            count: pages.length,
            desc: 'Hantera innehåll för sidor',
            icon: <File size={40} />,
            color: 'blue',
            loading: loadingPages,
        },
        {
            title: 'FAQ',
            path: '/admin/faqs',
            count: faqs.length,
            desc: 'Hantera vanliga frågor',
            icon: <CircleQuestionMark size={40} />,
            color: 'green',
            loading: loadingFaqs,
        },
        {
            title: 'Språklänkar',
            path: '/admin/language-links',
            count: pages.length,
            desc: 'Hantera språklänkar',
            icon: <Globe size={40} />,
            color: 'purple',
            loading: loadingLanguageLinks,
        },
    ];

    return (
        <main className="dashboard admin-main">
            <header className="dashboard__header admin-main__header">
                <h1 className="dashboard__title admin-main__title">Översikt</h1>
            </header>

            <section className="dashboard__content">
                {/* <Link to="/admin/pages">
                    <DashboardCard
                        label="Sidor"
                        count={pages.length}
                        icon={<File size={40} />}
                        loading={loadingPages}
                    />
                </Link>

                <Link to="/admin/faqs">
                    <DashboardCard
                        label="FAQ"
                        count={faqs.length}
                        icon={<CircleQuestionMark size={40} />}
                        loading={loadingFaqs}
                    />
                </Link>

                <Link to="/admin/language-links">
                    <DashboardCard
                        label="Språklänkar"
                        count={languageLinks.length}
                        icon={<Globe size={40} />}
                        loading={loadingLanguageLinks}
                    />
                </Link> */}
                {cards.map((card, index) => {
                    return (
                        <Link to={card.path}>
                            <DashboardCard
                                title={card.title}
                                count={card.count}
                                desc={card.desc}
                                icon={card.icon}
                                color={card.color}
                                loading={card.loading}
                            />
                        </Link>
                    );
                })}
            </section>
        </main>
    );
};

export default DashboardPage;
