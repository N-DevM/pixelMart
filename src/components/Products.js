import React from "react";

const Products = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="btn add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
