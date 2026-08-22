import { useParams } from 'react-router';
import './contactPageInfo.css';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';
import CircleIcon from '../CircleIcon/CircleIcon';
import { motion } from 'motion/react';

const ContactPageInfo = ({ info }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const { email, phone, address } = info;

    return (
        <ul className="contact-page-info">
            {[
                {
                    icon: <Mail />,
                    title: 'E-mail',
                    content: (
                        <a
                            href={`mailto:${email}`}
                            className="contact-page-info__link"
                        >
                            {email}
                        </a>
                    ),
                },
                {
                    icon: <Phone />,
                    title: t('contact.info.phone'),
                    content: (
                        <a
                            href={`tel:${phone}`}
                            className="contact-page-info__link"
                        >
                            {phone}
                        </a>
                    ),
                },
                {
                    icon: <MapPin />,
                    title: t('contact.info.address'),
                    content: (
                        <a
                            href="https://maps.app.goo.gl/X4VVAq5xC2V5C8os8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-page-info__link"
                        >
                            {address[language]}
                        </a>
                    ),
                },
            ].map((item, index) => (
                <motion.li
                    key={index}
                    className="contact-page-info__item"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <CircleIcon icon={item.icon} />
                    <h3 className="contact-page-info__title">{item.title}</h3>
                    {item.content}
                </motion.li>
            ))}
        </ul>
    );
};

export default ContactPageInfo;
