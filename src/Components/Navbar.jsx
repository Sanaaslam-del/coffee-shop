import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-3 shadow-sm">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Coffee Management System"
          className="h-14 w-auto"
        />
      </Link>

      {/* Links */}
      <div className="flex gap-8">

        <Link
          to="/"
          className="text-gray-700 hover:text-[#8B4A20]"
        >
          Home
        </Link>

        <Link
          to="/menu"
          className="text-gray-700 hover:text-[#8B4A20]"
        >
          Menu
        </Link>

        <Link
          to="/preorder"
          className="text-gray-700 hover:text-[#8B4A20]"
        >
          PreOrder
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 hover:text-[#8B4A20]"
        >
          Contact
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Cart */}
        <div className="relative">

          <Link
            to="/orderconfirmation"
            className="relative text-2xl text-[#8B4A20]"
          >
            <FaShoppingCart />

            {/* Cart Count */}
            {cart.length > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cart.length}
              </span>
            )}
          </Link>

        </div>

        {/* Order Now */}
        <Link
          to="/preorder"
          className="rounded-full bg-[#8B4A20] px-5 py-2 font-semibold text-white transition hover:bg-[#6F3816]"
        >
          Order Now
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;