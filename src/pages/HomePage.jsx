import React, {useState} from "react";
import {products} from "../data/productData";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";


const categories = [
    "Toate Produsele", 
    "Intrerupatoare Smart", 
    "Iluminat Smart", 
    "Prize wifi", 
    "Senzori", 
    "Termostate Smart", 
    "Supraveghere video", 
    "Securitate Inteligenta", 
    "Aspiratoare smart"
];

const HomeProduct = () => {
    const [activeCategory, setActiveCategory] = useState("Toate Produsele");
  
    const filteredProducts =
      activeCategory === "Toate Produsele"
        ? products
        : products.filter((item) => item.category === activeCategory);
  
    return (
      <div className="main-container">
        <div className="image-container">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
  
        <div className="filter-container">
          <h3>Filtrare</h3>
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default HomeProduct;

