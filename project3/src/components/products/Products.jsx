import "./products.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import FilterPanel from "./FilterPanel";
import sun from "../../assets/sun1.webp";
import sun3 from "../../assets/sun2.webp";
import sun6 from "../../assets/sun3.webp";
import sun9 from "../../assets/sun4.webp";
import sun12 from "../../assets/sun5.webp";
import sun15 from "../../assets/sun6.webp";
import sun18 from "../../assets/sun7.webp";
import sport1 from "../../assets/sport1.webp";
import sport2 from "../../assets/sport2.webp";
import sport3 from "../../assets/sport3.webp";
import sport4 from "../../assets/sport4.webp";
import sport5 from "../../assets/sport5.webp";
import basic1 from "../../assets/basic1.webp";
import basic2 from "../../assets/basic2.webp";
import basic3 from "../../assets/basic3.webp";
import basic4 from "../../assets/basic4.webp";
import basic5 from "../../assets/basic5.webp";
import ski1 from "../../assets/ski1.webp";
import ski2 from "../../assets/ski2.webp";
import ski3 from "../../assets/ski3.webp";
import ski4 from "../../assets/ski4.webp";
import ski5 from "../../assets/ski5.webp";
import down1 from "../../assets/down1.webp";
import down2 from "../../assets/down2.webp";
import down3 from "../../assets/down3.webp";
import len1 from "../../assets/len1.webp";
import len2 from "../../assets/len2.webp";
import len3 from "../../assets/len3.webp";
import len4 from "../../assets/len4.webp";
import len5 from "../../assets/len5.webp";
import len6 from "../../assets/len6.webp";
import len7 from "../../assets/len7.webp";
import acs1 from "../../assets/acs1.webp";
import acs2 from "../../assets/acs2.webp";
import acs3 from "../../assets/acs3.webp";
import acs4 from "../../assets/acs4.webp";
import acs5 from "../../assets/acs5.webp";
import acs6 from "../../assets/acs6.webp";
import acs7 from "../../assets/acs7.webp";
import lens1 from '../../assets/lenses.png';
import lens2 from '../../assets/lenses1.png';
import lens3 from '../../assets/lenses2.png';
import lens4 from '../../assets/lenses3.png';
import lens5 from '../../assets/lenses4.png';
import lens6 from '../../assets/lenses5.png';

export default function Products({ onBack, category = "" }) {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("most-viewed");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    size: [],
    system: [],
    features: []
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFilterToggle = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
    
    const active = [];
    if (newFilters.size.length > 0) {
      active.push(...newFilters.size.map(s => `Size ${s}`));
    }
    if (newFilters.system.length > 0) {
      active.push(...newFilters.system);
    }
    if (newFilters.features.length > 0) {
      active.push(...newFilters.features);
    }
    setActiveFilters(active);
    setShowFilterPanel(false);
  };

  const handleResetFilters = () => {
    setAppliedFilters({
      size: [],
      system: [],
      features: []
    });
    setActiveFilters([]);
    setShowFilterPanel(false);
  };

  const removeFilter = (filterToRemove) => {
    const updatedFilters = [...activeFilters].filter(f => f !== filterToRemove);
    setActiveFilters(updatedFilters);
    
    const newAppliedFilters = { ...appliedFilters };
    
    if (filterToRemove.startsWith("Size ")) {
      const size = filterToRemove.replace("Size ", "");
      newAppliedFilters.size = newAppliedFilters.size.filter(s => s !== size);
    } else if (["SnapTech", "Pin Plugin"].includes(filterToRemove)) {
      newAppliedFilters.system = newAppliedFilters.system.filter(s => s !== filterToRemove);
    } else if (["Anti-Fog", "Super Anti-Fog", "Lenslock System", "Interchangeable Straps"].includes(filterToRemove)) {
      newAppliedFilters.features = newAppliedFilters.features.filter(f => f !== filterToRemove);
    }
    
    setAppliedFilters(newAppliedFilters);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const products = [
    {
      id: "slush",
      name: "The SLUSH",
      image: sun,
      meta: "Premium polarized sunglasses with UV400 protection",
      colors: "3 FRAME COLOR + 8 LENS COLOR",
      price: "79,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Anti-Fog"]
    },
    {
      id: "whoop",
      name: "The WHOOP",
      image: sun3,
      meta: "Sport sunglasses with photochromatic lenses",
      colors: "4 FRAME COLOR + 8 LENS COLOR",
      price: "69,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Super Anti-Fog", "Lenslock System"]
    },
    {
      id: "slush-pro",
      name: "The SLUSH Pro",
      image: sun6,
      meta: "Professional grade polarized sunglasses",
      colors: "2 COMBINATION",
      price: "89,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "luna",
      name: "The Luna",
      image: sun9,
      meta: "Elegant sunglasses with mirrored lenses",
      colors: "2 COMBINATION",
      price: "74,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "iris",
      name: "The Iris",
      image: sun12,
      meta: "Aviation style sunglasses",
      colors: "2 COMBINATION",
      price: "82,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog"]
    },
    {
      id: "muse",
      name: "The MUSE",
      image: sun15,
      meta: "Designer sunglasses with gradient lenses",
      colors: "3 COMBINATION",
      price: "76,99 €",
      size: ["S", "M", "L"],
      system: ["Pin Plugin"],
      features: ["Lenslock System"]
    },
    {
      id: "icon",
      name: "The Icon",
      image: sun18,
      meta: "Limited edition luxury sunglasses",
      colors: "2 COMBINATION",
      price: "94,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "rush-half",
      name: "Rush Half Frame",
      image: sport1,
      meta: "Sport glasses with half frame design",
      colors: "3 FRAME COLOR + 8 LENS COLOR",
      price: "64,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "rush-full",
      name: "Rush Full Frame",
      image: sport2,
      meta: "Full frame sport glasses",
      colors: "4 FRAME COLOR + 8 LENS COLOR",
      price: "69,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog"]
    },
    {
      id: "charge-full",
      name: "Charge Full Frame",
      image: sport3,
      meta: "High-performance sport glasses",
      colors: "2 COMBINATION",
      price: "72,99 €",
      size: ["S", "M", "L"],
      system: ["Pin Plugin"],
      features: ["Lenslock System", "Anti-Fog"]
    },
    {
      id: "rush-photochromatic",
      name: "Rush Half Frame Photochromatic",
      image: sport4,
      meta: "Photochromatic sport glasses",
      colors: "2 COMBINATION",
      price: "79,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "hawk",
      name: "The Hawk",
      image: sport5,
      meta: "Premium sport glasses",
      colors: "3 COMBINATION",
      price: "84,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog", "Lenslock System"]
    },
    {
      id: "falcon",
      name: "The Falcon",
      image: sport1,
      meta: "Advanced sport glasses",
      colors: "5 COLOR OPTIONS",
      price: "89,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "mtb-pro",
      name: "MTB Pro",
      image: basic1,
      meta: "Professional mountain bike glasses",
      colors: "4 COLOR OPTIONS",
      price: "75,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "road-elite",
      name: "Road Elite",
      image: basic2,
      meta: "Road cycling glasses",
      colors: "3 COLOR OPTIONS",
      price: "69,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog"]
    },
    {
      id: "trail-master",
      name: "Trail Master",
      image: basic3,
      meta: "Trail riding glasses",
      colors: "6 COLOR OPTIONS",
      price: "72,99 €",
      size: ["S", "M", "L"],
      system: ["Pin Plugin"],
      features: ["Lenslock System"]
    },
    {
      id: "urban-rider",
      name: "Urban Rider",
      image: basic4,
      meta: "Urban cycling glasses",
      colors: "4 COLOR OPTIONS",
      price: "65,99 €",
      size: ["S", "M"],
      system: ["SnapTech"],
      features: ["Anti-Fog"]
    },
    {
      id: "gravel-explorer",
      name: "Gravel Explorer",
      image: basic5,
      meta: "Gravel riding glasses",
      colors: "3 FRAME COLOR + 5 LENS COLOR",
      price: "79,99 €",
      size: ["M", "L"],
      system: ["Pin Plugin"],
      features: ["Super Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "alpine-pro",
      name: "Alpine Pro",
      image: ski1,
      meta: "Professional alpine skiing goggles",
      colors: "2 FRAME COLOR + 6 LENS COLOR",
      price: "129,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Anti-Fog", "Super Anti-Fog"]
    },
    {
      id: "freeride-elite",
      name: "Freeride Elite",
      image: ski2,
      meta: "Freeride skiing goggles",
      colors: "3 COMBINATION",
      price: "139,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Lenslock System"]
    },
    {
      id: "slalom-race",
      name: "Slalom Race",
      image: ski3,
      meta: "Competition ski goggles",
      colors: "4 COMBINATION",
      price: "149,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "powder-master",
      name: "Powder Master",
      image: ski4,
      meta: "Powder skiing goggles",
      colors: "2 COMBINATION",
      price: "134,99 €",
      size: ["S", "M"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "backcountry-x",
      name: "Backcountry X",
      image: ski5,
      meta: "Backcountry skiing goggles",
      colors: "3 COLOR OPTIONS",
      price: "159,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog", "Lenslock System"]
    },
    {
      id: "dh-extreme",
      name: "DH Extreme",
      image: down1,
      meta: "Downhill mountain bike goggles",
      colors: "2 COLOR OPTIONS",
      price: "119,99 €",
      size: ["S", "M", "L"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog", "Interchangeable Straps"]
    },
    {
      id: "enduro-pro",
      name: "Enduro Pro",
      image: down2,
      meta: "Enduro riding goggles",
      colors: "4 COLOR OPTIONS",
      price: "109,99 €",
      size: ["M", "L"],
      system: ["SnapTech"],
      features: ["Super Anti-Fog"]
    },
    {
      id: "xc-light",
      name: "XC Light",
      image: down3,
      meta: "Cross-country goggles",
      colors: "UNIVERSAL FIT",
      price: "99,99 €",
      size: ["S", "M", "L"],
      system: ["Pin Plugin"],
      features: ["Anti-Fog", "Lenslock System"]
    }
  ];

  const accessories = [
    {
      id: "polarized-pro",
      name: "Polarized PRO",
      image: len1,
      meta: "Premium polarized replacement lenses",
      colors: "UNIVERSAL FIT",
      price: "49,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "photochromatic",
      name: "Photochromatic",
      image: len2,
      meta: "Light-adjusting lenses",
      colors: "UNIVERSAL FIT",
      price: "59,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Super Anti-Fog"]
    },
    {
      id: "mirror-coated",
      name: "Mirror Coated",
      image: len3,
      meta: "Mirrored replacement lenses",
      colors: "UNIVERSAL FIT",
      price: "44,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "blue-light-filter",
      name: "Blue Light Filter",
      image: len4,
      meta: "Blue light filtering lenses",
      colors: "UNIVERSAL FIT",
      price: "34,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: []
    },
    {
      id: "night-vision",
      name: "Night Vision",
      image: len5,
      meta: "Yellow tint for low light",
      colors: "UNIVERSAL FIT",
      price: "39,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "anti-fog",
      name: "Anti-Fog",
      image: len6,
      meta: "Anti-fog coating lenses",
      colors: "UNIVERSAL FIT",
      price: "27,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Anti-Fog", "Super Anti-Fog"]
    },
    {
      id: "clear-lens",
      name: "Clear Lens",
      image: len7,
      meta: "Clear protective lenses",
      colors: "UNIVERSAL FIT",
      price: "27,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech", "Pin Plugin"],
      features: ["Anti-Fog"]
    },
    {
      id: "falcon-lens-1",
      name: "The FALCON Lens",
      image: lens1,
      meta: "Black (polarized, Cat. 4)",
      colors: "CAT. 4",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    },
    {
      id: "falcon-lens-2",
      name: "The FALCON Lens",
      image: lens2,
      meta: "Blue (polarized, Cat. 3)",
      colors: "CAT. 3",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    },
    {
      id: "falcon-lens-3",
      name: "The FALCON Lens",
      image: lens3,
      meta: "Red (polarized, Cat. 2)",
      colors: "CAT. 2",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    },
    {
      id: "falcon-lens-4",
      name: "The FALCON Lens",
      image: lens4,
      meta: "Orange (non-polarized, Cat. 1)",
      colors: "CAT. 1",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    },
    {
      id: "falcon-lens-5",
      name: "The FALCON Lens",
      image: lens5,
      meta: "Purple-Green (non-polarized Cat. 1)",
      colors: "CAT. 1",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    },
    {
      id: "falcon-lens-6",
      name: "The FALCON Lens",
      image: lens6,
      meta: "Red (polarized, Cat. 2)",
      colors: "CAT. 2",
      price: "24,99 €",
      size: ["UNIVERSAL"],
      system: ["SnapTech"],
      features: []
    }
  ];

  const additionalAccessories = [
    {
      id: "premium-case",
      name: "Premium Case",
      image: acs1,
      meta: "Hard case for eyewear protection",
      colors: "4 COLOR OPTIONS",
      price: "29,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    },
    {
      id: "lens-cleaner",
      name: "Lens Cleaner",
      image: acs2,
      meta: "Professional lens cleaning kit",
      colors: "6 COLOR OPTIONS",
      price: "14,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    },
    {
      id: "strap-set",
      name: "Strap Set",
      image: acs3,
      meta: "Replacement straps for goggles",
      colors: "STANDARD",
      price: "19,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: ["Interchangeable Straps"]
    },
    {
      id: "nose-pads",
      name: "Nose Pads",
      image: acs4,
      meta: "Replacement nose pads",
      colors: "8 COLOR OPTIONS",
      price: "9,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    },
    {
      id: "temple-tips",
      name: "Temple Tips",
      image: acs5,
      meta: "Replacement temple tips",
      colors: "UNIVERSAL",
      price: "7,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    },
    {
      id: "carrying-bag",
      name: "Carrying Bag",
      image: acs6,
      meta: "Soft carrying bag",
      colors: "UNIVERSAL",
      price: "5,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    },
    {
      id: "microfiber-cloth",
      name: "Microfiber Cloth",
      image: acs7,
      meta: "Cleaning microfiber cloth",
      colors: "3 PACK",
      price: "4,99 €",
      size: ["UNIVERSAL"],
      system: [],
      features: []
    }
  ];

  const filterProducts = (items) => {
    if (appliedFilters.size.length === 0 && 
        appliedFilters.system.length === 0 && 
        appliedFilters.features.length === 0) {
      return items;
    }

    return items.filter(item => {
      if (appliedFilters.size.length > 0) {
        const hasSize = appliedFilters.size.some(size => 
          item.size && item.size.includes(size)
        );
        if (!hasSize) return false;
      }

      if (appliedFilters.system.length > 0) {
        const hasSystem = appliedFilters.system.some(system => 
          item.system && item.system.includes(system)
        );
        if (!hasSystem) return false;
      }

      if (appliedFilters.features.length > 0) {
        const hasFeature = appliedFilters.features.some(feature => 
          item.features && item.features.includes(feature)
        );
        if (!hasFeature) return false;
      }

      return true;
    });
  };

  const sortProducts = (items) => {
    const sorted = [...items];
    
    switch(sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(',', '.').replace(' €', ''));
          const priceB = parseFloat(b.price.replace(',', '.').replace(' €', ''));
          return priceA - priceB;
        });
      case 'price-high':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(',', '.').replace(' €', ''));
          const priceB = parseFloat(b.price.replace(',', '.').replace(' €', ''));
          return priceB - priceA;
        });
      case 'newest':
        return sorted.sort((a, b) => b.id.localeCompare(a.id));
      case 'most-viewed':
      default:
        return sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    }
  };

  const filteredProducts = filterProducts(products);
  const filteredAccessories = filterProducts(accessories);
  const filteredAdditionalAccessories = filterProducts(additionalAccessories);

  const sortedProducts = sortProducts(filteredProducts);
  const sortedAccessories = sortProducts(filteredAccessories);
  const sortedAdditionalAccessories = sortProducts(filteredAdditionalAccessories);

  const totalCount = sortedProducts.length + sortedAccessories.length + sortedAdditionalAccessories.length;

  const renderStars = (rating = 5) => {
    return Array(rating).fill(0).map((_, index) => (
      <FaStar key={index} className="star-icon" />
    ));
  };

  return (
    <>
      <div className="products-header">
        <a className="products-back-bt" onClick={handleBackClick}>
          ← {isMobile ? "Back" : "Go Back"}
        </a>
      </div>
      
      <section className="products">
        <div className="products-hero">
          <h1 className="products-title">
            {category ? category.toUpperCase() : "ALL PRODUCTS"}
          </h1>
          <p className="products-title-p">
            Whether you are running, triathlon, hiking or cycling - a comfortable fit is a must,
            even during long and intensive training sessions. That's why you should make
            sure that your sports glasses have an adjustable nose piece and rubberised
            temples.
          </p>
        </div>

        <div className="products-head">
          <p className="products-count">
            {isMobile ? `MODELS (${totalCount})` : `ALL MODELS (${totalCount})`}
          </p>
          
          <div className="products-actions">
            <div className="sort-wrapper">
              <span className="sort-label">{isMobile ? "Sort:" : "Sort by"}</span>
              <select 
                className="sort" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="most-viewed">Most viewed</option>
                <option value="price-low">Price low to high</option>
                <option value="price-high">Price high to low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <button className="filter-btn" onClick={handleFilterToggle}>
              {isMobile ? "Filter" : "Filter"}
            </button>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="active-filters">
            {activeFilters.map((filter, index) => (
              <div key={index} className="filter-tag">
                {isMobile && filter.includes("Size ") 
                  ? filter.replace("Size ", "S") 
                  : filter}
                <button 
                  className="filter-tag-remove"
                  onClick={() => removeFilter(filter)}
                >
                  ×
                </button>
              </div>
            ))}
            <button 
              className="filter-tag clear-all"
              onClick={handleResetFilters}
            >
              {isMobile ? "Clear" : "Clear all"}
            </button>
          </div>
        )}

        <div className="products-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card" 
                style={{ '--card-index': index }}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="product-img-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-img" 
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-meta">{product.meta}</p>
                  <p className="product-colors">{product.colors}</p>
                  <div className="product-rating-price">
                    <div className="rating-container">
                      <div className="rating">
                        {renderStars()}
                      </div>
                    </div>
                    <p className="product-price price-large">{product.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products match your filters. Try adjusting your criteria.</p>
            </div>
          )}
        </div>

        {sortedAccessories.length > 0 && (
          <div className="accessories-section">
            <h2 className="section-title">Lenses</h2>
            <div className="accessories-grid">
              {sortedAccessories.map((accessory, index) => (
                <div 
                  key={accessory.id} 
                  className="product-card accessory-card" 
                  style={{ '--card-index': index }}
                  onClick={() => handleProductClick(accessory.id)}
                >
                  <div className="product-img-container">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name} 
                      className="product-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <h4 className="accessory-name">{accessory.name}</h4>
                    <p className="product-meta">{accessory.meta}</p>
                    <p className="product-colors">{accessory.colors}</p>
                    <div className="product-rating-price">
                      <div className="rating-container">
                        <div className="rating">
                          {renderStars()}
                        </div>
                      </div>
                      <p className="product-price price-large">{accessory.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {sortedAdditionalAccessories.length > 0 && (
          <div className="accessories-section">
            <h2 className="section-title">Accessories</h2>
            <div className="accessories-grid">
              {sortedAdditionalAccessories.map((accessory, index) => (
                <div 
                  key={accessory.id} 
                  className="product-card accessory-card" 
                  style={{ '--card-index': index }}
                  onClick={() => handleProductClick(accessory.id)}
                >
                  <div className="product-img-container">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name} 
                      className="product-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <h4 className="accessory-name">{accessory.name}</h4>
                    <p className="product-meta">{accessory.meta}</p>
                    <p className="product-colors">{accessory.colors}</p>
                    <div className="product-rating-price">
                      <div className="rating-container">
                        <div className="rating">
                          {renderStars()}
                        </div>
                      </div>
                      <p className="product-price price-large">{accessory.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showFilterPanel && (
          <FilterPanel 
            onClose={handleFilterToggle}
            onApplyFilters={handleApplyFilters}
            onResetFilters={handleResetFilters}
            initialFilters={appliedFilters}
            isMobile={isMobile}
          />
        )}
      </section>
    </>
  );
}