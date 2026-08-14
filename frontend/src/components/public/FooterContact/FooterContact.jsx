import { useTranslation } from 'react-i18next';
import './footerContact.css';

import { Mail, MapPin, Phone } from 'lucide-react';
import { usePageStore } from '../../../stores/usePageStore';

const FooterContact = ({ language }) => {
    const { t } = useTranslation();
    const contactPage = usePageStore((state) =>
        state.pages.find((p) => p.page === 'contact'),
    );
    const { email, phone, address } = contactPage.content.contactInfo;

    return (
        <ul className="contact-info footer__list">
            <h4 className="contact-info__title footer__subtitle">
                {t('footer.headings.contact')}
            </h4>
            <li className="footer__list-item contact-info__item">
                <a
                    href={`mailto:${email}`}
                    className="footer__link contact-info__link"
                >
                    {email}
                </a>
                <Mail size={20} color="var(--light-blue)" />
            </li>

            <li className="footer__list-item contact-info__item">
                <a
                    href={`tel:${phone}`}
                    className="footer__link contact-info__link"
                >
                    {phone}
                </a>
                <Phone size={20} color="var(--light-blue)" />
            </li>
            <li className="footer__list-item contact-info__item">
                <a
                    href="https://maps.app.goo.gl/X4VVAq5xC2V5C8os8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link contact-info__link"
                >
                    {address[language]}
                </a>
                <MapPin size={20} color="var(--light-blue)" />
            </li>
        </ul>
    );
};

export default FooterContact;
