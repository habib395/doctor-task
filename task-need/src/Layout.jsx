import React from 'react';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div className='dark:bg-white dark:text-black'>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </div>
    );
};

export default Layout;