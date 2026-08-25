import './languageController.css';
import seFlag from '../../../assets/images/flags/flag-swe.png';
import enFlag from '../../../assets/images/flags/flag-gb.png';
import deFlag from '../../../assets/images/flags/flag-ger.png';
import esFlag from '../../../assets/images/flags/flag-spain.png';
import frFlag from '../../../assets/images/flags/flag-france.png';
import ruFlag from '../../../assets/images/flags/flag-rus.png';
import { useParams } from 'react-router';
import { Accordion } from '@mantine/core';
import { Languages, ChevronDown } from 'lucide-react';
import { capitalizeFirstLetter } from '../../../utils/strings';
import LanguageItem from '../LanguageItem/LanguageItem';
import { useState } from 'react';

const LanguageController = ({ onCloseDrawer = null }) => {
    const { language } = useParams();
    const [value, setValue] = useState(null);
    const languageItems = [
        {
            code: 'sv',
            label: 'På svenska, tack!',
            img: seFlag,
        },
        {
            code: 'en',
            label: 'In English, please!',
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
        <Accordion
            styles={{
                chevron: { display: 'none' },
                label: { padding: '0' },
            }}
            variant="unstyled"
            className="language-controller"
            value={value}
            onChange={setValue}
        >
            <Accordion.Item value="language">
                <Accordion.Control className="language-controller__control">
                    <span className="language-controller__content">
                        <Languages className="lang-icon" size={20} />
                        {capitalizeFirstLetter(language)}

                        <ChevronDown
                            className="language-control__chevron"
                            size={20}
                        />
                    </span>
                </Accordion.Control>

                <Accordion.Panel className="language-controller__panel">
                    <ul className="language-controller__list">
                        {languageItems
                            .filter((item) => item.code !== language)
                            .map((item) => (
                                <LanguageItem
                                    key={item.code}
                                    item={item}
                                    onCloseDrawer={onCloseDrawer}
                                    onCloseAccordion={() => setValue(null)}
                                />
                            ))}
                    </ul>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default LanguageController;
