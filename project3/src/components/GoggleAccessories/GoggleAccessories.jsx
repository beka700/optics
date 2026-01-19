import React from 'react';
import './goggleAccessories.css';
import { FaStar } from 'react-icons/fa';
import google1 from '../../assets/google1.png';
import google2 from '../../assets/google2.png';
import google3 from '../../assets/google3.png';
import google4 from '../../assets/google4.png';

const GoggleAccessories = () => {
  const accessoriesData = [
    {
      id: 1,
      name: "Lenses case",
      description: "One Size",
      price: "9,99 €",
      image: google1
    },
    {
      id: 2,
      name: "The Falcon Goggle-Upgrade",
      description: "2 COLORS",
      price: "9,99 €",
      image: google2
    },
    {
      id: 3,
      name: "Nose piece FALCON/HAWK",
      description: "FALCON Spare Nosepart (Black)",
      price: "5,99 €",
      image: google3
    },
    {
      id: 4,
      name: "Goggle protection",
      description: "6 COLORS",
      price: "9,99 €",
      image: google4
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <div className="accessories-container">
      <div className="accessories-grid">
        {accessoriesData.map((accessory) => (
          <div key={accessory.id} className="accessory-card">
            <div className="accessory-image-container">
              <img 
                src={accessory.image} 
                alt={accessory.description}
                className="accessory-image"
              />
            </div>

            <div className="accessory-info">
              <h3 className="accessory-name">{accessory.name}</h3>
              <p className="accessory-description">{accessory.description}</p>
              
              <div className="rating-section">
                <div className="stars">
                </div>
              </div>

              <div className="price-section">
                <span className="current-price">{accessory.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoggleAccessories;