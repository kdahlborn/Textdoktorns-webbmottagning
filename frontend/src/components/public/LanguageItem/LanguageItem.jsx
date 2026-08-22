import { useLanguage } from '../../../hooks/useLanguage';
import Button from '../../global/Button/Button';
import './languageItem.css';

const LanguageItem = ({ item, onCloseDrawer, onCloseAccordion }) => {
    const { changeLanguage } = useLanguage();
    return (
        <li className="language-controller__item">
            <Button
                className="language-controller__btn"
                onClick={(e) => {
                    e.currentTarget.blur();

                    changeLanguage(item.code);
                    onCloseAccordion();
                    onCloseDrawer?.();
                }}
            >
                <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="flag-img"
                />
                <span className="language-controller__label">{item.label}</span>
            </Button>
        </li>
    );
};

export default LanguageItem;
