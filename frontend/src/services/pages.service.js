import api from './api';

export const getPages = () => {
    return api.get('/pages');
};

export const updatePage = (pageName, data) => {
    return api.put(`/pages/${pageName}`, data);
};
