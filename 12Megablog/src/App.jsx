import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'; // make sure this has a getCurrentUser() method
import { login, logout } from "./store/authSlice";
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom'
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

  return !loading ? (
    <div className='min-h-screen flex felx-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null
}

export default App;
