import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#3B2418]">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B4A20]">
              Welcome to
            </p>

            <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl">
              Coffee
              <span className="block text-[#8B4A20]">
                Management System
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6B5142] md:text-lg">
              Manage your coffee shop easily. Track orders,
              manage your menu, and grow your business
              from one simple system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/menu"
                className="rounded-lg bg-[#8B4A20] px-7 py-3 font-semibold text-white transition hover:bg-[#6F3816]"
              >
                View Menu
              </Link>

              <Link
                to="/orders"
                className="rounded-lg border border-[#8B4A20] px-7 py-3 font-semibold text-[#8B4A20] transition hover:bg-[#8B4A20] hover:text-white"
              >
                Manage Orders
              </Link>

            </div>

          </div>


          {/* Right Side */}
          <div className="overflow-hidden rounded-3xl">

            <img
              src="Hero.png"
              alt="Coffee"
              className="h-[420px] w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= OVERVIEW ================= */}
      <section className="bg-white px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="rounded-full bg-[#F5E8D0] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#8B4A20]">
              Overview
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
              Today's Overview
            </h2>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#8B4A20]"></div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Orders */}
            <div className="rounded-2xl border border-[#EADCC8] bg-[#FFF8E7] p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E2C9] text-2xl">
                  ☕
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    120
                  </h3>

                  <p className="text-sm text-[#6B5142]">
                    Total Orders
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm text-green-600">
                ↑ 12.5%
                <span className="ml-2 text-[#6B5142]">
                  from yesterday
                </span>
              </p>

            </div>


            {/* Customers */}
            <div className="rounded-2xl border border-[#EADCC8] bg-[#FFF8E7] p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E2C9] text-2xl">
                  👥
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    85
                  </h3>

                  <p className="text-sm text-[#6B5142]">
                    Total Customers
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm text-green-600">
                ↑ 8.4%
                <span className="ml-2 text-[#6B5142]">
                  from yesterday
                </span>
              </p>

            </div>


            {/* Revenue */}
            <div className="rounded-2xl border border-[#EADCC8] bg-[#FFF8E7] p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E2C9] text-2xl">
                  $
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    $2,450
                  </h3>

                  <p className="text-sm text-[#6B5142]">
                    Total Revenue
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm text-green-600">
                ↑ 15.7%
                <span className="ml-2 text-[#6B5142]">
                  from yesterday
                </span>
              </p>

            </div>


            {/* Coffee */}
            <div className="rounded-2xl border border-[#EADCC8] bg-[#FFF8E7] p-6 shadow-sm">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E2C9] text-2xl">
                  🥤
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    320
                  </h3>

                  <p className="text-sm text-[#6B5142]">
                    Coffees Sold
                  </p>
                </div>

              </div>

              <p className="mt-5 text-sm text-green-600">
                ↑ 10.3%
                <span className="ml-2 text-[#6B5142]">
                  from yesterday
                </span>
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= POPULAR COFFEE ================= */}
      <section className="bg-[#FFF8E7] px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="rounded-full bg-[#F3E2C9] px-4 py-2 text-xs font-semibold uppercase text-[#8B4A20]">
              Menu
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl">
              Popular Coffee
            </h2>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <CoffeeCard
              image="/image1.png"
              name="Cappuccino"
              price="$3.50"
            />

            <CoffeeCard
              image="/image2.png"
              name="Iced Coffee"
              price="$2.80"
            />

            <CoffeeCard
              image="/image3.png"
              name="Mocha"
              price="$3.60"
            />

            <CoffeeCard
              image="/image4.png"
              name="Espresso"
              price="$2.20"
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#F3E2C9] px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#FFF8E7] px-8 py-12 text-center shadow-sm md:flex-row md:px-14 md:text-left">

            {/* Left Side */}
            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A20]">
                Coffee Management
              </p>

              <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
                Manage Your Coffee Shop
                <span className="block text-[#8B4A20]">
                  Smarter & Easier
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[#6B5142]">
                Our system helps you handle orders,
                customers, and menu in one place.
              </p>

            </div>


            {/* Button */}
            <div className="shrink-0">

              <Link
                to="/menu"
                className="inline-block rounded-lg bg-[#8B4A20] px-8 py-3 font-semibold text-white transition hover:bg-[#6F3816]"
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


function CoffeeCard({ image, name, price }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 text-center">

        <h3 className="font-serif text-xl font-bold">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-[#8B4A20]">
          {price}
        </p>

        <Link
          to="/menu"
          className="mt-4 block rounded-lg bg-[#8B4A20] py-2.5 text-sm font-semibold text-white hover:bg-[#6F3816]"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default Home;