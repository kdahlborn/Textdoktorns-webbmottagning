import CircleIcon from '../CircleIcon/CircleIcon';
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
            icon: <Newspaper size={40} />,
            color: 'red',
        },
        web: {
            icon: <Globe size={40} />,
            color: 'light-blue',
        },
        career: {
            icon: <BriefcaseBusiness size={40} />,
            color: 'purple',
        },
        products: {
            icon: <ClipboardList size={40} />,
            color: 'yellow',
        },
    };
    // console.log(id);
    return (
        <article className="text-type-card">
            <CircleIcon icon={icons[id].icon} color={icons[id].color} />

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
