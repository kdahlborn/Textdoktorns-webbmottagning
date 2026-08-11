import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';
import './formHeader.css';
import SaveButton from '../SaveButton/SaveButton';

const FormHeader = ({ children }) => {
    return <header className="form__header">{children}</header>;
};

export default FormHeader;
