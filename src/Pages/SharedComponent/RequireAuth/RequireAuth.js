import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error);
    return toast.error(error);
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
