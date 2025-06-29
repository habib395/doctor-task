import React, { useState } from 'react';
import Sidebar from './Sidebar';
import logo from "../assets/logo.png";
import QuickAccessModal from './QuickAccessModal';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Top Navbar */}
      <div className="navbar px-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-24 object-contain" />
        </div>

        {/* Hamburger for small screens */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost text-xl">
            <HiMenu />
          </button>
        </div>

        {/* Nav Actions - Hidden on mobile, shown on md+ */}
        <div className="hidden lg:flex gap-3 items-center">
          <button className="btn btn-primary">Home IR_Test</button>
          <button className="btn btn-primary">Create Appointment</button>
          <QuickAccessModal />
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-10 z-[1] w-52 p-2 shadow bg-base-100 rounded-box">
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><a>Settings</a></li>
            <li><Link to='/'>Logout</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-3 flex flex-col gap-2">
          <button className="btn btn-primary w-full">Home IR_Test</button>
          <button className="btn btn-primary w-full">Create Appointment</button>
          <QuickAccessModal />
          <div className="flex items-center gap-2 mt-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="flex flex-col text-sm">
              <Link to='/dashboard'>Dashboard</Link>
              <a>Settings</a>
              <Link to='/'>Logout</Link>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;