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
    ariaLabel = null,
}) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            type={type}
            title={title}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
            {icon}
            {text}
        </button>
    );
};

export default Button;
