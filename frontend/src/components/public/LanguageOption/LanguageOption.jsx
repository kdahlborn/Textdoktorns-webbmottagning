import { useLanguage } from '../../../hooks/useLanguage';
import Button from '../../Button/Button';
import './languageOption.css';

const LanguageOption = ({ option, onCloseDrawer }) => {
    const { changeLanguage } = useLanguage();
    return (
        <li className="language-selector__item">
            <Button
                className="language-selector__btn"
                onClick={() => {
                    changeLanguage(option.code);
                    onCloseDrawer();
                }}
            >
                <img
                    src={option.img}
                    alt=""
                    aria-hidden="true"
                    className="flag-img"
                />
                <span className="language-selector__label">{option.label}</span>
            </Button>
        </li>
    );
};

export default LanguageOption;
