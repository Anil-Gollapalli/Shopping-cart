import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

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
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.product.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.product.price * item.quantity, 0)
              .toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
