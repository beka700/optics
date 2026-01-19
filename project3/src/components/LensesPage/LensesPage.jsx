import React from 'react';
import './LensesPage.css';
import { FaStar } from 'react-icons/fa';
import lens1 from '../../assets/lenses.png';
import lens2 from '../../assets/lenses1.png';
import lens3 from '../../assets/lenses2.png';
import lens4 from '../../assets/lenses3.png';
import lens5 from '../../assets/lenses4.png';
import lens6 from '../../assets/lenses5.png';

const LensesPage = () => {
  const lensesData = [
    {
      id: 1,
      name: "The FALCON Lens",
      description: "Black (polarized, Cat. 4)",
      price: "29,99 €",
      image: lens1,
      isPolarized: true,
      category: "Cat. 4"
    },
    {
      id: 2,
      name: "The FALCON Lens",
      description: "Blue (polarized, Cat. 3)",
      price: "29,99 €",
      image: lens2,
      isPolarized: true,
      category: "Cat. 3"
    },
    {
      id: 3,
      name: "The FALCON Lens",
      description: "Red (polarized, Cat. 2)",
      price: "29,99 €",
      image: lens3,
      isPolarized: true,
      category: "Cat. 2"
    },
    {
      id: 4,
      name: "The FALCON Lens",
      description: "Orange (non-polarized, Cat. 1)",
      price: "29,99 €",
      image: lens4,
      isPolarized: false,
      category: "Cat. 1"
    },
    {
      id: 5,
      name: "The FALCON Lens",
      description: "Purple-Green (non-polarized Cat. 1)",
      price: "29,99 €",
      image: lens5,
      isPolarized: false,
      category: "Cat. 1"
    },
    {
      id: 6,
      name: "The FALCON Lens",
      description: "Red (polarized, Cat. 2)",
      price: "24,99 €",
      image: lens6,
      isPolarized: true,
      category: "Cat. 2",
      sale: true,
      originalPrice: "29,99 €"
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <div className="lenses-container">
      <div className="lenses-tabs">
      </div>
      <div className="lenses-grid">
        {lensesData.map((lens) => (
          <div key={lens.id} className="lens-card">
            <div className="lens-image-container">
              <img 
                src={lens.image} 
                alt={lens.description}
                className="lens-image"
              />
            </div>

            <div className="lens-info">
              <h3 className="lens-name">{lens.name}</h3>
              <p className="lens-description">{lens.description}</p>
              
              <div className="rating-section">
              </div>

              <div className="price-section">
                {lens.sale ? (
                  <>
                    <span className="original-price">{lens.originalPrice}</span>
                    <span className="current-price sale">{lens.price}</span>
                  </>
                ) : (
                  <span className="current-price">{lens.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LensesPage;