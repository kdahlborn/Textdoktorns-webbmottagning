import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';
import './formHeader.css';
import SaveButton from '../SaveButton/SaveButton';

const FormHeader = ({ language, setLanguage, isDirty, savingPage, saved }) => {
    return (
        <header className="form__header">
            <LanguageSelector language={language} setLanguage={setLanguage} />

            <SaveButton loading={savingPage} saved={saved} isDirty={isDirty} />
        </header>
    );
};

export default FormHeader;
