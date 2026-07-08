import AuthForm from '../../../components/admin/AuthForm/AuthForm';
import './authPage.css';
import Logo from '../../../assets/images/logotypes/textdoktorn.svg';

const AuthPage = () => {
    return (
        <section className="auth-page page">
            <AuthForm />
        </section>
    );
};

export default AuthPage;
