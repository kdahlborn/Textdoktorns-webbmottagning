import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import './i18n';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </HelmetProvider>
    </StrictMode>,
);
