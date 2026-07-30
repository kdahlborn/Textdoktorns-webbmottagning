import { createBrowserRouter, Navigate } from 'react-router';
import PublicLayout from '../Layouts/PublicLayout/PublicLayout';
import HomePage from '../pages/public/HomePage/HomePage';
import AboutPage from '../pages/public/AboutPage/AboutPage';
import ContactPage from '../pages/public/ContactPage/ContactPage';
import AuthPage from '../pages/admin/AuthPage/AuthPage';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from '../Layouts/AdminLayout/AdminLayout';
import DashboardPage from '../pages/admin/DashboardPage/DashboardPage';
import EditPagePage from '../pages/admin/EditPagePage/EditPagePage';
import EditFaqPage from '../pages/admin/EditFaqPage/EditFaqPage';

export const router = createBrowserRouter([
    // Public
    {
        path: '/',
        element: <Navigate to="/sv" replace />,
    },
    {
        path: '/:language',
        element: <PublicLayout />,
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

    // Admin
    {
        path: '/admin/login',
        element: <AuthPage />,
    },
    {
        path: '/admin',
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: 'pages',
                children: [
                    {
                        index: true,
                        element: <Navigate to="home" replace />,
                    },
                    {
                        path: ':pageName',
                        element: <EditPagePage />,
                    },
                ],
            },
            {
                path: 'faqs',
                element: <EditFaqPage />,
            },
        ],
    },
]);
