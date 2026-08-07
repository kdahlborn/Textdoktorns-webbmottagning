import './textTypeCard.css';
import {
    Newspaper,
    Globe,
    BriefcaseBusiness,
    ClipboardList,
} from 'lucide-react';

const TextTypeCard = ({ title, items, id, language }) => {
    const icons = {
        communication: {
            icon: <Newspaper size={40} color="var(--red)" />,
            color: 'red',
        },
        web: {
            icon: <Globe size={40} color="var(--light-blue)" />,
            color: 'light-blue',
        },
        career: {
            icon: <BriefcaseBusiness size={40} color="var(--purple)" />,
            color: 'purple',
        },
        products: {
            icon: <ClipboardList size={40} color="var(--yellow)" />,
            color: 'yellow',
        },
    };
    // console.log(id);
    return (
        <article className="text-type-card">
            <div
                className={`text-type-card__icon text-type-card__icon--${icons[id].color}`}
            >
                {icons[id].icon}
            </div>

            <h4 className="text-type-card__title">{title}</h4>

            <ul className="text-type-card__list">
                {items.map((item, index) => {
                    return (
                        <li
                            key={`textTypeItem-${index}-${language}`}
                            className="text-type-card__item"
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default TextTypeCard;
