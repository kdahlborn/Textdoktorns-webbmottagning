import LoginForm from '../../../components/admin/LoginForm/LoginForm';
import './authPage.css';
import { useState } from 'react';
import RegisterForm from '../../../components/admin/RegisterForm/RegisterForm';
import Button from '../../../components/global/Button/Button';
import logotype from '../../../assets/images/logotypes/textdoktorn.svg';
import { useAuthStore } from '../../../stores/useAuthStore';

const AuthPage = () => {
    const [mode, setMode] = useState('login');
    const clearError = useAuthStore((state) => state.clearError);

    const changeMode = (newMode) => {
        clearError();
        setMode(newMode);
    };

    return (
        <main className="auth-page page">
            <section className="auth-page__container">
                <img
                    src={logotype}
                    alt="Textdoktorn logotype"
                    className="auth-page__logotype"
                />
                {mode === 'login' ? (
                    <LoginForm />
                ) : (
                    <RegisterForm setMode={setMode} />
                )}

                <div className="auth-toggle">
                    <p className="auth-toggle__text">
                        {mode === 'login'
                            ? 'Har du inget konto?'
                            : 'Har du redan ett konto?'}
                    </p>
                    {mode === 'login' ? (
                        <Button
                            className="auth-toggle__btn"
                            onClick={() => changeMode('register')}
                        >
                            Registrera admin
                        </Button>
                    ) : (
                        <Button
                            className="auth-toggle__btn"
                            onClick={() => changeMode('login')}
                        >
                            Logga in
                        </Button>
                    )}
                </div>
            </section>
        </main>
    );
};

export default AuthPage;
