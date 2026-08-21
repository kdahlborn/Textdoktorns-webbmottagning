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

const LanguageController = ({ onCloseDrawer = null }) => {
    const { language } = useParams();
    const languageItems = [
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
        <Accordion
            styles={{
                chevron: { display: 'none' },
                label: { padding: '0' },
            }}
            variant="unstyled"
            className="language-controller"
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
                        {languageItems.map((item) => {
                            if (item.code !== language) {
                                return (
                                    <LanguageItem
                                        key={`option-${item.code}`}
                                        item={item}
                                        onCloseDrawer={onCloseDrawer}
                                    />
                                );
                            }
                        })}
                    </ul>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
        // <div className="language-controller">
        //     <ul className="language-controller__list">
        //         {languageOptions.map((option) => {
        //             if (option.code !== language) {
        //                 return (
        //                     <LanguageOption
        //                         key={`option-${option.code}`}
        //                         option={option}
        //                         onCloseDrawer={onCloseDrawer}
        //                     />
        //                 );
        //             }
        //         })}
        //     </ul>
        // </div>
    );
};

export default LanguageController;
