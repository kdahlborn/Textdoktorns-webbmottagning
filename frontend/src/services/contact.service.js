import api from './api';

// POST send message
export const sendContactMessage = (data) => {
    return api.post('/contact', data);
};
