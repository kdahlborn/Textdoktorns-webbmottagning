import { FormProvider, useForm } from 'react-hook-form';
import './registerForm.css';
import { useAuthStore } from '../../../stores/useAuthStore';
import FormInput from '../../global/FormInput/FormInput';
import Button from '../../global/Button/Button';
import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import RegSuccess from '../RegSuccess/RegSuccess';

const RegisterForm = ({ setMode }) => {
    const registerAdmin = useAuthStore((state) => state.registerAdmin);
    const loading = useAuthStore((state) => state.loading);
    const error = useAuthStore((state) => state.error);
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const methods = useForm({
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            registrationKey: '',
        },
    });

    const onSubmit = ({
        username,
        password,
        confirmPassword,
        registrationKey,
    }) => {
        registerAdmin(
            { username, password, confirmPassword },
            registrationKey,
        ).then((res) => {
            if (res.success) setRegisterSuccess(true);
            console.log(res);
        });
    };

    useEffect(() => {
        if (registerSuccess) {
            setTimeout(() => {
                setMode('login');
            }, 2000);
        }
    }, [registerSuccess]);

    if (registerSuccess) return <RegSuccess />;

    return (
        <FormProvider {...methods}>
            <form
                className="auth-form register-form"
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
                <FormInput
                    label="Upprepa lösenord"
                    path="confirmPassword"
                    type="password"
                    required
                />
                <FormInput
                    label="Registreringsnyckel"
                    path="registrationKey"
                    required
                />
                <Button type={loading ? 'button' : 'submit'}>
                    {loading ? <Loader type="dots" /> : 'Registrera admin'}
                </Button>
            </form>
        </FormProvider>
    );
};

export default RegisterForm;
