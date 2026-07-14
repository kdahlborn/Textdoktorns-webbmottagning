import './formTextArea.css';
import { useFormContext } from 'react-hook-form';

const FormTextArea = ({ label, path }) => {
    const { register } = useFormContext();
    return (
        <label className="form__label">
            {label}
            <textarea className="form__textarea" {...register(path)}></textarea>
        </label>
    );
};

export default FormTextArea;
