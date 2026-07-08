import api from './api';

export const getPages = () => {
    return api.get('/pages');
};

export const getPage = (pageName) => {
    return api.get(`/pages/${pageName}`);
};

export const updatePage = (pageName, data) => {
    return api.put(`/pages/${pageName}`, data);
};
