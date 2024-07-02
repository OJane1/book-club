import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='outlet-container'>
      <Outlet />
      </div>
    </>
  );
};

export default Layout;