
import { Link } from "react-router-dom";
import coffeeVideo from "../assets/videoo.mp4";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function OrderConfirmation() {
  const {
    cart,
    order,
    clearCart,
    clearOrder,
    removeFromCart,
  } = useContext(CartContext);

  // =========================
  // Payment States
  // =========================

  const [buyingProduct, setBuyingProduct] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  // =========================
  // Customized Order Prices
  // =========================

  const prices = {
    Cappuccino: 450,
    Latte: 500,
    Americano: 400,
    Espresso: 350,
    "Iced Coffee": 550,
  };

  // =========================
  // Customized Order
  // =========================

  let quantity = 1;
  let total = 0;

  if (order) {
    quantity = Number(order.quantity) || 1;

    const price = prices[order.coffee] || 400;

    total = price * quantity;
  }

  // =========================
  // Cart Total
  // =========================

  const cartTotal = cart.reduce((sum, item) => {
    const price =
      Number(String(item.price).replace("$", "")) || 0;

    return sum + price;
  }, 0);

  // =========================
  // Buy Product
  // =========================

  const handleBuy = (product) => {
    setBuyingProduct(product);
    setPaymentMethod("");
  };

  // =========================
  // Cancel Buy
  // =========================

  const handleCancelBuy = () => {
    setBuyingProduct(null);
    setPaymentMethod("");
  };

  // =========================
  // Confirm Complete Order
  // =========================

  const handleConfirmPayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert(
      `Payment Method: ${paymentMethod}\n\nYour complete order has been confirmed successfully! ☕`
    );

    // Clear both orders
    if (order) {
      clearOrder();
    }

    if (cart.length > 0) {
      clearCart();
    }

    setBuyingProduct(null);
    setPaymentMethod("");
  };

  // =========================
  // Complete Customized Order
  // =========================

  const handleCompleteCustomized = () => {
    // Agar cart bhi hai to pehle Buy karna hoga
    if (cart.length > 0) {
      alert(
        "You also have items in your cart. Please click Buy on a cart item to complete your full order and payment."
      );
      return;
    }

    clearOrder();

    alert(
      "Your customized order has been completed successfully! ☕"
    );
  };

  // =========================
  // Cancel Customized Order
  // =========================

  const handleCancelCustomized = () => {
    clearOrder();

    alert("Your customized order has been cancelled.");
  };

  // =========================
  // Cancel Cart Item
  // =========================

  const handleCancelCartItem = (product) => {
    removeFromCart(product);
  };

  // =========================
  // Cancel All Cart
  // =========================

  const handleCancelCart = () => {
    clearCart();

    alert("Your cart order has been cancelled.");
  };

  // =========================
  // NO ORDER
  // =========================

  if (!order && cart.length === 0) {
    return (
      <div className="min-h-[70vh] bg-[#FFF8E7] flex items-center justify-center px-5 py-16">

        <div className="max-w-2xl w-full text-center">

          <div className="w-24 h-24 mx-auto rounded-full bg-[#D9B982] flex items-center justify-center text-5xl shadow-lg">
            ☕
          </div>

          <p className="text-[#9A6B3F] uppercase tracking-[0.3em] text-sm font-bold mt-7">
            Order Status
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#3B2418] mt-4">
            No Order Yet
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mt-5 leading-8">
            Your perfect cup is waiting for you. Choose your favorite coffee
            and place your order with us.
          </p>

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

  return (
    <div className="bg-[#FFF8E7] text-[#3B2418]">

      {/* =================================================
          CUSTOMIZED PLACE ORDER
      ================================================= */}

      {order && (
        <>
          {/* HERO */}

          <section className="px-5 md:px-10 lg:px-16 py-10">

            <div className="max-w-6xl mx-auto">

              <div className="relative overflow-hidden rounded-[2.5rem] min-h-[500px] flex items-center">

                <video
                  src={coffeeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#2A170D]/75"></div>

                <div className="relative z-10 px-7 md:px-16 py-16 text-white w-full">

                  <div className="max-w-3xl">

                    <div className="inline-flex items-center gap-2 bg-[#D9B982] text-[#3B2418] px-5 py-2 rounded-full font-bold text-sm">
                      ✓ Order Confirmed
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
                      Your Coffee
                      <br />

                      <span className="text-[#D9B982]">
                        Is Being Prepared!
                      </span>
                    </h1>

                    <p className="text-[#F5EBDD] text-lg md:text-xl mt-5 max-w-xl leading-8">
                      Thank you, {order.name || "Customer"}.
                      Your order has been received and our barista
                      is preparing it.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">

                        <p className="text-[#D9B982] text-sm">
                          Ready In
                        </p>

                        <p className="text-2xl font-bold">
                          10–15 Min
                        </p>

                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">

                        <p className="text-[#D9B982] text-sm">
                          Pickup
                        </p>

                        <p className="text-2xl font-bold">
                          {order.pickupTime}
                        </p>

                      </div>

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


          {/* =================================================
              ORDER DETAILS
          ================================================= */}

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

                <div className="mt-8 grid md:grid-cols-2 gap-5">

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Customer Name
                    </p>

                    <p className="font-bold text-xl mt-2">
                      {order.name}
                    </p>

                  </div>

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Phone Number
                    </p>

                    <p className="font-bold text-xl mt-2">
                      {order.phone}
                    </p>

                  </div>

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Coffee
                    </p>

                    <p className="font-bold text-xl mt-2">
                      ☕ {order.coffee}
                    </p>

                  </div>

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Size
                    </p>

                    <p className="font-bold text-xl mt-2">
                      {order.size}
                    </p>

                  </div>

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Quantity
                    </p>

                    <p className="font-bold text-xl mt-2">
                      {quantity}
                    </p>

                  </div>

                  <div className="bg-[#FFF8E7] rounded-2xl p-6">

                    <p className="text-gray-500 text-sm">
                      Pickup Time
                    </p>

                    <p className="font-bold text-xl mt-2">
                      {order.pickupTime}
                    </p>

                  </div>

                </div>

                <div className="mt-5 bg-[#FFF8E7] rounded-2xl p-6">

                  <p className="text-gray-500 text-sm">
                    Special Request
                  </p>

                  <p className="font-semibold mt-2">
                    {order.specialRequest || "No special request"}
                  </p>

                </div>


                {/* CUSTOMIZED TOTAL */}

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


                {/* BUTTONS */}

                <div className="flex flex-col sm:flex-row gap-4 mt-7">

                  <button
                    onClick={handleCompleteCustomized}
                    className="flex-1 bg-[#8B4A20] hover:bg-[#6F3518] text-white py-4 rounded-xl font-bold transition"
                  >
                    ✓ Complete Order
                  </button>

                  <button
                    onClick={handleCancelCustomized}
                    className="flex-1 border-2 border-red-400 text-red-500 hover:bg-red-500 hover:text-white py-4 rounded-xl font-bold transition"
                  >
                    ✕ Cancel Order
                  </button>

                </div>

              </div>


              {/* LIVE STATUS */}

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

                  <div className="border-l-2 border-[#F5D7A1]/40 h-8 ml-5"></div>

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

                  <div className="border-l-2 border-[#F5D7A1]/40 h-8 ml-5"></div>

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
        </>
      )}


      {/* =================================================
          CART ORDERS
      ================================================= */}

      {cart.length > 0 && (

        <section className="px-5 md:px-10 lg:px-16 pb-20">

          <div className="max-w-6xl mx-auto">

            <div className="bg-white rounded-[2.5rem] p-7 md:p-10 border border-[#E5D5BA]">

              <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
                Shopping Cart
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Your Cart Orders
                </h2>

                <div className="bg-[#F4E5C9] px-5 py-3 rounded-full font-bold text-[#8B4A20]">
                  🛒 {cart.length} Items
                </div>

              </div>


              {/* =================================================
                  CART ITEMS
              ================================================= */}

              <div className="mt-8 space-y-4">

                {cart.map((product, index) => (

                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-5 bg-[#FFF8E7] rounded-2xl p-5"
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full md:w-24 h-24 object-cover rounded-xl"
                    />

                    <div className="flex-1">

                      <h3 className="text-xl font-bold">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        {product.description}
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-sm text-gray-500">
                        Price
                      </p>

                      <p className="text-xl font-bold text-[#8B4A20]">
                        {product.price}
                      </p>


                      {/* BUY + CANCEL */}

                      <div className="flex flex-wrap justify-end gap-2 mt-3">

                        <button
                          onClick={() => handleBuy(product)}
                          className="rounded-lg bg-[#8B4A20] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#6F3516]"
                        >
                          Buy
                        </button>

                        <button
                          onClick={() =>
                            handleCancelCartItem(product)
                          }
                          className="rounded-lg border border-[#8B4A20] px-4 py-2 text-sm font-semibold text-[#8B4A20] transition hover:bg-[#8B4A20] hover:text-white"
                        >
                          Cancel
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  COMBINED ORDER + PAYMENT
              ================================================= */}

              {buyingProduct && (

                <div className="mt-8 bg-[#FFF8E7] rounded-[2rem] p-6 md:p-8 border border-[#E5D5BA]">

                  <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
                    Checkout
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Complete Your Order
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Your Place Order and Cart Order are included in one payment.
                  </p>


                  {/* =========================
                      PLACE ORDER
                  ========================= */}

                  {order && (

                    <div className="mt-7 bg-white rounded-2xl p-6">

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>

                          <p className="text-[#9A6B3F] text-sm font-bold uppercase">
                            Place Order
                          </p>

                          <h3 className="text-xl font-bold mt-2">
                            ☕ {order.coffee}
                          </h3>

                          <p className="text-gray-500 mt-1">
                            Size: {order.size}
                          </p>

                          <p className="text-gray-500">
                            Quantity: {quantity}
                          </p>

                        </div>

                        <div className="sm:text-right">

                          <p className="text-gray-500 text-sm">
                            Amount
                          </p>

                          <p className="text-2xl font-bold text-[#8B4A20]">
                            Rs. {total}
                          </p>

                        </div>

                      </div>

                    </div>

                  )}


                  {/* =========================
                      BUY CART PRODUCT
                  ========================= */}

                  <div className="mt-4 bg-white rounded-2xl p-6">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      <div className="flex items-center gap-4">

                        <img
                          src={buyingProduct.image}
                          alt={buyingProduct.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />

                        <div>

                          <p className="text-[#9A6B3F] text-sm font-bold uppercase">
                            Cart Buy
                          </p>

                          <h3 className="text-xl font-bold mt-1">
                            ☕ {buyingProduct.name}
                          </h3>

                          <p className="text-gray-500 text-sm mt-1">
                            {buyingProduct.description}
                          </p>

                        </div>

                      </div>

                      <div className="sm:text-right">

                        <p className="text-gray-500 text-sm">
                          Amount
                        </p>

                        <p className="text-2xl font-bold text-[#8B4A20]">
                          {buyingProduct.price}
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* =========================
                      OTHER CART ITEMS
                  ========================= */}

                  {cart.filter(
                    (product) => product !== buyingProduct
                  ).length > 0 && (

                    <div className="mt-4 bg-white rounded-2xl p-6">

                      <p className="text-[#9A6B3F] text-sm font-bold uppercase">
                        Other Cart Items
                      </p>

                      <div className="mt-4 space-y-3">

                        {cart
                          .filter(
                            (product) =>
                              product !== buyingProduct
                          )
                          .map((product, index) => (

                            <div
                              key={index}
                              className="flex justify-between items-center border-b border-[#E5D5BA] pb-3 last:border-b-0"
                            >

                              <p className="font-semibold">
                                ☕ {product.name}
                              </p>

                              <p className="font-bold text-[#8B4A20]">
                                {product.price}
                              </p>

                            </div>

                          ))}

                      </div>

                    </div>

                  )}


                  {/* =================================================
                      TOTAL
                  ================================================= */}

                  <div className="mt-6 bg-[#3B2418] rounded-2xl p-6 text-white">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                      <div>

                        <p className="text-[#D9B982]">
                          Total Quantity
                        </p>

                        <p className="text-3xl font-bold mt-1">
                          {quantity + cart.length} Coffee
                        </p>

                      </div>

                      <div className="sm:text-right">

                        <p className="text-[#D9B982]">
                          Total Amount
                        </p>

                        <p className="text-3xl font-bold mt-1">
                          Rs. {total} + {buyingProduct.price}
                        </p>

                        <p className="text-[#F5EBDD] text-sm mt-2">
                          Place Order + Cart Order
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      PAYMENT METHOD
                  ================================================= */}

                  <div className="mt-7">

                    <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
                      Payment
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      Select Payment Method
                    </h3>


                    <div className="grid sm:grid-cols-2 gap-4 mt-5">

                      {/* CASH */}

                      <button
                        onClick={() =>
                          setPaymentMethod("Cash")
                        }
                        className={`text-left rounded-xl border-2 p-5 transition ${
                          paymentMethod === "Cash"
                            ? "border-[#8B4A20] bg-[#F4E5C9]"
                            : "border-[#E5D5BA] bg-white hover:border-[#8B4A20]"
                        }`}
                      >

                        <p className="text-2xl">
                          💵
                        </p>

                        <p className="font-bold text-lg mt-2">
                          Cash
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Pay when you collect your order.
                        </p>

                      </button>


                      {/* BANK */}

                      <button
                        onClick={() =>
                          setPaymentMethod("Bank Account")
                        }
                        className={`text-left rounded-xl border-2 p-5 transition ${
                          paymentMethod === "Bank Account"
                            ? "border-[#8B4A20] bg-[#F4E5C9]"
                            : "border-[#E5D5BA] bg-white hover:border-[#8B4A20]"
                        }`}
                      >

                        <p className="text-2xl">
                          🏦
                        </p>

                        <p className="font-bold text-lg mt-2">
                          Bank Account
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Pay through bank transfer.
                        </p>

                      </button>


                      {/* CARD */}

                      <button
                        onClick={() =>
                          setPaymentMethod(
                            "Credit / Debit Card"
                          )
                        }
                        className={`text-left rounded-xl border-2 p-5 transition ${
                          paymentMethod ===
                          "Credit / Debit Card"
                            ? "border-[#8B4A20] bg-[#F4E5C9]"
                            : "border-[#E5D5BA] bg-white hover:border-[#8B4A20]"
                        }`}
                      >

                        <p className="text-2xl">
                          💳
                        </p>

                        <p className="font-bold text-lg mt-2">
                          Card
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Pay using credit or debit card.
                        </p>

                      </button>


                      {/* JAZZCASH */}

                      <button
                        onClick={() =>
                          setPaymentMethod(
                            "JazzCash / EasyPaisa"
                          )
                        }
                        className={`text-left rounded-xl border-2 p-5 transition ${
                          paymentMethod ===
                          "JazzCash / EasyPaisa"
                            ? "border-[#8B4A20] bg-[#F4E5C9]"
                            : "border-[#E5D5BA] bg-white hover:border-[#8B4A20]"
                        }`}
                      >

                        <p className="text-2xl">
                          📱
                        </p>

                        <p className="font-bold text-lg mt-2">
                          JazzCash / EasyPaisa
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Pay using mobile wallet.
                        </p>

                      </button>

                    </div>

                  </div>


                  {/* =================================================
                      FINAL BUTTONS
                  ================================================= */}

                  <div className="flex flex-col sm:flex-row gap-4 mt-7">

                    <button
                      onClick={handleConfirmPayment}
                      className="flex-1 bg-[#8B4A20] hover:bg-[#6F3518] text-white py-4 rounded-xl font-bold transition"
                    >
                      ✓ Confirm Complete Order
                    </button>

                    <button
                      onClick={handleCancelBuy}
                      className="flex-1 border-2 border-red-400 text-red-500 hover:bg-red-500 hover:text-white py-4 rounded-xl font-bold transition"
                    >
                      ✕ Cancel
                    </button>

                  </div>

                </div>

              )}


              {/* =================================================
                  CART TOTAL
              ================================================= */}

              <div className="mt-8 bg-[#3B2418] rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                  <p className="text-[#D9B982]">
                    Total Items
                  </p>

                  <p className="text-2xl font-bold mt-1">
                    {cart.length} Coffee
                  </p>

                </div>

                <div className="md:text-right">

                  <p className="text-[#D9B982]">
                    Cart Total
                  </p>

                  <p className="text-3xl font-bold mt-1">
                    ${cartTotal.toFixed(2)}
                  </p>

                </div>

              </div>


              {/* =================================================
                  CART COMPLETE / CANCEL
              ================================================= */}

              {!buyingProduct && (

                <div className="flex flex-col sm:flex-row gap-4 mt-7">

                  <button
                    onClick={handleCancelCart}
                    className="flex-1 border-2 border-red-400 text-red-500 hover:bg-red-500 hover:text-white py-4 rounded-xl font-bold transition"
                  >
                    ✕ Cancel All Orders
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>

      )}


      {/* =================================================
          CAFE LOCATION MAP
      ================================================= */}

      <section className="px-5 md:px-10 lg:px-16 pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-[2.5rem] p-7 md:p-10 border border-[#E5D5BA]">

            <p className="text-[#9A6B3F] uppercase tracking-[0.25em] text-sm font-bold">
              Find Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Cafe Location
            </h2>

            <p className="text-gray-600 mt-3">
              Visit our cafe and enjoy your favorite coffee with us. ☕
            </p>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#E5D5BA]">

              <iframe
                title="Cafe Location"
                src="https://www.google.com/maps?q=Cafe+Shop+Karachi+Pakistan&output=embed"
                className="w-full h-[350px] md:h-[450px] border-0"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          BOTTOM
      ================================================= */}

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

