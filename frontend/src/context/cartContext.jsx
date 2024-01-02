import { createContext, useContext, useState } from "react";

const CardContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CardContext.Provider value={[cart, setCart]}>
      {children}
    </CardContext.Provider>
  );
};

const useCart = () => {
  return useContext(CardContext);
};

export { useCart, CartProvider };
