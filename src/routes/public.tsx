import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import Home from '@/pages/home';
import About from '@/pages/public/about';
import Contact from '@/pages/public/contact';
import LoginPage from '@/pages/public/login';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
    </Routes>
  );
};

export default PublicRoutes;
