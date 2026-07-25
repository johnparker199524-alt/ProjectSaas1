import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "Ice Cream", title: "Milk" },
  { id: "Ice Cream", title: "Chocolate" },
  { id: "Ice Cream", title: "Cream" },

];

const ProductsPage = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link style={{color:'white'}} to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
