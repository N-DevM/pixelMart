import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="assets/placeholder.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$50.00</p>
        </div>
        <div className="product-card">
          <img src="assets/placeholder.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$75.00</p>
        </div>
        <div className="product-card">
          <img src="assets/placeholder.jpg" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$40.00</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
