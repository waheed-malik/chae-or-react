import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (authentication && !isLoggedIn) {
      navigate('/login'); // redirect to login if not authenticated
    }
  }, [authentication, isLoggedIn, navigate]);

  // if authentication is required but user is not logged in, don't render children
  if (authentication && !isLoggedIn) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
