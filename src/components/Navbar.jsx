
// Navbar.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md overflow-x-hidden">
      <div className="h-14 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">ShopEasy</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link to="/" className="text-gray-100 text-lg hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-100 text-lg hover:text-white">
            About
          </Link>
          <Link to="/products" className="text-gray-100 text-lg hover:text-white">
            Products
          </Link>
          <Link to="/contact" className="text-gray-100 text-lg hover:text-white">
            Contact
          </Link>
          <Link
            to="/cart"
            className="relative text-gray-100 text-2xl hover:text-white"
            aria-label="Cart"
          >
            <IoCart />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-white">
                {totalQty}
              </span>
            )}
          </Link>
          <button className="bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-200 transition">
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="sm:hidden bg-gray-800 flex flex-col items-center px-4 py-2 gap-3">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-gray-100 text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-gray-100 text-lg"
          >
            About
          </Link>
          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="text-gray-100 text-lg"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-gray-100 text-lg"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="text-gray-100 text-lg flex items-center gap-1 relative"
            aria-label="Cart"
          >
            <IoCart />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold text-white">
                {totalQty}
              </span>
            )}
          </Link>
          <button
            className="bg-white text-black px-4 py-1 rounded-2xl hover:bg-gray-200 transition w-[80px] text-left"
            onClick={() => setOpen(false)}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
