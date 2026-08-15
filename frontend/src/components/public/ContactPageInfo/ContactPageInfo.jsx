import { useParams } from 'react-router';
import './contactPageInfo.css';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';
import CircleIcon from '../CircleIcon/CircleIcon';

const ContactPageInfo = ({ info }) => {
    const { language } = useParams();
    const { t } = useTranslation();
    const { email, phone, address } = info;

    return (
        <ul className="contact-page-info">
            <li className="contact-page-info__item">
                <CircleIcon icon={<Mail />} color={'blue'} />
                <h3 className="contact-page-info__title">E-mail</h3>
                <a href={`mailto:${email}`} className="contact-page-info__link">
                    {email}
                </a>
            </li>
            <li className="contact-page-info__item">
                <CircleIcon icon={<Phone />} />
                <h3 className="contact-page-info__title">
                    {t('contact.info.phone')}
                </h3>
                <a href={`phone:${phone}`} className="contact-page-info__link">
                    {phone}
                </a>
            </li>
            <li className="contact-page-info__item">
                <CircleIcon icon={<MapPin />} />
                <h3 className="contact-page-info__title">
                    {t('contact.info.address')}
                </h3>
                <a
                    href="https://maps.app.goo.gl/X4VVAq5xC2V5C8os8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page-info__link"
                >
                    {address[language]}
                </a>
            </li>
        </ul>
    );
};

export default ContactPageInfo;
