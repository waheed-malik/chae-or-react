import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'; // make sure this has a getCurrentUser() method
import { login, logout } from "./store/authSlice";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is logged in
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData)); // using the actual login action
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mt-10">A blog app with Appwrite</h1>
    </div>
  );
}

export default App;
