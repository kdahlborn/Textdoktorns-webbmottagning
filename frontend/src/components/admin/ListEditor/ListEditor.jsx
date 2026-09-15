import FormInput from '../../global/FormInput/FormInput';
import './listEditor.css';
import Button from '../../global/Button/Button';
import { Plus, X } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ListEditor = ({
    path,
    language,
    addOrRemove = true,
    title = 'Punkter',
}) => {
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
            <h4 className="form__list-title">{title}</h4>
            {fields.map((field, index) => {
                return (
                    <li key={field.id} className="form__list-item">
                        <FormInput
                            key={`${path}-${index}-${language}`}
                            path={`${path}.${index}.${language}`}
                        />
                        {addOrRemove && (
                            <Button
                                icon={<X size={16} />}
                                onClick={() => remove(index)}
                                className="remove-item-btn"
                                type="submit"
                                title="Ta bort"
                            />
                        )}
                    </li>
                );
            })}
            {addOrRemove && (
                <Button
                    text="Lägg till"
                    icon={<Plus size={16} />}
                    onClick={addNewItem}
                    className="add-item-btn"
                />
            )}
        </ul>
    );
};

export default ListEditor;
