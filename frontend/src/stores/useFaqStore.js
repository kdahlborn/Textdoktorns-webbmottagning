import { create } from 'zustand';
import * as faqsService from '../services/faqs.service';

export const useFaqStore = create((set) => ({
    faqs: [],
    loadingFaqs: false,
    savingFaq: false,
    error: null,
    faqsFetched: false,

    fetchFaqs: () => {
        set({ loadingFaqs: true });

        return faqsService
            .getFaqs()
            .then((res) => {
                set({
                    faqs: res.data.faqs,
                    error: null,
                    faqsFetched: true,
                });
            })
            .catch((err) => {
                set({
                    error: err.response?.data?.message ?? 'Could not get FAQs',
                });
            })
            .finally(() => {
                set({ loadingFaqs: false });
            });
    },

    addFaq: (data) => {
        set({ savingFaq: true });

        return faqsService
            .createFaq(data)
            .then((res) => {
                set((state) => ({
                    faqs: [...state.faqs, res.data.faq],
                    error: null,
                }));

                return res.data;
            })
            .catch(() => {
                set({ error: true });
            })
            .finally(() => {
                set({ savingFaq: false });
            });
    },

    updateFaq: (faqId, data) => {
        set({ savingFaq: true });

        return faqsService
            .updateFaq(faqId, data)
            .then((res) => {
                const updatedFaq = res.data.faq;

                set((state) => ({
                    faqs: state.faqs.map((faq) =>
                        faq.faqId === updatedFaq.faqId ? updatedFaq : faq,
                    ),
                    error: null,
                }));

                return res.data;
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                set({ savingFaq: false });
            });
    },

    removeFaq: (faqId) => {
        return faqsService
            .removeFaq(faqId)
            .then((res) => {
                set((state) => ({
                    faqs: state.faqs.filter((faq) => faq.faqId !== faqId),
                    error: null,
                }));
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            });
    },
}));
