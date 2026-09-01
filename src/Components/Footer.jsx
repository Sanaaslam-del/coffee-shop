import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#3B2418] text-[#FFF8E7]">

      {/* ================= FOOTER MAIN ================= */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="font-serif text-2xl font-bold">
              ☕ Coffehsgsjgjs
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#EADCC8]">
              A simple and powerful coffee management system
              designed to make your coffee shop easier to manage.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#EADCC8]">

              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/menu"
                className="transition hover:text-white"
              >
                Menu
              </Link>

              <Link
                to="/preorder"
                className="transition hover:text-white"
              >
                Preorder
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* Services */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#EADCC8]">

              <p>☕ Coffee Management</p>

              <p>🛒 Order Management</p>

              <p>📋 Menu Management</p>

              <p>📊 Business Reports</p>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="flex flex-col gap-3 text-sm text-[#EADCC8]">

              <p>📍 123 Coffee Street</p>

              <p>📞 +92 300 1234567</p>

              <p>✉ coffee@example.com</p>

              <p>🕐 Mon - Sun: 8:00 AM - 10:00 PM</p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-t border-[#6B5142]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-[#D8C2AC] md:flex-row md:px-10">

          <p>
            © 2026 Coffee Management System. All rights reserved.
          </p>

          <p>
            Made with ☕ for coffee lovers
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;