import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Clothing.css";
import {
  FaStar,
  FaRegStar,
  FaTruck,
  FaUndo
} from "react-icons/fa";
import ben from '../../assets/ben.avif';
import ben1 from '../../assets/ben1.webp';
import ben2 from '../../assets/ben2.webp';
import ben3 from '../../assets/ben3.webp';
import ben4 from '../../assets/ben4.webp';
import ben5 from '../../assets/ben5.webp';
import ben6 from '../../assets/ben6.webp';
import shar from '../../assets/shar.avif';
import shar1 from '../../assets/shar1.webp';
import shar2 from '../../assets/shar2.webp';
import glov from '../../assets/glov.avif';
import glov1 from '../../assets/glov1.webp';
import glov2 from '../../assets/glov2.webp';
import glov3 from '../../assets/glov3.webp';
import glov4 from '../../assets/glov4.webp';
import glov5 from '../../assets/glov5.webp';
import shir from '../../assets/shir.avif';
import shir1 from '../../assets/shir1.webp';
import shir2 from '../../assets/shir2.webp';
import shir3 from '../../assets/shir3.webp';
import shir4 from '../../assets/shir4.webp';
import shir5 from '../../assets/shir5.webp';
import shir6 from '../../assets/shir6.webp';
import shir7 from '../../assets/shir7.webp';
import therm from '../../assets/therm.avif';
import therm1 from '../../assets/therm1.webp';
import therm2 from '../../assets/therm2.webp';
import therm3 from '../../assets/therm3.webp';
import socks from '../../assets/socks.avif';
import socks1 from '../../assets/socks1.webp';
import socks2 from '../../assets/socks2.webp';

const productsData = {
  "beanie-1": {
    id: "beanie-1",
    name: "Classic Wool Beanie",
    price: "29,99 €",
    images: [ben1, ben, ben2],
    description: "Premium wool beanie for cold weather. Made from 100% merino wool for ultimate comfort and warmth.",
    category: "beanie",
    features: ["100% Merino Wool", "Breathable", "Machine Washable", "One Size Fits All"],
    sizes: ["One Size"],
    colors: ["Navy", "Black", "Gray"],
    rating: 4.5,
    reviews: 24
  },
  "beanie-2": {
    id: "beanie-2",
    name: "Sport Cap Black",
    price: "24,99 €",
    images: [ben2, ben],
    description: "Sporty cap for outdoor activities with UV protection.",
    category: "beanie",
    features: ["Polyester", "UV Protection", "Adjustable", "Moisture Wicking"],
    sizes: ["One Size"],
    colors: ["Black", "Navy"],
    rating: 4.2,
    reviews: 18
  },
  "beanie-3": {
    id: "beanie-3",
    name: "Urban Beanie",
    price: "32,99 €",
    images: [ben3, ben],
    description: "Stylish urban beanie for everyday wear.",
    category: "beanie",
    features: ["Acrylic Blend", "Soft Touch", "Unisex", "Modern Design"],
    sizes: ["One Size"],
    colors: ["Gray", "Black", "Burgundy"],
    rating: 4.7,
    reviews: 31
  },
  "beanie-4": {
    id: "beanie-4",
    name: "Baseball Cap Blue",
    price: "22,99 €",
    images: [ben4, ben],
    description: "Classic baseball cap with adjustable strap.",
    category: "beanie",
    features: ["Cotton", "Adjustable Strap", "Pre-curved Visor", "Breathable"],
    sizes: ["One Size"],
    colors: ["Blue", "Black", "White"],
    rating: 4.3,
    reviews: 15
  },
  "beanie-5": {
    id: "beanie-5",
    name: "Winter Knit Beanie",
    price: "34,99 €",
    images: [ben5, ben],
    description: "Extra warm knit beanie for harsh winters.",
    category: "beanie",
    features: ["Wool Blend", "Thermal", "Handmade", "Extra Thick"],
    sizes: ["One Size", "XL"],
    colors: ["Gray", "Navy", "Burgundy", "Cream"],
    rating: 4.8,
    reviews: 42
  },
  "beanie-6": {
    id: "beanie-6",
    name: "Bucket Hat",
    price: "27,99 €",
    images: [ben6, ben],
    description: "Fashion bucket hat perfect for sunny days.",
    category: "beanie",
    features: ["Cotton", "Sun Protection", "Foldable", "Lightweight"],
    sizes: ["One Size"],
    colors: ["Beige", "Black", "Khaki"],
    rating: 4.4,
    reviews: 22
  },
  "scarf-1": {
    id: "scarf-1",
    name: "Cashmere Scarf",
    price: "89,99 €",
    images: [shar1, shar],
    description: "Luxury cashmere scarf for ultimate comfort.",
    category: "scarf",
    features: ["100% Cashmere", "Ultra Soft", "Lightweight", "All Season"],
    sizes: ["180x70cm"],
    colors: ["Gray", "Navy", "Camel", "Charcoal"],
    rating: 4.9,
    reviews: 37
  },
  "scarf-2": {
    id: "scarf-2",
    name: "Wool Scarf Grey",
    price: "49,99 €",
    images: [shar2, shar],
    description: "Warm wool scarf for cold weather.",
    category: "scarf",
    features: ["Merino Wool", "Breathable", "All Season", "Soft"],
    sizes: ["200x80cm"],
    colors: ["Gray", "Charcoal", "Navy"],
    rating: 4.6,
    reviews: 28
  },
  "gloves-1": {
    id: "gloves-1",
    name: "Leather Gloves",
    price: "59,99 €",
    images: [glov1, glov],
    description: "Premium leather gloves with touchscreen compatibility.",
    category: "gloves",
    features: ["Genuine Leather", "Warm Lining", "Touchscreen Compatible", "Durable"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Black", "Tan"],
    rating: 4.7,
    reviews: 45
  },
  "gloves-2": {
    id: "gloves-2",
    name: "Touchscreen Gloves",
    price: "34,99 €",
    images: [glov2, glov],
    description: "Gloves with touchscreen fingertips for smartphone use.",
    category: "gloves",
    features: ["Touchscreen Fingertips", "Fleece Lining", "Stretch Fit", "Machine Washable"],
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.4,
    reviews: 32
  },
  "gloves-3": {
    id: "gloves-3",
    name: "Winter Sports Gloves",
    price: "69,99 €",
    images: [glov3, glov],
    description: "Gloves designed for winter sports with waterproof membrane.",
    category: "gloves",
    features: ["Waterproof", "Insulated", "Grip Palm", "Wrist Strap"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Red"],
    rating: 4.8,
    reviews: 51
  },
  "gloves-4": {
    id: "gloves-4",
    name: "Fingerless Gloves",
    price: "24,99 €",
    images: [glov4, glov],
    description: "Fingerless gloves for dexterity while keeping hands warm.",
    category: "gloves",
    features: ["Fingerless Design", "Wool Blend", "Touchscreen Compatible", "Breathable"],
    sizes: ["One Size"],
    colors: ["Gray", "Black", "Navy"],
    rating: 4.2,
    reviews: 19
  },
  "gloves-5": {
    id: "gloves-5",
    name: "Thermal Gloves",
    price: "44,99 €",
    images: [glov5, glov],
    description: "Extra warm thermal gloves for extreme cold.",
    category: "gloves",
    features: ["Thermal Insulation", "Windproof", "Moisture Wicking", "Adjustable Cuff"],
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray", "Charcoal"],
    rating: 4.6,
    reviews: 27
  },
  "tshirt-1": {
    id: "tshirt-1",
    name: "Premium Cotton T-Shirt",
    price: "34,99 €",
    images: [shir1, shir],
    description: "Premium quality cotton t-shirt for everyday comfort.",
    category: "tshirts",
    features: ["100% Organic Cotton", "Breathable", "Pre-shrunk", "Tagless"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"],
    rating: 4.7,
    reviews: 63
  },
  "tshirt-2": {
    id: "tshirt-2",
    name: "Zip Hoodie",
    price: "64,99 €",
    images: [shir2, shir],
    description: "Comfortable zip hoodie with kangaroo pocket.",
    category: "tshirts",
    features: ["Cotton Blend", "Kangaroo Pocket", "Adjustable Hood", "Ribbed Cuffs"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "Burgundy"],
    rating: 4.5,
    reviews: 42
  },
  "tshirt-3": {
    id: "tshirt-3",
    name: "Sport T-Shirt",
    price: "29,99 €",
    images: [shir3, shir],
    description: "Moisture-wicking t-shirt for sports activities.",
    category: "tshirts",
    features: ["Moisture Wicking", "Quick Dry", "Breathable", "Lightweight"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Blue", "Red"],
    rating: 4.3,
    reviews: 38
  },
  "tshirt-4": {
    id: "tshirt-4",
    name: "Long Sleeve T-Shirt",
    price: "39,99 €",
    images: [shir4, shir],
    description: "Long sleeve t-shirt for cooler weather.",
    category: "tshirts",
    features: ["Organic Cotton", "Ribbed Cuffs", "Tagless", "Pre-shrunk"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "White"],
    rating: 4.6,
    reviews: 29
  },
  "tshirt-5": {
    id: "tshirt-5",
    name: "Pullover Hoodie",
    price: "59,99 €",
    images: [shir5, shir],
    description: "Classic pullover hoodie with front pocket.",
    category: "tshirts",
    features: ["Fleece Lining", "Front Pocket", "Adjustable Hood", "Soft"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Olive"],
    rating: 4.7,
    reviews: 47
  },
  "tshirt-6": {
    id: "tshirt-6",
    name: "V-Neck T-Shirt",
    price: "27,99 €",
    images: [shir6, shir],
    description: "Stylish V-neck t-shirt for casual wear.",
    category: "tshirts",
    features: ["Cotton Blend", "V-Neck", "Breathable", "Pre-shrunk"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Burgundy"],
    rating: 4.4,
    reviews: 31
  },
  "tshirt-7": {
    id: "tshirt-7",
    name: "Sweatshirt",
    price: "49,99 €",
    images: [shir7, shir],
    description: "Comfortable sweatshirt for lounging.",
    category: "tshirts",
    features: ["French Terry", "Ribbed Cuffs", "Relaxed Fit", "Soft"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy", "Cream"],
    rating: 4.5,
    reviews: 36
  },
  "thermal-1": {
    id: "thermal-1",
    name: "Thermal Top",
    price: "44,99 €",
    images: [therm1, therm],
    description: "Thermal top for extreme cold weather protection.",
    category: "thermal",
    features: ["Thermal Insulation", "Moisture Wicking", "Breathable", "Tagless"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    rating: 4.8,
    reviews: 41
  },
  "thermal-2": {
    id: "thermal-2",
    name: "Thermal Leggings",
    price: "39,99 €",
    images: [therm2, therm],
    description: "Thermal leggings for cold weather activities.",
    category: "thermal",
    features: ["Thermal Insulation", "Stretch Fit", "Moisture Wicking", "Breathable"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.6,
    reviews: 33
  },
  "thermal-3": {
    id: "thermal-3",
    name: "Merino Wool Top",
    price: "69,99 €",
    images: [therm3, therm],
    description: "Merino wool thermal top for natural warmth.",
    category: "thermal",
    features: ["100% Merino Wool", "Odor Resistant", "Breathable", "Moisture Wicking"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    rating: 4.9,
    reviews: 52
  },
  "socks-1": {
    id: "socks-1",
    name: "Sports Socks",
    price: "19,99 €",
    images: [socks1, socks],
    description: "Performance sports socks with cushioning.",
    category: "socks",
    features: ["Moisture Wicking", "Cushioned Sole", "Arch Support", "Breathable"],
    sizes: ["35–38", "39–42", "43–46"],
    colors: ["White", "Black", "Gray"],
    rating: 4.5,
    reviews: 67
  },
  "socks-2": {
    id: "socks-2",
    name: "Wool Hiking Socks",
    price: "24,99 €",
    images: [socks2, socks],
    description: "Wool hiking socks for outdoor adventures.",
    category: "socks",
    features: ["Merino Wool", "Cushioned", "Breathable", "Moisture Wicking"],
    sizes: ["35–38", "39–42", "43–46"],
    colors: ["Gray", "Navy", "Olive"],
    rating: 4.7,
    reviews: 48
  }
};

function ProductPage({ product, onBack }) {
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleThumbClick = (image) => {
    setMainImage(image);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star-icon filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="star-icon half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon" />);
      }
    }
    
    return stars;
  };

  const getColorStyle = (color) => {
    const colorMap = {
      "Navy": "#001f3f",
      "Black": "#111827",
      "Gray": "#6b7280",
      "White": "#ffffff",
      "Blue": "#0074D9",
      "Burgundy": "#800020",
      "Cream": "#FFFDD0",
      "Tan": "#D2B48C",
      "Charcoal": "#36454F",
      "Camel": "#C19A6B",
      "Khaki": "#C3B091",
      "Red": "#FF4136",
      "Olive": "#808000",
      "Brown": "#964B00",
      "Beige": "#F5F5DC"
    };
    
    return {
      backgroundColor: colorMap[color] || color.toLowerCase(),
      border: color === "White" ? "1px solid #ccc" : "none"
    };
  };

  return (
    <section className="product-section">
      <div className="product-wrapper">
        <button 
          className="back-button"
          onClick={onBack}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "10px 20px",
            background: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            zIndex: 10
          }}
        >
          ← Back to Products
        </button>
        
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
              {renderStars(product.rating)}
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
            <select 
              className="product-select" 
              value={selectedSize}
              onChange={handleSizeChange}
            >
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
                  style={getColorStyle(color)}
                  onClick={() => handleColorClick(color)}
                  title={color}
                />
              ))}
            </div>
          </div>

          <button 
            className="add-to-cart-btn"
            style={{
              width: "100%",
              padding: "15px",
              background: "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "20px"
            }}
          >
            Add to Cart
          </button>

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

export default function Clothing({ onCardClick }) {
  const [activeCategory, setActiveCategory] = useState("beanie");
  const [activeTitle, setActiveTitle] = useState("Beanies/Caps");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category, title) => {
    setActiveCategory(category);
    setActiveTitle(title);
    setSelectedProduct(null);
  };

  const handleCardClick = (productId) => {
    const product = productsData[productId];
    if (product) {
      if (onCardClick) {
        // Используем внешний обработчик если он передан
        onCardClick(productId);
      } else {
        // Иначе показываем продукт внутри компонента
        setSelectedProduct(product);
      }
    }
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const renderProducts = () => {
    switch (activeCategory) {
      case "beanie":
        return <BeanieProducts onCardClick={handleCardClick} />;
      case "scarf":
        return <ScarfProducts onCardClick={handleCardClick} />;
      case "gloves":
        return <GlovesProducts onCardClick={handleCardClick} />;
      case "tshirts":
        return <TshirtsProducts onCardClick={handleCardClick} />;
      case "thermal":
        return <ThermalProducts onCardClick={handleCardClick} />;
      case "socks":
        return <SocksProducts onCardClick={handleCardClick} />;
      default:
        return <BeanieProducts onCardClick={handleCardClick} />;
    }
  };

  // Если продукт выбран и нет внешнего обработчика, показываем ProductPage
  if (selectedProduct && !onCardClick) {
    return <ProductPage product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <section className="clothing">
      <div className="clothing-container">
        <aside className="clothing-sidebar">
          <div className="clothing-side-group">
            <h6 className="clothing-side-title">Clothing</h6>
            
            <div 
              className={`clothing-side-item ${activeCategory === "beanie" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("beanie", "Beanies/Caps")}
              style={{ cursor: 'pointer' }}
            >
              <img src={ben} alt="Beanie" className="clothing-category-icon" />
              <span>Beanies/Caps</span>
            </div>
            
            <div 
              className={`clothing-side-item ${activeCategory === "scarf" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("scarf", "Scarf/Bandanas")}
              style={{ cursor: 'pointer' }}
            >
              <img src={shar} alt="Scarf" className="clothing-category-icon" />
              <span>Scarf/Bandanas</span>
            </div>
            
            <div 
              className={`clothing-side-item ${activeCategory === "gloves" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("gloves", "Gloves")}
              style={{ cursor: 'pointer' }}
            >
              <img src={glov} alt="Gloves" className="clothing-category-icon" />
              <span>Gloves</span>
            </div>
            
            <div 
              className={`clothing-side-item ${activeCategory === "tshirts" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("tshirts", "T-shirts/hoodies")}
              style={{ cursor: 'pointer' }}
            >
              <img src={shir} alt="T-shirt" className="clothing-category-icon" />
              <span>T-shirts/hoodies</span>
            </div>
            
            <div 
              className={`clothing-side-item ${activeCategory === "thermal" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("thermal", "Thermal Underwear")}
              style={{ cursor: 'pointer' }}
            >
              <img src={therm} alt="Thermal" className="clothing-category-icon" />
              <span>Thermal Underwear</span>
            </div>

            <div 
              className={`clothing-side-item ${activeCategory === "socks" ? "clothing-active" : ""}`}
              onClick={() => handleCategoryClick("socks", "Socks")}
              style={{ cursor: 'pointer' }}
            >
              <img src={socks} alt="Socks" className="clothing-category-icon" />
              <span>Socks</span>
            </div>
          </div>
        </aside>
        
        <div className="clothing-content">
          <div className="clothing-content-head">
            <h2>{activeTitle}</h2>
          </div>

          {renderProducts()}
        </div>
      </div>
    </section>
  );
}

function BeanieProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("beanie-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={ben1} alt="Classic Wool Beanie" />
        </div>
        <h4 className="clothing-h4">Classic Wool Beanie</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("beanie-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={ben2} alt="Sport Cap Black" />
        </div>
        <h5>Sport Cap Black</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("beanie-3")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={ben3} alt="Urban Beanie" />
        </div>
        <h5>Urban Beanie</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("beanie-4")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={ben4} alt="Baseball Cap Blue" />
        </div>
        <h5>Baseball Cap Blue</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("beanie-5")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={ben5} alt="Winter Knit Beanie" />
        </div>
        <h5>Winter Knit Beanie</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("beanie-6")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={ben6} alt="Bucket Hat" />
        </div>
        <h5>Bucket Hat</h5>
      </article>
    </div>
  );
}

function ScarfProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("scarf-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={shar1} alt="Cashmere Scarf" />
        </div>
        <h4 className="clothing-h4">Cashmere Scarf</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("scarf-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shar2} alt="Wool Scarf Grey" />
        </div>
        <h5>Wool Scarf Grey</h5>
      </article>
    </div>
  );
}

function GlovesProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("gloves-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={glov1} alt="Leather Gloves" />
        </div>
        <h4 className="clothing-h4">Leather Gloves</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("gloves-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={glov2} alt="Touchscreen Gloves" />
        </div>
        <h5>Touchscreen Gloves</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("gloves-3")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={glov3} alt="Winter Sports Gloves" />
        </div>
        <h5>Winter Sports Gloves</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("gloves-4")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={glov4} alt="Fingerless Gloves" />
        </div>
        <h5>Fingerless Gloves</h5>
      </article>
      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("gloves-5")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={glov5} alt="Thermal Gloves" />
        </div>
        <h5>Thermal Gloves</h5>
      </article>
    </div>
  );
}

function TshirtsProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("tshirt-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={shir1} alt="Premium Cotton T-Shirt" />
        </div>
        <h4 className="clothing-h4">Premium Cotton T-Shirt</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir2} alt="Zip Hoodie" />
        </div>
        <h5>Zip Hoodie</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-3")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir3} alt="Sport T-Shirt" />
        </div>
        <h5>Sport T-Shirt</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-4")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir4} alt="Long Sleeve T-Shirt" />
        </div>
        <h5>Long Sleeve T-Shirt</h5>
      </article>
      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-5")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir5} alt="Pullover Hoodie" />
        </div>
        <h5>Pullover Hoodie</h5>
      </article>
      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-6")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir6} alt="V-Neck T-Shirt" />
        </div>
        <h5>V-Neck T-Shirt</h5>
      </article>
      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("tshirt-7")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={shir7} alt="Sweatshirt" />
        </div>
        <h5>Sweatshirt</h5>
      </article>
    </div>
  );
}

function ThermalProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("thermal-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={therm1} alt="Thermal Top" />
        </div>
        <h4 className="clothing-h4">Thermal Top</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("thermal-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={therm2} alt="Thermal Leggings" />
        </div>
        <h5>Thermal Leggings</h5>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("thermal-3")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={therm3} alt="Merino Wool Top" />
        </div>
        <h5>Merino Wool Top</h5>
      </article>
    </div>
  );
}

function SocksProducts({ onCardClick }) {
  return (
    <div className="clothing-product-grid">
      <article 
        className="clothing-product-card clothing-featured" 
        onClick={() => onCardClick("socks-1")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image clothing-big">
          <img src={socks1} alt="Sports Socks" />
        </div>
        <h4 className="clothing-h4">Sports Socks</h4>
      </article>

      <article 
        className="clothing-product-card clothing-small" 
        onClick={() => onCardClick("socks-2")}
        style={{ cursor: 'pointer' }}
      >
        <div className="clothing-product-image">
          <img src={socks2} alt="Wool Hiking Socks" />
        </div>
        <h5>Wool Hiking Socks</h5>
      </article>
    </div>
  );
} 