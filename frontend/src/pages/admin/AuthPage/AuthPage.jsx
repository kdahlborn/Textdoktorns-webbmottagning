import AuthForm from '../../../components/admin/AuthForm/AuthForm';
import './authPage.css';
import Logo from '../../../assets/images/logotypes/textdoktorn.svg';

const AuthPage = () => {
    return (
        <section className="auth-page page">
            {/* <img src={Logo} alt="Textdoktorn logotype" className="logotype" /> */}
            <AuthForm />
        </section>
    );
};

export default AuthPage;
