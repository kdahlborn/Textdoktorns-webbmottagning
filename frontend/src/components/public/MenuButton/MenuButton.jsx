import './menuButton.css';

const MenuButton = ({ checked }) => {
    return (
        <div className="header__menu-btn-container">
            <input type="checkbox" className="header__menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="header__label">
                <span></span>
            </label>
        </div>
    );
};

export default MenuButton;
