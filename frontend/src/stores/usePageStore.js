import { create } from 'zustand';
import { useAuthStore } from './useAuthStore';
import { getPages, updatePage } from '../services/pages.service';

export const usePageStore = create((set) => ({
    pages: [],
    loadingPages: false,
    savingPage: false,
    error: null,

    fetchPages: () => {
        set({ loadingPages: true });

        getPages()
            .then((res) => {
                set({
                    pages: res.data.pages,
                    error: null,
                });
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                set({ loadingPages: false });
            });
    },

    updatePageContent: (pageName, content) => {
        set({ savingPage: true });

        return updatePage(pageName, content)
            .then((res) => {
                const updatedPage = res.data.page;

                set((state) => ({
                    pages: state.pages.map((p) =>
                        p.page === updatedPage.page ? updatedPage : p,
                    ),
                    error: null,
                }));

                return res.data;
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                setTimeout(() => {
                    set({ savingPage: false });
                }, 1500);
            });
    },
}));
