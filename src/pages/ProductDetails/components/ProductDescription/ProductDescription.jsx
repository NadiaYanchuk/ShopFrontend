import "./ProductDescription.css";
import React from "react";

export const ProductDescription = ({ selectedProduct }) => {
  return (
    <div className="product-details-description">
      <h1 className="product-name">{selectedProduct?.name}</h1>

      <div className="product-price-container">
        <span className="product-original-price">
          ${selectedProduct?.original_price}{" "}
        </span>
        <span className="product-discount-price">
          {" "}
          ${selectedProduct?.discounted_price}
        </span>
      </div>

      <p className="description-container">
        <span>Полное описание</span>: {selectedProduct?.description}
      </p>

      <span className="gender-container">
        <span>Пол</span>: {selectedProduct?.category_name}
      </span>

      <div className="tags">
        {!selectedProduct?.is_stock && (
          <span className="out-of-stock">
            {selectedProduct?.is_stock ? "В наличии" : "Распродано"}
          </span>
        )}
        {selectedProduct?.trending && (
          <span className="trending">
            {selectedProduct?.trending ? "В тренде" : ""}
          </span>
        )}
      </div>
    </div>
  );
};
