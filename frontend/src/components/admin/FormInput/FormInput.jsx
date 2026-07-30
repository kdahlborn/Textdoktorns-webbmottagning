import { useFormContext } from 'react-hook-form';
import './formInput.css';

const FormInput = ({ label, path }) => {
    const { register } = useFormContext();
    return (
        <label className="form__label">
            {label}
            <input
                autoComplete="off"
                className="form__input"
                {...register(path)}
            />
        </label>
    );
};

export default FormInput;
