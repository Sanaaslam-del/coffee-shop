import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#3B2418]">

      {/* ================= HEADER ================= */}
      <section className="px-6 py-16 text-center md:py-20">

        <span className="rounded-full bg-[#F3E2C9] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#8B4A20]">
          Our Menu
        </span>

        <h1 className="mt-5 font-serif text-5xl font-bold md:text-6xl">
          Delicious Coffee
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[#6B5142]">
          Discover our freshly prepared coffee, refreshing
          cold drinks, and delicious treats.
        </p>

      </section>


      {/* ================= CATEGORY BUTTONS ================= */}
      <section className="border-y border-[#EADCC8] bg-white px-6 py-6">

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">

          <button className="rounded-full bg-[#8B4A20] px-6 py-2.5 text-sm font-semibold text-white">
            All
          </button>

          <button className="rounded-full border border-[#8B4A20] px-6 py-2.5 text-sm font-semibold text-[#8B4A20] transition hover:bg-[#8B4A20] hover:text-white">
            Hot Coffee
          </button>

          <button className="rounded-full border border-[#8B4A20] px-6 py-2.5 text-sm font-semibold text-[#8B4A20] transition hover:bg-[#8B4A20] hover:text-white">
            Cold Coffee
          </button>

          <button className="rounded-full border border-[#8B4A20] px-6 py-2.5 text-sm font-semibold text-[#8B4A20] transition hover:bg-[#8B4A20] hover:text-white">
            Desserts
          </button>

        </div>

      </section>


      {/* ================= MENU ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-[#8B4A20]">
              Our Selection
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              Coffee & Drinks
            </h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-[#8B4A20]"></div>

          </div>


          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            <MenuCard
              image="/cap.png"
              name="Cappuccino"
              description="Rich espresso with steamed milk and creamy foam."
              price="$3.50"
            />

            <MenuCard
              image="/ice.png"
              name="Iced Coffee"
              description="Refreshing chilled coffee served over ice."
              price="$2.80"
            />

            <MenuCard
              image="/moc.png"
              name="Mocha"
              description="Smooth espresso blended with chocolate and milk."
              price="$3.60"
            />

            <MenuCard
              image="/espe.png"
              name="Espresso"
              description="Strong and rich classic Italian espresso."
              price="$2.20"
            />

            <MenuCard
              image="/ca.png"
              name="Cafe Latte"
              description="Smooth espresso combined with steamed milk."
              price="$3.20"
            />

            <MenuCard
              image="/am.png"
              name="Americano"
              description="Espresso combined with hot water."
              price="$2.50"
            />

            <MenuCard
              image="/car.png"
              name="Caramel Macchiato"
              description="Espresso with steamed milk and sweet caramel."
              price="$4.00"
            />

            <MenuCard
              image="/coffee.png"
              name="Coffee Frappe"
              description="Cold blended coffee with a creamy finish."
              price="$4.20"
            />

          </div>

        </div>

      </section>


      {/* ================= SPECIAL OFFER ================= */}
      <section className="px-6 pb-16">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#8B4A20] px-8 py-10 text-center text-white md:flex-row md:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-[#F3D9BE]">
              Special Offer
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold">
              20% Off Your First Order
            </h2>

            <p className="mt-2 text-white/80">
              Enjoy your favorite coffee at a special price.
            </p>

          </div>

          <Link
            to="/orders"
            className="rounded-lg bg-white px-7 py-3 font-semibold text-[#8B4A20] hover:bg-[#FFF8E7]"
          >
            Order Now
          </Link>

        </div>

      </section>

    </div>
  );
}


function MenuCard({ image, name, description, price }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#EADCC8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover"
      />

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-3">

          <h3 className="font-serif text-xl font-bold">
            {name}
          </h3>

          <span className="whitespace-nowrap font-bold text-[#8B4A20]">
            {price}
          </span>

        </div>


        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-[#6B5142]">
          {description}
        </p>


        {/* Button */}
        <button className="mt-auto w-full rounded-lg bg-[#8B4A20] py-3 text-sm font-semibold text-white transition hover:bg-[#6F3816]">
          Add to Order
        </button>

      </div>

    </div>
  );
}

export default Menu;