import React from 'react';
import './OtherProducts.css';
import { FaStar } from 'react-icons/fa';
import other1 from '../../assets/other.png';
import other2 from '../../assets/other1.png';
import other3 from '../../assets/other2.png';
import other4 from '../../assets/other3.png';
import other5 from '../../assets/other4.png';
import other6 from '../../assets/other5.png';

const OtherProducts = () => {
  const productsData = [
    {
      id: 1,
      name: "The HAWK",
      description: "Medium Size, Exchangeable Lens, Polarized",
      price: "74,99 €",
      image: other1
    },
    {
      id: 2,
      name: "The RUSH Fullframe",
      description: "Antifog, Magnetic lens",
      price: "24,99 €",
      image: other2
    },
    {
      id: 3,
      name: "The CHARGE Halfframe",
      description: "Antifog, Magnetic lens",
      price: "74,99 €",
      image: other3
    },
    {
      id: 4,
      name: "The CHARGE Fullframe",
      description: "Antifog, Magnetic lens",
      price: "24,99 €",
      image: other4
    },
    {
      id: 5,
      name: "The RUSH Halfframe Photochromic",
      description: "Antifog, Magnetic lens",
      price: "49,99 €",
      image: other5
    },
    {
      id: 6,
      name: "The RUSH Halfframe",
      description: "Antifog, Magnetic lens",
      price: "24,99 €",
      image: other6
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <div className="other-products-container">
      <div className="other-products-grid">
        {productsData.map((product) => (
          <div key={product.id} className="other-product-card">
            <div className="other-product-image-container">
              <img 
                src={product.image} 
                alt={product.description}
                className="other-product-image"
              />
            </div>

            <div className="other-product-info">
              <h3 className="other-product-name">{product.name}</h3>
              <p className="other-product-description">{product.description}</p>
              
              <div className="rating-section">
              </div>

              <div className="price-section">
                <span className="current-price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;