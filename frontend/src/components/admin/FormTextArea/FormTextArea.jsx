import './formTextArea.css';
import { useFormContext } from 'react-hook-form';

const FormTextArea = ({ label, path }) => {
    const { register } = useFormContext();
    return (
        <label className="form-label">
            {label}
            <textarea
                className="form-textarea"
                spellCheck="false"
                {...register(path)}
            ></textarea>
        </label>
    );
};

export default FormTextArea;
