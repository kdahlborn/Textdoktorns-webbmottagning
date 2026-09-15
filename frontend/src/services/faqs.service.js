import api from './api';

// GET FAQ
export const getFaqs = () => {
    return api.get('/faqs');
};

// POST FAQ
export const createFaq = (faq) => {
    return api.post('/faqs', faq);
};

// PUT FAQ
export const updateFaq = (faqId, data) => {
    return api.put(`/faqs/${faqId}`, data);
};

// DELETE FAQ
export const removeFaq = (faqId) => {
    return api.delete(`/faqs/${faqId}`);
};
