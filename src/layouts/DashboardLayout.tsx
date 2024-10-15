import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/settings">Settings</Link>
            </li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
