import { FiX } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import "./HeroDetailModal.css";
import h21 from '../../assets/herod1.png';
import h2 from '../../assets/ski2.webp';
import h22 from '../../assets/ski3.webp';
import h23 from '../../assets/herod1.png';
import h24 from '../../assets/ski5.webp';
import h25 from '../../assets/ski2.webp';
import h26 from '../../assets/down2.webp';
import h27 from '../../assets/ski3.webp';
import h28 from '../../assets/herod1.png';
import h29 from '../../assets/basic1.webp';
import h30 from '../../assets/basic3.webp';
import h31 from '../../assets/ski3.webp';

import hero11 from '../../assets/herod2.webp';
import hero22 from '../../assets/herod.png'; 
import hero44 from '../../assets/herod3.avif';
import hero55 from '../../assets/heros3.png';
import hero66 from '../../assets/heros4.png';
import hero77 from '../../assets/heros5.png';
import hero88 from '../../assets/heros6.png';
import hero99 from '../../assets/heros7.png';
import hero1010 from '../../assets/heros8.png';
import hero1111 from '../../assets/heros9.png';
import hero1212 from '../../assets/heros10.png';
import hero1313 from '../../assets/herod4.jpg';

const heroPhotos = [
  hero11,  
  hero22,  
  hero44,  
  hero55,  
  hero66,  
  hero77,  
  hero88,  
  hero99,  
  hero1010,
  hero1111, 
  hero1212, 
  hero1313  
];

const productPhotos = [
  h2,  
  h21,   
  h22,  
  h23,  
  h24,  
  h25,  
  h26,  
  h27,  
  h28,  
  h29,   
  h30,   
  h31    
];

const heroToProductMap = {
  1: "freeride-elite",        
  2: "powder-master",         
  3: "slalom-race",           
  4: "powder-master",         
  5: "backcountry-x",         
  6: "freeride-elite",        
  7: "enduro-pro",            
  8: "slalom-race",           
  9: "powder-master",         
  10: "mtb-pro",              
  11: "trail-master",         
  12: "slalom-race",          
};

const allProducts = [
  {
    id: "freeride-elite",
    name: "Freeride Elite",
    category: "Ski",
    price: "139,99 €",
    description: "Freeride skiing goggles",
    features: [
      "Cylindrical lenses",
      "Quick lens change system",
      "Enhanced ventilation",
      "Helmet compatible",
      "All-weather performance"
    ]
  },
  {
    id: "powder-master",
    name: "Powder Master",
    category: "Ski",
    price: "134,99 €",
    description: "Powder skiing goggles",
    features: [
      "Extra-wide view",
      "Anti-fog ventilation",
      "Thermal insulation",
      "Snow-specific lenses",
      "Comfort fit"
    ]
  },
  {
    id: "slalom-race",
    name: "Slalom Race",
    category: "Ski",
    price: "149,99 €",
    description: "Competition ski goggles",
    features: [
      "Aerodynamic design",
      "High contrast lenses",
      "Competition strap",
      "Peripheral vision optimized",
      "Professional grade"
    ]
  },
  {
    id: "backcountry-x",
    name: "Backcountry X",
    category: "Ski",
    price: "159,99 €",
    description: "Backcountry skiing goggles",
    features: [
      "Photochromatic lenses",
      "Lightweight construction",
      "Enhanced durability",
      "All-mountain performance",
      "Premium accessories"
    ]
  },
  {
    id: "enduro-pro",
    name: "Enduro Pro",
    category: "MTB",
    price: "109,99 €",
    description: "Enduro riding goggles",
    features: [
      "Medium field of view",
      "Anti-fog coating",
      "Adjustable strap",
      "Dust protection",
      "Lightweight"
    ]
  },
  {
    id: "mtb-pro",
    name: "MTB Pro",
    category: "Cycling",
    price: "75,99 €",
    description: "Professional mountain bike glasses",
    features: [
      "Impact resistant lenses",
      "Ventilation system",
      "Adjustable nose bridge",
      "Sweat-resistant coating",
      "Quick lens change"
    ]
  },
  {
    id: "trail-master",
    name: "Trail Master",
    category: "Cycling",
    price: "72,99 €",
    description: "Trail riding glasses",
    features: [
      "Wraparound protection",
      "Enhanced peripheral vision",
      "Interchangeable lenses",
      "Adjustable temples",
      "Durable construction"
    ]
  },
  {
    id: "default",
    name: "THE TROOP EVO",
    category: "Sport",
    price: "79,99 €",
    description: "Swiss-Engineered sport glasses",
    features: [
      "Swiss-Engineered TR 90 Material",
      "Lightweight",
      "Ultra-Flexible Frame",
      "Shockproof",
      "Magnetic Lens Replacement System",
      "Super Anti-Fog Technology"
    ]
  }
];

const getProductById = (id) => {
  const product = allProducts.find(p => p.id === id);
  return product || allProducts.find(p => p.id === "default");
};

export default function HeroDetailModal({ hero, isOpen, onClose, onShowProduct }) {
  if (!isOpen || !hero) return null;
  
  const heroPhoto = heroPhotos[(hero.id - 1) % heroPhotos.length];
  const productPhoto = productPhotos[(hero.id - 1) % productPhotos.length];
  
  const productId = heroToProductMap[hero.id] || "default";
  const product = getProductById(productId);
  
  const topHeroIds = [4, 10, 11, 12];

  const isTopHero = topHeroIds.includes(hero.id);

  const getInstagramLink = (instagram) => {
    if (!instagram) return null;
    const username = instagram.replace('@', '');
    return `https://instagram.com/${username}`;
  };

  const handleProductClick = () => {
    onClose(); 
    onShowProduct(productId);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FiX size={20} />
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <div className="hero-photo-container">
              <img 
                src={heroPhoto} 
                alt={hero.name} 
                className={`hero-photo-img ${isTopHero ? 'top-position' : ''}`}
                loading="lazy"
              />
            </div>
            
            <div className="hero-text-content">
              <div className="hero-category">
                <span className="category-label">SPORT</span>
                <span className="sport-name">{hero.sport}</span>
              </div>

              <h1 className="hero-title hero-name">{hero.name.toUpperCase()}</h1>

              <div className="hero-details">
                <div className="detail-row">
                  <span className="detail-label">NAME SURNAME</span>
                  <span className="detail-value">{hero.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">AGE</span>
                  <span className="detail-value">{hero.age}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">FAVORITE PARK</span>
                  <span className="detail-value park-name">{hero.favoritePark}</span>
                </div>
                {hero.instagram && (
                  <div className="detail-row">
                    <span className="detail-label">INSTAGRAM</span>
                    <div className="instagram-value">
                      <FaInstagram className="instagram-icon" />
                      <a 
                        href={getInstagramLink(hero.instagram)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="instagram-account"
                      >
                        {hero.instagram}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-right">
            <div className="favorite-section" onClick={handleProductClick} style={{ cursor: 'pointer' }}>
              <div className="product-info">
                <div className="product-image-container">
                  <img src={productPhoto} alt={product.name} className="product-photo-img" loading="lazy" />
                </div>
                
                <h3 className="product-title">{product.name}</h3>
                <p className="product-specs">Medium Size, Exchangeable Lens, Polarized</p>
                <div className="product-variant">8 COMBINATION</div>
                
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}