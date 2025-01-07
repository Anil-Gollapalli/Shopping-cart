import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav>
      {/* Shop Name */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
        Iconic@Store
      </div>

      {/* Centered Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexGrow: 1 }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>

      {/* Cart Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/cart" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff" }}>
          <FaShoppingCart size={24} />
          <span style={{
            marginLeft: "0.5rem",
            backgroundColor: "#e74c3c",
            color: "white",
            borderRadius: "50%",
            padding: "0.3rem 0.6rem",
            fontSize: "0.9rem",
          }}>
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
