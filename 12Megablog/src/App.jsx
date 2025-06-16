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
          dispatch({ type: "LOGIN", payload: userData }); // adjust action as per your setup
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

  return !loading ? (
    <div className='min-h'></div>
  )
  if (loading) {
    return <h2>Loading...</h2>;
  }

 
}

export default App;
