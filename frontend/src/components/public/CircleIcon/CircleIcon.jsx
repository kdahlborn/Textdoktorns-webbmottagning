import './circleIcon.css';

const CircleIcon = ({ icon, color }) => {
    return <div className={`circle-icon circle-icon--${color}`}>{icon}</div>;
};

export default CircleIcon;
