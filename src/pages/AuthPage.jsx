import React from 'react';
import Auth from '../components/Auth/Auth';
import { useAuth } from '../contexts/AuthContextProvider';

const AuthPage = () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

export default AuthPage;
