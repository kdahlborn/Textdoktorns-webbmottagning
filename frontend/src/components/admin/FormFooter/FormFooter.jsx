import './formFooter.css';
import Button from '../../Button/Button';
import { Loader } from '@mantine/core';
import { Check, Save } from 'lucide-react';

const FormFooter = ({ isDirty, savingPage, saved }) => {
    return (
        <footer className="form__footer">
            <Button
                icon={
                    savingPage ? (
                        <Loader color="white" size={20} type="dots" />
                    ) : saved ? (
                        <Check size={20} />
                    ) : (
                        <Save size={20} />
                    )
                }
                text={
                    savingPage
                        ? ''
                        : saved
                          ? 'Ändringar sparade!'
                          : 'Spara ändringar'
                }
                type="submit"
                className={saved && !savingPage && 'btn--saved'}
            />
        </footer>
    );
};

export default FormFooter;
