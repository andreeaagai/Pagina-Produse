import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="image-item">
      <img src={product.url} alt={product.name} className="icone" />
      <p>{product.name}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        Către magazin
      </a>
    </div>
  );
};

export default ProductCard;
