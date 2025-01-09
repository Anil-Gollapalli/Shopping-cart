import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [notification, setNotification] = useState("");
  const { addToCart } = useContext(CartContext);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000); // Auto-hide after 3 seconds
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
    addToCart(product, 1); // Add one more to the cart
    showNotification(`${product.title} added to cart!`);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      addToCart(product, -1); // Decrease the quantity in the cart
      showNotification(`${product.title} removed from cart!`);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      showNotification(`${quantity} ${product.title}(s) added to cart!`);
      setQuantity(0); // Reset the quantity after adding
    } else {
      showNotification("Please select a quantity before adding to cart!");
    }
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
          onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
        />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default ProductCard;
