import './contentLoader.css';
import { Loader } from '@mantine/core';

const ContentLoader = () => {
    return (
        <div className="loader">
            <Loader type="dots" color="var(--light-blue)" size={100} />
        </div>
    );
};

export default ContentLoader;
