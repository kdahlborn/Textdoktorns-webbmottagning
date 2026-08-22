import Button from '../../global/Button/Button';
import './loginForm.css';
import { useAuthStore } from '../../../stores/useAuthStore';
import { useNavigate } from 'react-router';
import { Loader } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../global/FormInput/FormInput';

const LoginForm = () => {
    const navigate = useNavigate();
    const loginAdmin = useAuthStore((state) => state.loginAdmin);
    const loading = useAuthStore((state) => state.loading);
    const error = useAuthStore((state) => state.error);
    const methods = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = ({ username, password }) => {
        loginAdmin({ username, password }).then((res) => {
            if (res.success) navigate('/admin');
        });
    };

    return (
        <FormProvider {...methods}>
            <form
                className="auth-form login-form"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                {error && <p className="error-msg">{error}</p>}
                <FormInput label="Användarnamn" path="username" required />
                <FormInput
                    label="Lösenord"
                    path="password"
                    type="password"
                    required
                />
                <Button type={loading ? 'button' : 'submit'}>
                    {loading ? <Loader type="dots" /> : 'Login'}
                </Button>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
