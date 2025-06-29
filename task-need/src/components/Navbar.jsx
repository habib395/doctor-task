import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <nav className="w-full shadow-md sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 items-center text-lg">
          <li><AnchorLink offset={50} href="#home">হোম</AnchorLink></li>
          <li><AnchorLink offset={50} href="#help">সেবা</AnchorLink></li>
          <li><AnchorLink offset={50} href="#review">রিভিউ</AnchorLink></li>
          <li><AnchorLink offset={50} href="#about">আমাদের সম্পর্কে</AnchorLink></li>
          <li><AnchorLink offset={50} href="#contact">যোগাযোগ</AnchorLink></li>
          <li className="text-blue-400 font-semibold text-xl">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="btn btn-primary px-3 py-1"><Link to="/bmi">BMI Calculator</Link></li>
          <li className="btn btn-primary px-3 py-1">Download app</li>
          <li>
            <button className="btn btn-primary px-3 py-1">
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="btn btn-ghost text-white">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-500" />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col gap-3 px-6 pb-4 lg:hidden text-lg">
          <AnchorLink offset={50} href="#home">হোম</AnchorLink>
          <AnchorLink offset={50} href="#help">সেবা</AnchorLink>
          <AnchorLink offset={50} href="#review">রিভিউ</AnchorLink>
          <AnchorLink offset={50} href="#about">আমাদের সম্পর্কে</AnchorLink>
          <AnchorLink offset={50} href="#contact">যোগাযোগ</AnchorLink>
          <Link to="/faq" className="text-blue-400 font-semibold text-xl">FAQ</Link>
          <Link to="/bmi" className="btn btn-primary">BMI Calculator</Link>
          <button className="btn btn-primary">Download app</button>
          <Link to="/login" className="btn btn-primary">Login</Link>
          <button onClick={toggleDarkMode} className="btn btn-ghost text-white">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-500" />}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;