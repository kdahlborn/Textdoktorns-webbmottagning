import Button from '../../Button/Button';
import './authForm.css';
import Logo from '../../../assets/images/logotypes/textdoktorn.svg';
import { useState } from 'react';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { error, login, loading } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        login({ username, password }).then((res) => {
            if (res?.success) navigate('/admin');
        });
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <img src={Logo} alt="Textdoktorn logotype" className="logotype" />
            <label className="auth-form__label">
                Användarnamn
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    className="auth-form__input"
                />
            </label>
            <label className="auth-form__label">
                Lösenord
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    className="auth-form__input"
                />
            </label>
            <Button text="Logga in" type="submit" />
        </form>
    );
};

export default AuthForm;
