import { create } from 'zustand';
import { createFaq, getFaqs } from '../services/faqs.service';

export const useFaqStore = create((set) => ({
    faqs: [],
    loadingFaqs: false,
    savingFaq: false,
    error: false,

    fetchFaqs: () => {
        set({ loadingFaqs: true });

        getFaqs()
            .then((res) => {
                set({
                    faqs: res.data.faqs,
                    error: false,
                });
            })
            .catch((err) => {
                set({ error: true });
            })
            .finally(() => {
                set({ loadingFaqs: false });
            });
    },

    addFaq: (data) => {
        set({ loading: true });

        createFaq(data)
            .then((res) => {
                set((state) => ({
                    faqs: [...state.faqs, res.data.faq],
                    error: false,
                }));
            })
            .catch(() => {
                set({ error: true });
            })
            .finally(() => {
                set({ loading: false });
            });
    },
}));
