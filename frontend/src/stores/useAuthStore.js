import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { login } from '../services/auth.service';

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            loading: false,
            error: null,

            loginAdmin: (credentials) => {
                set({ loading: true });

                return login(credentials)
                    .then((res) => {
                        set({
                            token: res.data.token,
                            error: null,
                        });

                        return res.data;
                    })
                    .catch((err) => {
                        set({ error: err.response.data.message });
                    })
                    .finally(() => {
                        set({ loading: false });
                    });
            },

            logout: () => {
                set({
                    token: null,
                    error: null,
                });
            },
        }),
        {
            name: 'auth-storage',
        },
    ),
);
