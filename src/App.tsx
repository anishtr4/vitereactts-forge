import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import AppRouter from '@/routes';
import './styles/globals.css';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
