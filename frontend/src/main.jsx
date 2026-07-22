import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import './i18n';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    </StrictMode>,
);
