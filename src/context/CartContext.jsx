import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [order, setOrderState] = useState(() => {
    const savedOrder = localStorage.getItem("order");

    if (savedOrder) {
      try {
        return JSON.parse(savedOrder);
      } catch (error) {
        return null;
      }
    }

    return null;
  });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Sirf selected cart item remove
  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item !== product)
    );
  };

  // Sirf cart clear
  const clearCart = () => {
    setCart([]);
  };

  // Customized order save
  const setOrder = (newOrder) => {
    setOrderState(newOrder);

    localStorage.setItem(
      "order",
      JSON.stringify(newOrder)
    );
  };

  // Sirf customized order clear
  const clearOrder = () => {
    setOrderState(null);
    localStorage.removeItem("order");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,

        order,
        setOrder,
        clearOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}