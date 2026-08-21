import { useFormContext } from 'react-hook-form';
import './formInput.css';

const FormInput = ({ label, path, type = 'text', required = false }) => {
    const { register } = useFormContext();
    return (
        <label className="form-label">
            <p className="form-label-text">
                {label}
                {required && <span className="star">*</span>}
            </p>
            <input
                type={type}
                autoComplete="off"
                className="form-input"
                {...register(path, {
                    required: required ? `${label} is required` : false,
                })}
            />
        </label>
    );
};

export default FormInput;
