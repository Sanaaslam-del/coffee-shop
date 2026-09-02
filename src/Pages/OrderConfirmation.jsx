import { Link } from "react-router-dom";
import coffeeVideo from "../assets/videoo.mp4";

function OrderConfirmation() {

  // Get order from localStorage
  let order = null;

  try {
    const savedOrder = localStorage.getItem("order");

    if (savedOrder) {
      order = JSON.parse(savedOrder);
    }
  } catch (error) {
    order = null;
  }


  // =========================================
  // NO ORDER YET
  // =========================================

  if (!order) {
    return (
      <div className="min-h-[70vh] bg-[#FFF8E7] flex items-center justify-center px-5 py-16">

        <div className="max-w-2xl w-full text-center">

          {/* Coffee Icon */}
          <div className="w-24 h-24 mx-auto rounded-full bg-[#D9B982] flex items-center justify-center text-5xl shadow-lg">
            ☕
          </div>


          {/* Small Heading */}
          <p className="text-[#9A6B3F] uppercase tracking-[0.3em] text-sm font-bold mt-7">
            Order Status
          </p>


          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#3B2418] mt-4">
            No Order Yet
          </h1>


          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mt-5 leading-8">
            Your perfect cup is waiting for you.
            Choose your favorite coffee and place your order with us.
          </p>


          {/* Button */}
          <Link
            to="/preorder"
            className="inline-flex items-center gap-3 mt-8 bg-[#8B4A20] hover:bg-[#6F3518] text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 hover:scale-105"
          >
            ☕ Place Your Order
            <span>→</span>
          </Link>

        </div>

      </div>
    );
  }


  // =========================================
  // ORDER EXISTS
  // =========================================

  const prices = {
    Cappuccino: 450,
    Latte: 500,
    Americano: 400,
    Espresso: 350,
    "Iced Coffee": 550,
  };


  const price = prices[order.coffee] || 400;

  const quantity = Number(order.quantity) || 1;

  const total = price * quantity;


  return (
    <div className="bg-[#FFF8E7] text-[#3B2418]">


      {/* =====================================
          CONFIRMATION HERO
      ===================================== */}

      <section className="px-5 md:px-10 lg:px-16 py-10">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex items-center">


            {/* Background Video */}
            <video
              src={coffeeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />


            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2A170D]/75">
            </div>


            {/* Hero Content */}
            <div className="relative z-10 px-7 md:px-16 py-16 text-white w-full">

              <div className="max-w-3xl">


                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#D9B982] text-[#3B2418] px-5 py-2 rounded-full font-bold text-sm">
                  ✓ Order Confirmed
                </div>


                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">

                  Your Coffee

                  <br />

                  <span className="text-[#D9B982]">
                    Is Being Prepared!
                  </span>

                </h1>


                {/* Message */}
                <p className="text-[#F5EBDD] text-lg md:text-xl mt-5 max-w-xl leading-8">
                  Thank you, {order.name || "Customer"}.
                  Your order has been received and our barista is preparing it.
                </p>


                {/* Quick Information */}
                <div className="mt-8 flex flex-wrap gap-4">


                  {/* Ready */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">

                    <p className="text-[#D9B982] text-sm">
                      Ready In
                    </p>

                    <p className="text-2xl font-bold">
                      10–15 Min
                    </p>

                  </div>


                  {/* Pickup */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">

                    <p className="text-[#D9B982] text-sm">
                      Pickup
                    </p>

                    <p className="text-2xl font-bold">
                      {order.pickupTime}
                    </p>

                  </div>


                  {/* Quantity */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">

                    <p className="text-[#D9B982] text-sm">
                      Quantity
                    </p>

                    <p className="text-2xl font-bold">
                      {quantity}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          ORDER DETAILS
      ===================================== */}

      <section className="px-5 md:px-10 lg:px-16 pb-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-7">


          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-7 md:p-10 border border-[#E5D5BA]">


            <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
              Your Order
            </p>


            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Order Details
            </h2>


            {/* Details Grid */}
            <div className="mt-8 grid md:grid-cols-2 gap-5">


              {/* Name */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Customer Name
                </p>

                <p className="font-bold text-xl mt-2">
                  {order.name}
                </p>

              </div>


              {/* Phone */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Phone Number
                </p>

                <p className="font-bold text-xl mt-2">
                  {order.phone}
                </p>

              </div>


              {/* Coffee */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Coffee
                </p>

                <p className="font-bold text-xl mt-2">
                  ☕ {order.coffee}
                </p>

              </div>


              {/* Size */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Size
                </p>

                <p className="font-bold text-xl mt-2">
                  {order.size}
                </p>

              </div>


              {/* Quantity */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Quantity
                </p>

                <p className="font-bold text-xl mt-2">
                  {quantity}
                </p>

              </div>


              {/* Pickup */}
              <div className="bg-[#FFF8E7] rounded-2xl p-6">

                <p className="text-gray-500 text-sm">
                  Pickup Time
                </p>

                <p className="font-bold text-xl mt-2">
                  {order.pickupTime}
                </p>

              </div>

            </div>


            {/* Special Request */}
            <div className="mt-5 bg-[#FFF8E7] rounded-2xl p-6">

              <p className="text-gray-500 text-sm">
                Special Request
              </p>

              <p className="font-semibold mt-2">
                {order.specialRequest || "No special request"}
              </p>

            </div>


            {/* TOTAL */}
            <div className="mt-8 bg-[#3B2418] rounded-2xl p-6 text-white flex justify-between items-center">

              <div>

                <p className="text-[#D9B982]">
                  Total Quantity
                </p>

                <p className="text-2xl font-bold mt-1">
                  {quantity} Coffee
                </p>

              </div>


              <div className="text-right">

                <p className="text-[#D9B982]">
                  Total Amount
                </p>

                <p className="text-3xl font-bold mt-1">
                  Rs. {total}
                </p>

              </div>

            </div>

          </div>


          {/* =================================
              ORDER STATUS
          ================================= */}

          <div className="bg-[#8B4A20] rounded-[2.5rem] p-7 md:p-9 text-white">


            <p className="text-[#F5D7A1] uppercase tracking-[0.25em] text-sm font-bold">
              Live Status
            </p>


            <h2 className="text-3xl font-bold mt-3">
              Track Your
              <br />
              Coffee
            </h2>


            <div className="mt-10 space-y-8">


              {/* Confirmed */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-full bg-[#F5D7A1] text-[#3B2418] flex items-center justify-center font-bold">
                  ✓
                </div>

                <div>

                  <p className="font-bold text-lg">
                    Order Confirmed
                  </p>

                  <p className="text-[#F8E8D8] text-sm mt-1">
                    Your order has been received.
                  </p>

                </div>

              </div>


              {/* Line */}
              <div className="border-l-2 border-[#F5D7A1]/40 h-8 ml-5">
              </div>


              {/* Preparing */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-full bg-[#F5D7A1] text-[#3B2418] flex items-center justify-center text-xl">
                  ☕
                </div>

                <div>

                  <p className="font-bold text-lg">
                    Preparing
                  </p>

                  <p className="text-[#F8E8D8] text-sm mt-1">
                    Our barista is preparing your coffee.
                  </p>

                </div>

              </div>


              {/* Line */}
              <div className="border-l-2 border-[#F5D7A1]/40 h-8 ml-5">
              </div>


              {/* Ready */}
              <div className="flex gap-4">

                <div className="w-11 h-11 shrink-0 rounded-full border-2 border-[#F5D7A1] flex items-center justify-center font-bold">
                  3
                </div>

                <div>

                  <p className="font-bold text-lg">
                    Ready for Pickup
                  </p>

                  <p className="text-[#F8E8D8] text-sm mt-1">
                    Collect your coffee at the café.
                  </p>

                </div>

              </div>

            </div>


            {/* TIME CARD */}
            <div className="mt-10 bg-white/10 rounded-2xl p-6">

              <p className="text-[#F5D7A1] text-sm font-semibold">
                ESTIMATED READY TIME
              </p>

              <p className="text-4xl font-bold mt-2">
                10–15
              </p>

              <p className="text-lg">
                Minutes
              </p>

              <p className="text-[#F8E8D8] text-sm mt-2">
                Freshly brewed just for you.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          BOTTOM CTA
      ===================================== */}

      <section className="px-5 md:px-10 lg:px-16 pb-20">

        <div className="max-w-6xl mx-auto bg-[#E8DCC5] rounded-[2.5rem] p-10 md:p-14">


          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">


            <div>

              <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
                Almost Ready
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Your perfect cup is on the way ☕
              </h2>

              <p className="text-gray-600 mt-3">
                Please arrive around your selected pickup time.
              </p>

            </div>


            <div className="flex flex-wrap gap-4">

              <Link
                to="/menu"
                className="bg-[#8B4A20] hover:bg-[#6F3518] text-white px-7 py-3 rounded-full font-bold transition"
              >
                View Menu
              </Link>


              <Link
                to="/"
                className="border border-[#8B4A20] text-[#8B4A20] hover:bg-[#8B4A20] hover:text-white px-7 py-3 rounded-full font-bold transition"
              >
                Home
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default OrderConfirmation;