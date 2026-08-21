import { FormProvider, useForm } from 'react-hook-form';
import './registerForm.css';
import { useAuthStore } from '../../../stores/useAuthStore';
import FormInput from '../FormInput/FormInput';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { useState } from 'react';

const RegisterForm = () => {
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

    const onSubmit = ({ username, password, registrationKey }) => {
        registerAdmin({ username, password }, registrationKey).then((res) => {
            if (res.success) setRegisterSuccess(true);
            console.log(res);
        });
    };

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
