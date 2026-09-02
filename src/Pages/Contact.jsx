import { useState } from "react";
import image from "../assets/image.png";
import img1 from "../assets/img1.jpg";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);

    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }


  return (
    <div className="min-h-screen bg-[#FFF8E7] text-[#332820]">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-16 pt-20 pb-14">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#9A6B3F] uppercase tracking-[0.35em] text-sm font-semibold">
            Contact & Connect
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">
            A Little Coffee,
            <br />
            <span className="text-[#9A6B3F]">
              A Little Conversation.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            We're always happy to hear from our coffee lovers.
            Reach out, ask a question, or simply come by for a cup.
          </p>


          {/* Image */}
          <div className="mt-12 w-full h-[340px] rounded-[3rem] overflow-hidden">

            <img 
  src={image}
  alt="Cozy coffee shop" 
  className="w-full h-full object-cover" 
/>

          </div>

        </div>

      </section>


      {/* ================= INFO CARDS ================= */}
      <section className="px-6 md:px-16 py-12">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6">

            {/* Location */}
            <div className="bg-[#F8F1DF] border border-[#E4D6B9] rounded-[2rem] p-8 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#9A6B3F] flex items-center justify-center">

                <span className="text-[#9A6B3F] text-xl font-semibold">
                  01
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                Visit Us
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Coffee Street,
                <br />
                Bahawalpur, Pakistan
              </p>

              <p className="text-[#9A6B3F] font-semibold mt-5">
                Find Our Café →
              </p>

            </div>


            {/* Contact */}
            <div className="bg-[#F8F1DF] border border-[#E4D6B9] rounded-[2rem] p-8 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#9A6B3F] flex items-center justify-center">

                <span className="text-[#9A6B3F] text-xl font-semibold">
                  02
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                Contact
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                +92 300 1234567
                <br />
                hello@coffeecafe.com
              </p>

              <p className="text-[#9A6B3F] font-semibold mt-5">
                Get In Touch →
              </p>

            </div>


            {/* Hours */}
            <div className="bg-[#F8F1DF] border border-[#E4D6B9] rounded-[2rem] p-8 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#9A6B3F] flex items-center justify-center">

                <span className="text-[#9A6B3F] text-xl font-semibold">
                  03
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                Opening Hours
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Monday – Friday
                <br />
                8 AM – 10 PM
                <br />
                Saturday – Sunday
                <br />
                9 AM – 11 PM
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MESSAGE AREA ================= */}
      <section className="px-6 md:px-16 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">


            {/* Image */}
            <div className="lg:col-span-2 min-h-[500px] rounded-[3rem] overflow-hidden">

              <img
  src={img1}
  alt="Barista preparing coffee"
  className="w-full h-full object-cover"
/>

            </div>


            {/* Form */}
            <div className="lg:col-span-3 bg-[#332820] rounded-[3rem] p-8 md:p-12 text-white">

              <p className="text-[#D9B982] uppercase tracking-[0.3em] text-sm font-semibold">
                Write To Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                We'd love to
                <br />
                hear from you.
              </h2>

              <p className="text-gray-300 mt-5 max-w-lg">
                Have a question or suggestion?
                Send us a message and let us know.
              </p>


              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="mt-8 grid md:grid-cols-2 gap-5">

                  {/* Name */}
                  <div>

                    <label className="block text-sm font-semibold mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 outline-none placeholder:text-gray-400 focus:border-[#D9B982]"
                    />

                  </div>


                  {/* Email */}
                  <div>

                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 outline-none placeholder:text-gray-400 focus:border-[#D9B982]"
                    />

                  </div>

                </div>


                {/* Subject */}
                <div className="mt-5">

                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="What would you like to ask?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 outline-none placeholder:text-gray-400 focus:border-[#D9B982]"
                  />

                </div>


                {/* Message */}
                <div className="mt-5">

                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 outline-none resize-none placeholder:text-gray-400 focus:border-[#D9B982]"
                  ></textarea>

                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="mt-6 bg-[#D9B982] hover:bg-[#C9A66F] text-[#332820] px-9 py-4 rounded-full font-bold transition duration-300"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FINAL SECTION ================= */}
      <section className="px-6 md:px-16 pb-20">

        <div className="max-w-7xl mx-auto bg-[#E8DCC5] rounded-[3rem] px-8 py-16 md:py-20 text-center">

          <p className="text-[#9A6B3F] uppercase tracking-[0.3em] text-sm font-semibold">
            See You Soon
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-5">
            Your coffee table
            <br />
            is waiting for you.
          </h2>

          <p className="max-w-xl mx-auto text-[#6F5949] mt-5 text-lg leading-relaxed">
            Come by, slow down, and enjoy a freshly brewed cup
            in a warm and welcoming atmosphere.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 bg-[#332820] text-white px-7 py-3 rounded-full">

            <span className="w-2 h-2 rounded-full bg-[#D9B982]"></span>

            Freshly brewed. Always welcoming.

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;