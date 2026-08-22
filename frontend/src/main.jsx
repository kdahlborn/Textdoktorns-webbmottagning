import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import './i18n';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MantineProvider>
            <Toaster position="top-center" />
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>,
);
