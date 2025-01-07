import React, { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "2rem" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
