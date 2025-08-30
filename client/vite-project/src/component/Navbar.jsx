import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
  <nav className="bg-gray-100 text-gray-800 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">

      {/* LEFT SECTION - MENUS */}
      <div className="flex space-x-10">

        {/* Product Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Products <ChevronDown size={16} />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link
              to="/products/new"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            >
              ➕ New Product
            </Link>
            <Link
              to="/products/update"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            >
              ❌ Delete Product
            </Link>
          </div>
        </div>

        {/* Inventory Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Inventory <ChevronDown size={16} />
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Check Product</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">View List / Qty</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Update Product (+/-)</a>
          </div>
        </div>

        {/* Invoices Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Invoices <ChevronDown size={16} />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Purchase Invoice</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Sell Invoice</a>
          </div>
        </div>

        {/* Dealer Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Dealer <ChevronDown size={16} />
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Add New Dealer</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Summary Dashboard</a>
          </div>
        </div>

        {/* Company Menu */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Company <ChevronDown size={16} />
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white text-gray-900 rounded-xl shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Company Info</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 rounded-md">Settings</a>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - SEARCHBAR */}
      {/* <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-72 rounded-md 
                     border border-gray-300 
                     text-gray-700 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
        <svg
          className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
      </div> */}
      <SearchBar />
    </div>
  </div>
</nav>


  );
};

export default Navbar;
