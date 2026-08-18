import './contentLoader.css';
import { Loader } from '@mantine/core';

const ContentLoader = ({ className = '' }) => {
    return (
        <div className={`loader ${className}`}>
            <Loader type="dots" color="var(--light-blue)" size={100} />
        </div>
    );
};

export default ContentLoader;
