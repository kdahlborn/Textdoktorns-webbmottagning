import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/sv" replace />,
    },
    {
        path: '/:lang',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
]);
