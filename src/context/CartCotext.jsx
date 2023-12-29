import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);
  
  let foundProduct;
  let index;

  const addToCart = (product, count) => {
    
  };
  
  const onRemove = (product) => {
    
  };

  const toggleCartItemQuanitity = (id, value) => {
    
    
  };

  const incCount = () => {

  };

  const decCount = () => {

  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        count,
        totalCount,
        totalPrice,
        addToCart,
        onRemove,
        toggleCartItemQuanitity,
        incCount,
        decCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);