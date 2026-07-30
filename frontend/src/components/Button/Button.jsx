import './button.css';

const Button = ({
    children,
    icon = null,
    text,
    className,
    onClick,
    type = 'button',
}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {children}
            {icon}
            {text}
        </button>
    );
};

export default Button;
