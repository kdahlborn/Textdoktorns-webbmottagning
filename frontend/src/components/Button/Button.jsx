import './button.css';

const Button = ({
    children,
    icon = null,
    text,
    className = '',
    onClick,
    type = 'button',
    title,
}) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            type={type}
            title={title}
        >
            {children}
            {icon}
            {text}
        </button>
    );
};

export default Button;
