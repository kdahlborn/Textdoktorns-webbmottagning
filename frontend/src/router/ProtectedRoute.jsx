import { Navigate } from 'react-router';
import { useAuthStore } from '../stores/useAuthStore';

const ProtectedRoute = ({ children }) => {
    const token = useAuthStore((state) => state.token);

    return token ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
