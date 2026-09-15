import './circleIcon.css';

const CircleIcon = ({ icon, color = 'blue' }) => {
    return <div className={`circle-icon circle-icon--${color}`}>{icon}</div>;
};

export default CircleIcon;
