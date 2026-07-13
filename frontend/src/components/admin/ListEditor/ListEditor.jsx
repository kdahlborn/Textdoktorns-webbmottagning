import FormInput from '../FormInput/FormInput';
import './listEditor.css';
import Button from '../../Button/Button';
import { Plus } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ListEditor = ({ path, language }) => {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: path,
    });

    const addNewItem = () => {
        append({
            sv: '',
            en: '',
            de: '',
            es: '',
            fr: '',
            ru: '',
        });
    };

    return (
        <ul className="form__list">
            <h4 className="form__list-title">Lista</h4>
            {fields.map((field, index) => {
                return (
                    <li key={field.id} className="form__list-item">
                        <FormInput
                            key={`${path}-${index}-${language}`}
                            path={`${path}.${index}.${language}`}
                        />
                        <Button
                            text="Ta bort"
                            onClick={() => remove(index)}
                            className="remove-item-btn"
                        />
                    </li>
                );
            })}
            <Button
                text="Lägg till ny punkt"
                icon={<Plus />}
                onClick={addNewItem}
                className="add-item-btn"
            />
        </ul>
    );
};

export default ListEditor;
