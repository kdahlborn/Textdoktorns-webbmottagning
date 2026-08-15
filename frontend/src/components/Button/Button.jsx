import './button.css';

const Button = ({
    children,
    icon = null,
    text,
    className = '',
    onClick,
    type = 'button',
    title,
    disabled = false,
}) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            type={type}
            title={title}
            disabled={disabled}
        >
            {children}
            {icon}
            {text}
        </button>
    );
};

export default Button;
