import './adminLayout.css';
import { Outlet, useMatches } from 'react-router';
import Sidebar from '../../components/admin/Sidebar/Sidebar';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
