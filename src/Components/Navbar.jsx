import { Link } from "react-router-dom";

function Navbar() {
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

      {/* Button */}
      <button className="rounded-full bg-[#8B4A20] px-5 py-2 font-semibold text-white transition hover:bg-[#6F3816]">
        Order Now
      </button>

    </nav>
  );
}

export default Navbar;