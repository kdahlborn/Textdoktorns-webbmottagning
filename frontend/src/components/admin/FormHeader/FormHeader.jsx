import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';
import './formHeader.css';

const FormHeader = ({ language, setLanguage, isDirty, savingPage, saved }) => {
    return (
        <header className="form__header">
            <LanguageSelector language={language} setLanguage={setLanguage} />

            {(isDirty || savingPage || saved) && (
                <Button
                    icon={
                        savingPage ? (
                            <Loader color="white" size={20} type="dots" />
                        ) : saved ? (
                            <Check size={16} />
                        ) : (
                            <Save size={16} />
                        )
                    }
                    text={savingPage ? '' : saved ? 'Sparat!' : 'Spara'}
                    type="submit"
                    className={`save-btn ${saved && !savingPage && 'save-btn--saved'}`}
                />
            )}
        </header>
    );
};

export default FormHeader;
