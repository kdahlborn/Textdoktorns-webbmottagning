import { useEffect } from 'react';
import { usePageStore } from '../../../stores/usePageStore';
import './homePage.css';
import { useParams } from 'react-router';
import HomeHero from '../../../components/public/HomeHero/HomeHero';

const HomePage = () => {
    const { language } = useParams();
    const page = usePageStore((state) =>
        state.pages.find((p) => p.page === 'home'),
    );
    const content = page.content;

    useEffect(() => {
        console.log(page);
    }, [page]);

    return (
        <div className="page page--home">
            <HomeHero content={content.hero} language={language} />
        </div>
    );
};

export default HomePage;
