import React, { ReactNode } from 'react';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        {/* Add header content here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default PublicLayout;
