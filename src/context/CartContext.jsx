import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to the cart or update quantity
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      // If quantity is zero or less, remove it from the cart.
      removeFromCart(product.id);
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        // Update the quantity if the product already exists in the cart
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add the product if it doesn't exist in the cart
        return [...prev, { product, quantity }];
      }
    });
  };

  // Remove product from the cart by id
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
