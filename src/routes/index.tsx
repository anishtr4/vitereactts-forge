import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import PublicRoutes from './public';
import PrivateRoutes from './private';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/dashboard" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
