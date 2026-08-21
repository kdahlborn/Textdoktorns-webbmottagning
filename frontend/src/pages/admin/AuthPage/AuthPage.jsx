import LoginForm from '../../../components/admin/LoginForm/LoginForm';
import './authPage.css';
import Logo from '../../../assets/images/logotypes/textdoktorn.svg';
import { useState } from 'react';
import RegisterForm from '../../../components/admin/RegisterForm/RegisterForm';
import Button from '../../../components/Button/Button';
import logotype from '../../../assets/images/logotypes/textdoktorn.svg';

const AuthPage = () => {
    const [mode, setMode] = useState('login');

    return (
        <main className="auth-page page">
            <section className="auth-page__container">
                <img
                    src={logotype}
                    alt="Textdoktorn logotype"
                    className="auth-page__logotype"
                />
                {mode === 'login' ? <LoginForm /> : <RegisterForm />}

                <div className="auth-toggle">
                    <p className="auth-toggle__text">
                        {mode === 'login'
                            ? 'Har du inget konto?'
                            : 'Har du redan ett konto?'}
                    </p>
                    {mode === 'login' ? (
                        <Button
                            className="auth-toggle__btn"
                            onClick={() => setMode('register')}
                        >
                            Registrera admin
                        </Button>
                    ) : (
                        <Button
                            className="auth-toggle__btn"
                            onClick={() => setMode('login')}
                        >
                            Logga in
                        </Button>
                    )}
                </div>
            </section>
            {/* <AuthForm /> */}
        </main>
    );
};

export default AuthPage;
