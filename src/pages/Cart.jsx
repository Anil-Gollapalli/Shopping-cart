import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    clearCart(); // Clear the cart
    navigate("/"); // Redirect to Home page
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
                  onClick={() => updateCartItemQuantity(item.product.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => updateCartItemQuantity(item.product.id, 1)}>+</button>
              </div>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.product.price * item.quantity, 0)
              .toFixed(2)}
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
