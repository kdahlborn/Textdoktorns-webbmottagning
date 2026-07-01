import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            loading: false,
            error: null,

            login: (adminData) => {
                set({ loading: true });
                return axios
                    .post('http://localhost:8080/api/auth/login', adminData)
                    .then((res) => {
                        set({
                            token: res.data.token,
                            error: null,
                        });

                        return res.data;
                    })
                    .catch((err) => {
                        set({ error: err.response.data.message });
                        console.log(err.response);
                    })
                    .finally(() => {
                        set({ loading: false });
                    });
            },
        }),
        {
            name: 'auth-storage',
        },
    ),
);
