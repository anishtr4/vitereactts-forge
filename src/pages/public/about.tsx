import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <div className="flex justify-center space-x-4">
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/about')}>About</Button>
        <Button onClick={() => navigate('/contact')}>Contact</Button>
      </div>
      <p className="text-lg mt-4">This is the about us page.</p>
    </div>
  );
};

export default About;
