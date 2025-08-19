import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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
    <nav className="bg-gray-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          {/* <div className="text-2xl font-bold tracking-wide">MyApp</div> */}

          {/* Menu */}
          <div className="flex space-x-10" ref={menuRef}>
            {/** Product Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("product")}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Products <ChevronDown size={16} />
              </button>
              {openMenu === "product" && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <Link
                    to="/products/new"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setOpenDropdown(null)}
                    >
                    ➕ New Product
                  </Link>
                  <Link
                    to="/products/new"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setOpenDropdown(null)}
                    >
                    ❌ Delete Product
                  </Link>
                </div>
              )}
            </div>

            {/** Inventory Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("inventory")}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Inventory <ChevronDown size={16} />
              </button>
              {openMenu === "inventory" && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-lg p-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Check Product</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">View List / Qty</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Update Product (+/-)</a>
                </div>
              )}
            </div>

            {/** Invoices Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("invoices")}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Invoices <ChevronDown size={16} />
              </button>
              {openMenu === "invoices" && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-xl shadow-lg p-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Purchase Invoice</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Sell Invoice</a>
                </div>
              )}
            </div>

            {/** Dealer Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("dealer")}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Dealer <ChevronDown size={16} />
              </button>
              {openMenu === "dealer" && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded-xl shadow-lg p-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Add New Dealer</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Summary Dashboard</a>
                </div>
              )}
            </div>

            {/** Company Menu */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("company")}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                Company <ChevronDown size={16} />
              </button>
              {openMenu === "company" && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-gray-900 rounded-xl shadow-lg p-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Company Info</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-md">Settings</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
