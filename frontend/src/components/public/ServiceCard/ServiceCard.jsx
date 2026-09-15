import './serviceCard.css';
import { Lightbulb } from 'lucide-react';

const ServiceCard = ({ title, desc, items, note, id, language }) => {
    const icons = {
        diagnosis: {
            icon: 'cardiology',
            color: 'blue',
        },
        acute: {
            icon: 'pulse_alert',
            color: 'red',
        },
        healthCare: {
            icon: 'heart_check',
            color: 'green',
        },
    };
    return (
        <article className="service-card">
            <span
                className={`material-symbols-outlined service-card__icon service-card__icon--${icons[id].color}`}
            >
                {icons[id].icon}
            </span>

            <h4 className="service-card__title">{title}</h4>
            <p className="service-card__desc">{desc}</p>

            <ul className="service-card__list">
                {items.map((item, index) => {
                    return (
                        <li
                            key={`${item}-${index}-${language}`}
                            className="service-card__item"
                        >
                            <span className="material-symbols-outlined list-check">
                                check
                            </span>
                            {item}
                        </li>
                    );
                })}
            </ul>

            <footer className="service-card__footer">
                {<Lightbulb color="var(--primary-blue)" size={20} />}
                <p className="service-card__note">{note}</p>
            </footer>
        </article>
    );
};

export default ServiceCard;
