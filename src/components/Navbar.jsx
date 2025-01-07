import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#f4f4f4" }}>
      <div>
        <Link to="/">Home</Link> | <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
