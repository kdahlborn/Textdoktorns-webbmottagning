import { create } from 'zustand';
import { useAuthStore } from './useAuthStore';
import { getPage, getPages, updatePage } from '../services/pages.service';

export const usePageStore = create((set) => ({
    pages: [],
    page: null,
    loadingPage: false,
    savingPage: false,
    error: null,

    fetchPages: () => {
        set({ loadingPage: true });

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
                set({ loadingPage: false });
            });
    },

    fetchPage: (pageName) => {
        set({
            loadingPage: true,
            page: null,
        });

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
                set({ loadingPage: false });
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
                    page: updatedPage,
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
