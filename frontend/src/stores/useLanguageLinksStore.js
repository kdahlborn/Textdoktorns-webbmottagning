import { create } from 'zustand';
import * as languageLinksService from '../services/languageLinks.service';

export const useLanguageLinksStore = create((set) => ({
    languageLinks: [],
    loading: false,
    saving: false,
    error: null,

    fetchLanguageLinks: () => {
        set({ loading: true });

        languageLinksService
            .getLanguageLinks()
            .then((res) => {
                set({
                    languageLinks: res.data.languageLinks,
                    error: null,
                });
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                set({ loading: false });
            });
    },

    updateLanguageLinks: (updates) => {
        set({ saving: true });

        return languageLinksService
            .updateLanguageLinks(updates)
            .then((res) => {
                set({
                    languageLinks: res.data.languageLinks,
                    error: null,
                });

                return res.data;
            })
            .catch((err) => {
                set({ error: err.response?.data?.message ?? 'Något gick fel' });
            })
            .finally(() => {
                setTimeout(() => {
                    set({ saving: false });
                }, 1500);
            });
    },
}));
