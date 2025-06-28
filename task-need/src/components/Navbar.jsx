import React from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
       <div>
         <div className="navbar">
  <div className="navbar-start">
    <a className="text-xl">
    <img src={logo} alt="Logo" className="object-contain" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
  </div>
  <div className="navbar-end">
  </div>
 
</div>
<div>
    <ul className='flex gap-5 pl-3 text-lg py-3'>
        <li>হোম</li>
        <li>সেবা</li>
        <li>রিভিউ</li>
        <li>আমাদের সম্পর্কে</li>
        <li>যোগাযোগ</li>
    </ul>
</div>
       </div>

    );
};

export default Navbar;