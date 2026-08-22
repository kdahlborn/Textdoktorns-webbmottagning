import './formTextArea.css';
import { useFormContext } from 'react-hook-form';

const FormTextArea = ({ label, path, required = false }) => {
    const { register } = useFormContext();
    return (
        <label className="form-label">
            <p className="form-label-text">
                {label}
                {required && <span className="star">*</span>}
            </p>
            <textarea
                className="form-textarea"
                spellCheck="false"
                {...register(path, {
                    required: required ? `${label} is required` : false,
                })}
            ></textarea>
        </label>
    );
};

export default FormTextArea;
