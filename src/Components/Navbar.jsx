



import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

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
          to="/order-confirmation"
          className="text-gray-700 hover:text-[#8B4A20]"
        >
          Order Status
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

          <button
            onClick={() => setShowCart(!showCart)}
            className="relative text-2xl text-[#8B4A20]"
          >
            <FaShoppingCart />

            {/* Cart Count */}
            {cart.length > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cart.length}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 top-10 z-50 w-80 rounded-lg bg-white p-4 shadow-xl">

              <h3 className="mb-3 text-lg font-bold text-[#8B4A20]">
                Your Cart
              </h3>

              {cart.length === 0 ? (
                <p className="text-gray-500">
                  Your cart is empty ☕
                </p>
              ) : (
                <div className="space-y-3">

                  {cart.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b pb-2"
                    >

                      <div>
                        <p className="font-semibold text-gray-800">
                          {product.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          Rs. {product.price}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(product)}
                        className="text-sm font-medium text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

        </div>

        {/* Order Now */}
        <button className="rounded-full bg-[#8B4A20] px-5 py-2 font-semibold text-white transition hover:bg-[#6F3816]">
          Order Now
        </button>

      </div>

    </nav>
  );
}

export default Navbar;