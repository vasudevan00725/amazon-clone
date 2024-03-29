import React from "react";
import "./Product.css";

function Product({ tittle, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p> {tittle} </p>
        <p className="product_price">
          <small>$ </small>
          <strong> {price}</strong>
        </p>
        <div className="Product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product_img" />
      <button>Add to bastet</button>
    </div>
  );
}

export default Product;
