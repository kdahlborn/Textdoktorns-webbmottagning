import { create } from 'zustand';
import { useAuthStore } from './useAuthStore';
import { getPage, getPages, updatePage } from '../services/pages.service';

export const usePageStore = create((set) => ({
    pages: [],
    page: null,
    loading: false,
    error: null,

    fetchPages: () => {
        set({ loading: true });
        const token = useAuthStore.getState().token;

        getPages()
            .then((res) => {
                set({
                    pages: res.data.pages,
                    error: null,
                });
            })
            .catch(() => {
                set({ error: true });
            })
            .finally(() => {
                set({ loading: false });
            });
    },

    fetchPage: (pageName) => {
        set({ loading: true });

        getPage(pageName)
            .then((res) => {
                set({
                    page: res.data.page,
                    error: null,
                });
            })
            .catch(() => {
                set({ error: true });
            })
            .finally(() => {
                set({ loading: false });
            });
    },

    updatePageContent: (pageName, content) => {
        set({ loading: true });

        return updatePage(pageName, content)
            .then((res) => {
                const updatedPage = res.data.page;

                set((state) => ({
                    pages: state.pages.map((p) =>
                        p.page === updatedPage.page ? updatedPage : p,
                    ),
                    page: updatedPage,
                    error: null,
                }));

                return updatedPage;
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                set({ loading: false });
            });
    },
}));
