import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tale4.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full shadow-md bg-white z-50">
      <nav className="p-4 flex items-center justify-between">
    
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="TaleTone Logo" className="h-10 w-10" />
          </Link>
          <Link to="/" className="text-xl font-bold">TaleTone</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className={`ri-menu-line text-2xl ${isOpen ? 'hidden' : 'block'}`}></i>
            <i className={`ri-close-line text-2xl ${isOpen ? 'block' : 'hidden'}`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex gap-8 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-lg block" to="/">Home</Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-lg block" to="/categories">Categories</Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-lg block" to="/shop">Shop</Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-lg block" to="/pages">Pages</Link>
          <Link className="hover:bg-gray-200 px-4 py-2 rounded-lg block" to="/blog">Blog</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2">
          <i className="ri-search-line absolute px-2 text-gray-500"></i>
          <input
            className="rounded-lg px-8 py-2 bg-gray-200 w-23 "
            type="text"
            placeholder="Search by keywords"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
