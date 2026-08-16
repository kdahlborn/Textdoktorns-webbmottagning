import './contactForm.css';
import { sendContactMessage } from '../../../services/contact.service';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

const ContactForm = ({ language, content }) => {
    const { t } = useTranslation();

    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null,
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data) => {
        setStatus({ loading: true, success: null, error: null });

        return sendContactMessage(data)
            .then((res) => {
                setStatus({
                    success: res.data.message || 'Message sent!',
                    error: null,
                });

                reset();
            })
            .catch((err) => {
                setStatus({
                    success: null,
                    error:
                        err.response?.data?.message || 'Could not send message',
                });
            })
            .finally(() => {
                setStatus({ loading: false });
            });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <h4 className="contact-form__title">{content.heading[language]}</h4>

            <section className="contact-form__content">
                <label className="contact-form__label">
                    <p className="contact-form__label-text">
                        {t('contact.form.name')} <span className="star">*</span>
                    </p>

                    <input
                        type="text"
                        className="contact-form__input form__input"
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <span className="contact-form__field-error">
                            Name is required
                        </span>
                    )}
                </label>
                <label className="contact-form__label">
                    <p className="contact-form__label-text">
                        {t('contact.form.email')}{' '}
                        <span className="star">*</span>
                    </p>

                    <input
                        type="text"
                        className="contact-form__input form__input"
                        {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                    />
                    {errors.email && (
                        <span className="contact-form__field-error">
                            Enter a valid e-mail address
                        </span>
                    )}
                </label>
                <label className="contact-form__label">
                    <p className="contact-form__label-text">
                        {t('contact.form.message')}{' '}
                        <span className="star">*</span>
                    </p>

                    <textarea
                        className="contact-form__textarea form__textarea"
                        {...register('message', { required: true })}
                    />
                    {errors.message && (
                        <span className="contact-form__field-error">
                            Message is required
                        </span>
                    )}
                </label>

                <Button
                    className="contact-form__btn"
                    type="submit"
                    disabled={status.loading}
                >
                    {status.loading ? (
                        <Loader type="dots" />
                    ) : (
                        <>
                            {t('contact.form.submit')} <Send />
                        </>
                    )}
                </Button>

                {status.success && (
                    <p className="contact-form__message contact-form__message--green">
                        {status.success}
                    </p>
                )}
                {status.error && (
                    <p className="contact-form__message contact-form__message--red">
                        {status.error}
                    </p>
                )}
            </section>
        </form>
    );
};

export default ContactForm;
