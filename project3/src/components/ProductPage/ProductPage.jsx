import {
  FaStar,
  FaRegStar,
  FaTruck,
  FaUndo
} from "react-icons/fa";
import "./productPage.css";
import { useState, useEffect } from "react";
import yellow1 from '../../assets/ski444.webp'; 
import yellow2 from '../../assets/ski4.webp';
import yellow3 from '../../assets/ski44.webp';

const allProducts = [
  {
    id: "freeride-elite",
    name: "Freeride Elite",
    price: "139,99 €",
    description: "Freeride skiing goggles",
    features: [
      "Cylindrical lenses",
      "Quick lens change system",
      "Enhanced ventilation",
      "Helmet compatible",
      "All-weather performance"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Red", "Blue"],
    category: "Ski"
  },
  {
    id: "powder-master",
    name: "Powder Master",
    price: "134,99 €",
    description: "Powder skiing goggles",
    features: [
      "Extra-wide view",
      "Anti-fog ventilation",
      "Thermal insulation",
      "Snow-specific lenses",
      "Comfort fit"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "White", "Yellow"],
    category: "Ski"
  },
  {
    id: "slalom-race",
    name: "Slalom Race",
    price: "149,99 €",
    description: "Competition ski goggles",
    features: [
      "Aerodynamic design",
      "High contrast lenses",
      "Competition strap",
      "Peripheral vision optimized",
      "Professional grade"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Blue", "Red"],
    category: "Ski"
  },
  {
    id: "backcountry-x",
    name: "Backcountry X",
    price: "159,99 €",
    description: "Backcountry skiing goggles",
    features: [
      "Photochromatic lenses",
      "Lightweight construction",
      "Enhanced durability",
      "All-mountain performance",
      "Premium accessories"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Gray", "Orange"],
    category: "Ski"
  },
  {
    id: "enduro-pro",
    name: "Enduro Pro",
    price: "109,99 €",
    description: "Enduro riding goggles",
    features: [
      "Medium field of view",
      "Anti-fog coating",
      "Adjustable strap",
      "Dust protection",
      "Lightweight"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Green", "Blue"],
    category: "MTB"
  },
  {
    id: "mtb-pro",
    name: "MTB Pro",
    price: "75,99 €",
    description: "Professional mountain bike glasses",
    features: [
      "Impact resistant lenses",
      "Ventilation system",
      "Adjustable nose bridge",
      "Sweat-resistant coating",
      "Quick lens change"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Red", "Yellow"],
    category: "Cycling"
  },
  {
    id: "trail-master",
    name: "Trail Master",
    price: "72,99 €",
    description: "Trail riding glasses",
    features: [
      "Wraparound protection",
      "Enhanced peripheral vision",
      "Interchangeable lenses",
      "Adjustable temples",
      "Durable construction"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Blue", "Gray"],
    category: "Cycling"
  },
  {
    id: "default",
    name: "THE TROOP EVO",
    price: "79,99 €",
    description: "Swiss-Engineered sport glasses",
    features: [
      "Swiss-Engineered TR 90 Material",
      "Lightweight",
      "Ultra-Flexible Frame",
      "Shockproof",
      "Magnetic Lens Replacement System",
      "Super Anti-Fog Technology"
    ],
    images: [yellow1, yellow2, yellow3],
    rating: 5,
    reviews: 168,
    sizes: ["Medium", "Large"],
    colors: ["Black", "Yellow", "Blue"],
    category: "Sport"
  }
];

const getProductById = (id) => {
  const product = allProducts.find(p => p.id === id);
  return product || allProducts.find(p => p.id === "default");
};

export default function ProductPage({ productId }) {
  const product = getProductById(productId);
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");

  useEffect(() => {
    if (product?.images?.[0]) {
      setMainImage(product.images[0]);
    }
    if (product?.colors?.[0]) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;  
  }

  const handleThumbClick = (image) => {
    setMainImage(image);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className="product-section">
      <div className="product-wrapper">
        <div className="product-images">
          <div className="product-thumbs">
            {product.images.map((image, index) => (
              <img 
                key={index}
                className={`product-thumb ${mainImage === image ? 'active' : ''}`} 
                src={image} 
                alt={`${product.name} view ${index + 1}`} 
                onClick={() => handleThumbClick(image)}
              />
            ))}
          </div>

          <div className="product-main-image">
            <img src={mainImage} alt={product.name} />
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-rating">
            <div className="product-stars">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1;
                return ratingValue <= Math.floor(product.rating) ? (
                  <FaStar key={i} className="star-icon filled" />
                ) : ratingValue === Math.ceil(product.rating) && product.rating % 1 !== 0 ? (
                  <FaStar key={i} className="star-icon half-filled" />
                ) : (
                  <FaRegStar key={i} className="star-icon" />
                );
              })}
            </div>
            <span className="product-review-count">{product.reviews} Reviews</span>
          </div>

          <div className="product-price">{product.price}</div>

          <p className="product-description">{product.description}</p>

          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="product-option">
            <label className="product-label">Size</label>
            <select className="product-select">
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="product-option">
            <label className="product-label">Color</label>
            <div className="product-colors">
              {product.colors.map((color, index) => (
                <div 
                  key={index}
                  className={`color-circle ${selectedColor === color ? 'active' : ''}`}
                  style={{ 
                    backgroundColor: color.toLowerCase(),
                    border: color.toLowerCase() === 'white' ? '1px solid #ccc' : 'none'
                  }}
                  onClick={() => handleColorClick(color)}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="product-benefits">
            <div className="product-benefit">
              <FaTruck />
              <span><strong>Free shipping</strong> from 100€</span>
            </div>

            <div className="product-benefit">
              <FaUndo />
              <span><strong>Easy return</strong> 30 days money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}