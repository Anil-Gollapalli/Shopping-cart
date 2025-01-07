import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    setQuantity((prev) => prev + 1);
    addToCart(product, 1); // Add one more to the cart
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      addToCart(product, -1); // Decrease the quantity in the cart
    }
  };

  // Handle quantity changes directly from the input field
  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(0, Number(e.target.value)); // Ensures no negative quantity
    setQuantity(newQuantity);
    addToCart(product, newQuantity - quantity); // Update cart based on change
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="quantity-controls">
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
