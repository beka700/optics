import './pro1.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"
import i2 from '../../assets/image 15.png'
import i3 from '../../assets/image 15 (1).png'
import i4 from '../../assets/image 15 (2).png'
import i5 from '../../assets/image 16.png'
import i6 from '../../assets/image 14.png'
import i7 from '../../assets/image 14 (1).png'
import i8 from '../../assets/image 14 (2).png'
import heroImage from '../../assets/image 13.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Pro1({ onCategoryClick }) {
  const navigate = useNavigate()
  const [showCategories, setShowCategories] = useState(false)

  const handleBuyNowClick = () => {
    navigate('/product/freeride-elite')
  }

  const handleCategoryClick = (category, title) => {
    if (onCategoryClick) {
      onCategoryClick(category, title)
    }
    setShowCategories(false)
  }

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  const handleCategoryKeyPress = (e, category, title) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCategoryClick(category, title)
    }
  }

  return (
    <header className="header">
      <div className="photo-container">
        <button 
          className="mobile-categories-toggle"
          onClick={toggleCategories}
          aria-label={showCategories ? "Close categories" : "Browse categories"}
          aria-expanded={showCategories}
        >
          {showCategories ? (
            <>
              <FaTimes className="toggle-icon" />
              Close Categories
            </>
          ) : (
            <>
              <FaBars className="toggle-icon" />
              Browse Categories
            </>
          )}
        </button>
        
        <div className={`photo ${showCategories ? 'show' : ''}`}>
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("sunglasses", "Sunglasses")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "sunglasses", "Sunglasses")}
            aria-label="Sunglasses category"
          >
            <img src={i2} className='photo-icon' alt="Sunglasses" loading="lazy" /> 
            <p className='photo-label'>Sun glasses</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("sport", "Sport glasses")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "sport", "Sport glasses")}
            aria-label="Sport glasses category"
          >
            <img src={i3} className='photo-icon' alt="Sport glasses" loading="lazy" /> 
            <p className='photo-label'>Sport glasses</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("bicycle", "Bicycle glasses")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "bicycle", "Bicycle glasses")}
            aria-label="Bicycle glasses category"
          >
            <img src={i4} className='photo-icon' alt="Bicycle glasses" loading="lazy" /> 
            <p className='photo-label'>Bicycle glasses</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("ski", "Ski goggles")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "ski", "Ski goggles")}
            aria-label="Ski goggles category"
          >
            <img src={i5} className='photo-icon' alt="Ski goggles" loading="lazy" /> 
            <p className='photo-label'>Ski goggles</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("downhill", "Downhill goggles")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "downhill", "Downhill goggles")}
            aria-label="Bike Goggles category"
          >
            <img src={i6} className='photo-icon' alt="Bike Goggles" loading="lazy" /> 
            <p className='photo-label'>Bike Goggles</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("lenses", "Lenses")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "lenses", "Lenses")}
            aria-label="Lenses category"
          >
            <img src={i7} className='photo-icon' alt="Lenses" loading="lazy" /> 
            <p className='photo-label'>Lenses</p> 
          </div>
          
          <div 
            className="photo-item" 
            onClick={() => handleCategoryClick("accessories", "Accessories")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleCategoryKeyPress(e, "accessories", "Accessories")}
            aria-label="Accessories category"
          >
            <img src={i8} className='photo-icon' alt="Accessories" loading="lazy" /> 
            <p className='photo-label'>Accessories</p> 
          </div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero__content" style={{ backgroundImage: `url(${heroImage})` }}>
          <span className="hero__label">THE NEW</span>
          <h1 className="hero__title">FORCE EVO</h1>
          <p className='hero__subtitle'>For the toughest situations</p>
          <p className="hero__price">79,99 €</p>
          <button 
            className="hero__btn" 
            onClick={handleBuyNowClick}
            aria-label="Buy now Force Evo for 79,99 €"
          >
            <span>BUY NOW</span>
            <FiChevronRight className='hero-btn-icon'/> 
          </button>
        </div>
      </div>
    </header>
  )
}

export default Pro1