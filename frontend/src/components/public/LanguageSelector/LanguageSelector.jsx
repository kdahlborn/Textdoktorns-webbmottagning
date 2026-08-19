import './languageSelector.css';
import seFlag from '../../../assets/images/flags/flag-swe.png';
import enFlag from '../../../assets/images/flags/flag-gb.png';
import deFlag from '../../../assets/images/flags/flag-ger.png';
import esFlag from '../../../assets/images/flags/flag-spain.png';
import frFlag from '../../../assets/images/flags/flag-france.png';
import ruFlag from '../../../assets/images/flags/flag-rus.png';
import LanguageOption from '../LanguageOption/LanguageOption';
import Button from '../../Button/Button';
import { X } from 'lucide-react';
import { useParams } from 'react-router';

const LanguageSelector = ({ setDisplayLangSelector, onCloseDrawer = null }) => {
    const { language } = useParams();
    const languageOptions = [
        {
            code: 'sv',
            label: 'På svenska, tack!',
            img: seFlag,
        },
        {
            code: 'en',
            label: 'In english, please!',
            img: enFlag,
        },
        {
            code: 'de',
            label: 'Auf Deutsch, bitte!',
            img: deFlag,
        },
        {
            code: 'es',
            label: '¡En español, por favor!',
            img: esFlag,
        },
        {
            code: 'fr',
            label: "En français, s'il vous plaît !",
            img: frFlag,
        },
        {
            code: 'ru',
            label: 'По-русски, пожалуйста',
            img: ruFlag,
        },
    ];

    return (
        <div className="language-selector">
            <Button
                className="close-btn"
                onClick={() => setDisplayLangSelector(false)}
            >
                <X size={16} />
            </Button>
            <ul className="language-selector__list">
                {languageOptions.map((option) => {
                    if (option.code !== language) {
                        return (
                            <LanguageOption
                                key={`option-${option.code}`}
                                option={option}
                                onCloseDrawer={onCloseDrawer}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default LanguageSelector;
