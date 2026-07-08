import './button.css';

const Button = ({ icon = null, text, className, onClick, type = 'button' }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {icon}
            {text}
        </button>
    );
};

export default Button;
