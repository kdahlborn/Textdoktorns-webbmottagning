import api from './api';

export const getLanguageLinks = () => {
    return api.get('/language-links');
};

export const updateLanguageLinks = (data) => {
    return api.put('/language-links', data);
};
