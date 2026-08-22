import './regSuccess.css';
import { UserRoundCheck } from 'lucide-react';

const RegSuccess = ({ setMode }) => {
    return (
        <div className="reg-success">
            <UserRoundCheck className="reg-success__icon" size={50} />
            <p className="reg-success__text">Admin registrerad!</p>
        </div>
    );
};

export default RegSuccess;
