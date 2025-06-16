import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'; // make sure this has a getCurrentUser() method
import  {login, logout} from "./store/authSlice"
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is logged in
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch({ type: "LOGIN", payload: user }); // adjust action as per your setup
        } else {
          dispatch({ type: "LOGOUT" });
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
    <>
      <h1>A blog app with Appwrite</h1>
    </>
  );
}

export default App;
