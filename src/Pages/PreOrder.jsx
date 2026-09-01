import { useState } from "react";
import coffeeVideo from "../assets/video.mp4";

function PreOrder() {
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    coffee: "",
    size: "",
    quantity: 1,
    pickupTime: "",
    specialRequest: "",
  });

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Old orders get from localStorage
    const oldOrders = JSON.parse(localStorage.getItem("coffeeOrders")) || [];

    // New order
    const newOrder = {
      ...formData,
      id: Date.now(),
    };

    // Add new order
    const updatedOrders = [...oldOrders, newOrder];

    // Save in localStorage
    localStorage.setItem("coffeeOrders", JSON.stringify(updatedOrders));

    alert("Your pre-order has been placed successfully! ☕");

    // Clear form
    setFormData({
      name: "",
      phone: "",
      coffee: "",
      size: "",
      quantity: 1,
      pickupTime: "",
      specialRequest: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF9EC] text-[#34251F]">
      {/* ================= HERO ================= */}
      <section className="px-5 md:px-10 lg:px-20 pt-10 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#A65D2A]"></div>

              <span className="text-[#A65D2A] text-sm font-semibold uppercase tracking-[0.2em]">
                Pre Order
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Your Coffee,
              <br />
              <span className="text-[#A65D2A]">Ready For You.</span>
            </h1>

            <p className="mt-7 max-w-lg text-[#76665C] text-lg leading-8">
              Skip the wait and enjoy your favorite coffee exactly when you want
              it. Simply choose your drink and pickup time.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-[#5D4B41]">
                <span className="w-8 h-8 rounded-full bg-[#F1DFC1] flex items-center justify-center">
                  ✓
                </span>
                Freshly Prepared
              </div>

              <div className="flex items-center gap-2 text-sm text-[#5D4B41]">
                <span className="w-8 h-8 rounded-full bg-[#F1DFC1] flex items-center justify-center">
                  ✓
                </span>
                Quick Pickup
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-[#E8C891]/40"></div>

            <div className="relative h-[380px] md:h-[470px] rounded-[45%_45%_20px_20px] overflow-hidden shadow-xl bg-[#E9D7B8]">
              <video
                src={coffeeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              ></video>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 left-5 md:left-10 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#F3E2C5] flex items-center justify-center text-xl">
                ☕
              </div>

              <div>
                <p className="text-xs text-[#927D70]">Your favorite</p>

                <p className="font-bold text-[#34251F]">Coffee, Your Way</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ORDER FORM ================= */}
      <section className="px-5 md:px-10 lg:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="mb-12">
            <p className="text-[#A65D2A] uppercase tracking-[0.2em] text-sm font-bold">
              Order Details
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Make Your Order
              </h2>

              <p className="text-[#817067] max-w-md">
                Fill in the details below and we'll have your coffee ready at
                your selected time.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-[1fr_300px] gap-10"
          >
            {/* FORM CARD */}
            <div className="bg-[#FFF9EC] rounded-3xl p-6 md:p-10 border border-[#EBDDC6]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  />
                </div>

                {/* COFFEE */}
                <div>
                  <label className="block text-sm font-bold mb-2">Coffee</label>

                  <select
                    name="coffee"
                    value={formData.coffee}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  >
                    <option value="">Select coffee</option>

                    <option value="Cappuccino">Cappuccino</option>

                    <option value="Latte">Latte</option>

                    <option value="Americano">Americano</option>

                    <option value="Espresso">Espresso</option>

                    <option value="Iced Coffee">Iced Coffee</option>
                  </select>
                </div>

                {/* SIZE */}
                <div>
                  <label className="block text-sm font-bold mb-2">Size</label>

                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  >
                    <option value="">Select size</option>

                    <option value="Small">Small</option>

                    <option value="Medium">Medium</option>

                    <option value="Large">Large</option>
                  </select>
                </div>

                {/* QUANTITY */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Quantity
                  </label>

                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  />
                </div>

                {/* TIME */}
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Pickup Time
                  </label>

                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none focus:border-[#A65D2A]"
                  />
                </div>
              </div>

              {/* REQUEST */}
              <div className="mt-6">
                <label className="block text-sm font-bold mb-2">
                  Special Request
                </label>

                <textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any special instructions?"
                  className="w-full bg-white border border-[#E4D4BC] rounded-xl px-4 py-3.5 outline-none resize-none focus:border-[#A65D2A]"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-7 bg-[#A65D2A] hover:bg-[#86471F] text-white px-8 py-3.5 rounded-xl font-semibold transition duration-300"
              >
                Place Pre-Order →
              </button>
            </div>

            {/* SIDE INFO */}
            <div className="space-y-5">
              <div className="bg-[#F4E5C9] rounded-3xl p-7">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl mb-5">
                  ☕
                </div>

                <h3 className="text-xl font-bold">Freshly Prepared</h3>

                <p className="text-sm text-[#756257] leading-6 mt-3">
                  Your coffee is prepared fresh according to your selected
                  pickup time.
                </p>
              </div>

              <div className="bg-[#4B2B20] rounded-3xl p-7 text-white">
                <div className="text-[#E7C58F] text-sm font-bold uppercase tracking-wider">
                  Quick & Easy
                </div>

                <h3 className="text-2xl font-bold mt-3">
                  No Waiting.
                  <br />
                  Just Enjoy.
                </h3>

                <p className="text-[#D9C6B8] text-sm leading-6 mt-4">
                  Order ahead, arrive at your time and pick up your favorite
                  drink.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-5 md:px-10 lg:px-20 py-20 bg-[#FFF9EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#A65D2A] text-sm uppercase tracking-[0.2em] font-bold">
              Simple Process
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {/* CARD 1 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADDC8]">
              <div className="flex justify-between items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F1DFC1] flex items-center justify-center text-xl">
                  ☕
                </div>

                <span className="text-5xl font-bold text-[#EBDCC5]">01</span>
              </div>

              <h3 className="text-xl font-bold mt-7">Choose Your Coffee</h3>

              <p className="text-[#796960] text-sm leading-6 mt-3">
                Pick your favorite drink and select the size you want.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADDC8]">
              <div className="flex justify-between items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F1DFC1] flex items-center justify-center text-xl">
                  🕐
                </div>

                <span className="text-5xl font-bold text-[#EBDCC5]">02</span>
              </div>

              <h3 className="text-xl font-bold mt-7">Select Pickup Time</h3>

              <p className="text-[#796960] text-sm leading-6 mt-3">
                Choose the time that works best for you.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADDC8]">
              <div className="flex justify-between items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F1DFC1] flex items-center justify-center text-xl">
                  ✓
                </div>

                <span className="text-5xl font-bold text-[#EBDCC5]">03</span>
              </div>

              <h3 className="text-xl font-bold mt-7">Pick Up & Enjoy</h3>

              <p className="text-[#796960] text-sm leading-6 mt-3">
                Arrive at the café, collect your order and enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PreOrder;
