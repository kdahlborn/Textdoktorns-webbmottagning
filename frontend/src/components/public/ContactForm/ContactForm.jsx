import './contactForm.css';
import { sendContactMessage } from '../../../services/contact.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../global/Button/Button';
import { Loader } from '@mantine/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Check, Send } from 'lucide-react';
import FormInput from '../../global/FormInput/FormInput';
import FormTextArea from '../../global/FormTextArea/FormTextArea';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const ContactForm = ({ language, content }) => {
    const { t } = useTranslation();

    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null,
    });

    const methods = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const { formState, handleSubmit } = methods;

    const onSubmit = (data) => {
        setStatus({ loading: true, success: null, error: null });

        return sendContactMessage(data)
            .then((res) => {
                setStatus({
                    success: res.data.message || 'Message sent!',
                    error: null,
                });
                // toast.success(res.data.message || 'Message sent!');

                methods.reset();
            })
            .catch((err) => {
                setStatus({
                    success: null,
                    error:
                        err.response?.data?.message || 'Could not send message',
                });
                // toast.error(
                //     err.response?.data?.message || 'Could not send message',
                // );
            })
            .finally(() => {
                setStatus((prev) => ({
                    ...prev,
                    loading: false,
                }));
            });
    };

    // Tar bort form message efter 5 sek
    useEffect(() => {
        if (!status.success && !status.error) return;

        const timer = setTimeout(() => {
            setStatus((prev) => ({
                ...prev,
                success: null,
                error: null,
            }));
        }, 5000);

        return () => clearTimeout(timer);
    }, [status.success, status.error]);

    return (
        <FormProvider {...methods}>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="contact-form__title">
                    {content.heading[language]}
                </h4>

                <section className="contact-form__content">
                    <div className="form-status">
                        {(status.success || status.error) && (
                            <motion.p
                                className={`form-message ${
                                    status.success
                                        ? 'form-message--success'
                                        : 'form-message--error'
                                }`}
                                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 20,
                                }}
                            >
                                {status.success ? (
                                    <>
                                        <Check size={20} strokeWidth={3} />
                                        <span>{status.success}</span>
                                    </>
                                ) : (
                                    <span>{status.error}</span>
                                )}
                            </motion.p>
                        )}
                    </div>
                    <FormInput
                        label={t('contact.form.name')}
                        path="name"
                        required
                    />
                    <FormInput
                        label={t('contact.form.email')}
                        path="email"
                        type="email"
                        required
                    />

                    <FormTextArea
                        label={t('contact.form.message')}
                        path="message"
                        required
                    />

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
                </section>
            </form>
        </FormProvider>
    );
};

export default ContactForm;
