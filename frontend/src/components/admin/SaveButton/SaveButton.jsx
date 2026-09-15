import './saveButton.css';
import Button from '../../global/Button/Button';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';

const SaveButton = ({ loading, saved, isDirty }) => {
    return (
        <Button
            icon={
                loading ? (
                    <Loader color="white" size={20} type="dots" />
                ) : saved ? (
                    <Check size={16} />
                ) : (
                    <Save size={16} />
                )
            }
            text={loading ? '' : saved ? 'Sparat!' : 'Spara'}
            type={isDirty ? 'submit' : 'button'}
            className={`save-btn ${
                saved && !loading
                    ? 'save-btn--saved'
                    : isDirty || loading
                      ? ''
                      : 'save-btn--faded'
            }`}
        />
    );
};

export default SaveButton;
