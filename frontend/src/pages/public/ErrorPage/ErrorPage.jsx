import { motion } from 'framer-motion';
import Button from '../../../components/global/Button/Button';
import { useNavigate } from 'react-router';

import './errorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <main className="error-page">
            <motion.div
                className="error-page__content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <span className="error-page__code">500</span>

                <h1 className="error-page__title">Oops...</h1>

                <p className="error-page__text">
                    Something seems to be wrong with this page.
                    <br />
                    Don't worry — we're looking into it.
                </p>

                <Button
                    className="error-page__button"
                    onClick={() => navigate('/')}
                >
                    Back to home
                </Button>
            </motion.div>
        </main>
    );
};

export default ErrorPage;
