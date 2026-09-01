import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import PreOrder from "./Pages/PreOrder";
import Contact from "./Pages/Contact";
import OrderConfirmation from "./Pages/OrderConfirmation";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
         <Route path="/preorder" element={<PreOrder />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;