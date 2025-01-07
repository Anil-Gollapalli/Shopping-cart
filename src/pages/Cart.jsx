import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Function to handle decrease in quantity
  const handleDecreaseQuantity = (id) => {
    updateCartItemQuantity(id, -1); // Decrement quantity
  };

  // Function to handle increase in quantity
  const handleIncreaseQuantity = (id) => {
    updateCartItemQuantity(id, 1); // Increment quantity
  };

  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  // Checkout function (you can replace this with actual payment logic)
  const handleCheckout = () => {
    // You can perform real payment processing here, or simulate with an alert:
    if (cartItems.length === 0) {
      alert("Your cart is empty! Please add items to the cart.");
    } else {
      alert(`Total: $${totalPrice}. Proceeding to checkout...`);
      // Redirect to a confirmation page or payment gateway
      navigate("/checkout"); // You can change this route to your checkout page route
    }
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.product.id}>
              <h3>{item.product.title}</h3>
              <div className="quantity-controls">
                <button
                  onClick={() => handleDecreaseQuantity(item.product.id)}
                  disabled={item.quantity <= 1} // Prevent going below 1
                >
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleIncreaseQuantity(item.product.id)}>
                  +
                </button>
              </div>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            Total: ${totalPrice}
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
