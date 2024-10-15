import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardPage from '@/pages/private/dashboard';
import PublicLayout from '@/layouts/PublicLayout';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />

    </Routes>
  );
};

export default PrivateRoutes;
