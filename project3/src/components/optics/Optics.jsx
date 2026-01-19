import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./optics.css";
import gl from "../../assets/image 15 (3).png";
import gl1 from "../../assets/image 15 (4).png";
import gl2 from "../../assets/image 15 (2).png";
import gl3 from "../../assets/image 15 (6).png";
import gl4 from "../../assets/image 15 (7).png";
import gl5 from "../../assets/image 15 (8).png";
import gl6 from "../../assets/image 15 (9).png";
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

function SunglassesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("slush")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("slush")}
        aria-label="View The SLUSH product"
      >
        <div className="product-image big">
          <img src={sun} alt="The SLUSH" loading="lazy" />
        </div>
        <h4 className="op-h4">The SLUSH</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("whoop")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("whoop")}
        aria-label="View The WHOOP product"
      >
        <div className="product-image">
          <img src={sun3} alt="The WHOOP" loading="lazy" />
        </div>
        <h5>The WHOOP</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("slush-pro")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("slush-pro")}
        aria-label="View The SLUSH Pro product"
      >
        <div className="product-image">
          <img src={sun6} alt="The SLUSH Pro" loading="lazy" />
        </div>
        <h5>The SLUSH Pro</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("luna")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("luna")}
        aria-label="View The Luna product"
      >
        <div className="product-image">
          <img src={sun9} alt="The Luna" loading="lazy" />
        </div>
        <h5>The Luna</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("iris")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("iris")}
        aria-label="View The Iris product"
      >
        <div className="product-image">
          <img src={sun12} alt="The Iris" loading="lazy" />
        </div>
        <h5>The Iris</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("muse")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("muse")}
        aria-label="View The MUSE product"
      >
        <div className="product-image">
          <img src={sun15} alt="The MUSE" loading="lazy" />
        </div>
        <h5>The MUSE</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("icon")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("icon")}
        aria-label="View The Icon product"
      >
        <div className="product-image">
          <img src={sun18} alt="The Icon" loading="lazy" />
        </div>
        <h5>The Icon</h5>
      </article>
    </div>
  );
}

function SportGlassesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("rush-half")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("rush-half")}
        aria-label="View Rush Half Frame product"
      >
        <div className="product-image big">
          <img src={sport1} alt="Rush Half Frame" loading="lazy" />
        </div>
        <h4 className="op-h4">Rush Half Frame</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("rush-full")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("rush-full")}
        aria-label="View Rush Full Frame product"
      >
        <div className="product-image">
          <img src={sport2} alt="Rush Full Frame" loading="lazy" />
        </div>
        <h5>Rush Full Frame</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("charge-full")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("charge-full")}
        aria-label="View Charge Full Frame product"
      >
        <div className="product-image">
          <img src={sport3} alt="Charge Full Frame" loading="lazy" />
        </div>
        <h5>Charge Full Frame</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("rush-photochromatic")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("rush-photochromatic")}
        aria-label="View Rush Half Frame Photochromatic product"
      >
        <div className="product-image">
          <img src={sport4} alt="Rush Half Frame Photochromatic" loading="lazy" />
        </div>
        <h5>Rush Half Frame Photochromatic</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("hawk")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("hawk")}
        aria-label="View The Hawk product"
      >
        <div className="product-image">
          <img src={sport5} alt="The Hawk" loading="lazy" />
        </div>
        <h5>The Hawk</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("falcon")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("falcon")}
        aria-label="View The Falcon product"
      >
        <div className="product-image">
          <img src={gl1} alt="The Falcon" loading="lazy" />
        </div>
        <h5>The Falcon</h5>
      </article>
    </div>
  );
}

function BicycleGlassesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("mtb-pro")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("mtb-pro")}
        aria-label="View MTB Pro product"
      >
        <div className="product-image big">
          <img src={basic1} alt="MTB Pro" loading="lazy" />
        </div>
        <h4 className="op-h4">MTB Pro</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("road-elite")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("road-elite")}
        aria-label="View Road Elite product"
      >
        <div className="product-image">
          <img src={basic2} alt="Road Elite" loading="lazy" />
        </div>
        <h5>Road Elite</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("trail-master")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("trail-master")}
        aria-label="View Trail Master product"
      >
        <div className="product-image">
          <img src={basic3} alt="Trail Master" loading="lazy" />
        </div>
        <h5>Trail Master</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("urban-rider")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("urban-rider")}
        aria-label="View Urban Rider product"
      >
        <div className="product-image">
          <img src={basic4} alt="Urban Rider" loading="lazy" />
        </div>
        <h5>Urban Rider</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("gravel-explorer")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("gravel-explorer")}
        aria-label="View Gravel Explorer product"
      >
        <div className="product-image">
          <img src={basic5} alt="Gravel Explorer" loading="lazy" />
        </div>
        <h5>Gravel Explorer</h5>
      </article>
    </div>
  );
}

function SkiGogglesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("alpine-pro")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("alpine-pro")}
        aria-label="View Alpine Pro product"
      >
        <div className="product-image big">
          <img src={ski1} alt="Alpine Pro" loading="lazy" />
        </div>
        <h4 className="op-h4">Alpine Pro</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("freeride-elite")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("freeride-elite")}
        aria-label="View Freeride Elite product"
      >
        <div className="product-image">
          <img src={ski2} alt="Freeride Elite" loading="lazy" />
        </div>
        <h5>Freeride Elite</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("slalom-race")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("slalom-race")}
        aria-label="View Slalom Race product"
      >
        <div className="product-image">
          <img src={ski3} alt="Slalom Race" loading="lazy" />
        </div>
        <h5>Slalom Race</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("powder-master")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("powder-master")}
        aria-label="View Powder Master product"
      >
        <div className="product-image">
          <img src={ski4} alt="Powder Master" loading="lazy" />
        </div>
        <h5>Powder Master</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("backcountry-x")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("backcountry-x")}
        aria-label="View Backcountry X product"
      >
        <div className="product-image">
          <img src={ski5} alt="Backcountry X" loading="lazy" />
        </div>
        <h5>Backcountry X</h5>
      </article>
    </div>
  );
}

function DownhillGogglesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("dh-extreme")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("dh-extreme")}
        aria-label="View DH Extreme product"
      >
        <div className="product-image big">
          <img src={down1} alt="DH Extreme" loading="lazy" />
        </div>
        <h4 className="op-h4">DH Extreme</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("enduro-pro")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("enduro-pro")}
        aria-label="View Enduro Pro product"
      >
        <div className="product-image">
          <img src={down2} alt="Enduro Pro" loading="lazy" />
        </div>
        <h5>Enduro Pro</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("xc-light")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("xc-light")}
        aria-label="View XC Light product"
      >
        <div className="product-image">
          <img src={down3} alt="XC Light" loading="lazy" />
        </div>
        <h5>XC Light</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("trail-blazer")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("trail-blazer")}
        aria-label="View Trail Blazer product"
      >
        <div className="product-image">
          <img src={gl4} alt="Trail Blazer" loading="lazy" />
        </div>
        <h5>Trail Blazer</h5>
      </article>
    </div>
  );
}

function LensesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("polarized-pro")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("polarized-pro")}
        aria-label="View Polarized PRO product"
      >
        <div className="product-image big">
          <img src={len1} alt="Polarized PRO" loading="lazy" />
        </div>
        <h4 className="op-h4">Polarized PRO</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("photochromatic")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("photochromatic")}
        aria-label="View Photochromatic product"
      >
        <div className="product-image">
          <img src={len2} alt="Photochromatic" loading="lazy" />
        </div>
        <h5>Photochromatic</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("mirror-coated")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("mirror-coated")}
        aria-label="View Mirror Coated product"
      >
        <div className="product-image">
          <img src={len3} alt="Mirror Coated" loading="lazy" />
        </div>
        <h5>Mirror Coated</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("blue-light-filter")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("blue-light-filter")}
        aria-label="View Blue Light Filter product"
      >
        <div className="product-image">
          <img src={len4} alt="Blue Light Filter" loading="lazy" />
        </div>
        <h5>Blue Light Filter</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("night-vision")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("night-vision")}
        aria-label="View Night Vision product"
      >
        <div className="product-image">
          <img src={len5} alt="Night Vision" loading="lazy" />
        </div>
        <h5>Night Vision</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("anti-fog")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("anti-fog")}
        aria-label="View Anti-Fog product"
      >
        <div className="product-image">
          <img src={len6} alt="Anti-Fog" loading="lazy" />
        </div>
        <h5>Anti-Fog</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("clear-lens")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("clear-lens")}
        aria-label="View Clear Lens product"
      >
        <div className="product-image">
          <img src={len7} alt="Clear Lens" loading="lazy" />
        </div>
        <h5>Clear Lens</h5>
      </article>
    </div>
  );
}

function AccessoriesProducts({ onCardClick }) {
  return (
    <div className="product-grid">
      <article 
        className="product-card featured" 
        onClick={() => onCardClick("premium-case")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("premium-case")}
        aria-label="View Premium Case product"
      >
        <div className="product-image big">
          <img src={acs1} alt="Premium Case" loading="lazy" />
        </div>
        <h4 className="op-h4">Premium Case</h4>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("lens-cleaner")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("lens-cleaner")}
        aria-label="View Lens Cleaner product"
      >
        <div className="product-image">
          <img src={acs2} alt="Lens Cleaner" loading="lazy" />
        </div>
        <h5>Lens Cleaner</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("strap-set")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("strap-set")}
        aria-label="View Strap Set product"
      >
        <div className="product-image">
          <img src={acs3} alt="Strap Set" loading="lazy" />
        </div>
        <h5>Strap Set</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("nose-pads")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("nose-pads")}
        aria-label="View Nose Pads product"
      >
        <div className="product-image">
          <img src={acs4} alt="Nose Pads" loading="lazy" />
        </div>
        <h5>Nose Pads</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("temple-tips")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("temple-tips")}
        aria-label="View Temple Tips product"
      >
        <div className="product-image">
          <img src={acs5} alt="Temple Tips" loading="lazy" />
        </div>
        <h5>Temple Tips</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("carrying-bag")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("carrying-bag")}
        aria-label="View Carrying Bag product"
      >
        <div className="product-image">
          <img src={acs6} alt="Carrying Bag" loading="lazy" />
        </div>
        <h5>Carrying Bag</h5>
      </article>

      <article 
        className="product-card small" 
        onClick={() => onCardClick("microfiber-cloth")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onCardClick("microfiber-cloth")}
        aria-label="View Microfiber Cloth product"
      >
        <div className="product-image">
          <img src={acs7} alt="Microfiber Cloth" loading="lazy" />
        </div>
        <h5>Microfiber Cloth</h5>
      </article>
    </div>
  );
}

export default function Optics({ onCardClick, onSeeAllProducts }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { category: routeCategory, title: routeTitle } = location.state || {};
  const [activeCategory, setActiveCategory] = useState(routeCategory || "sunglasses");
  const [activeTitle, setActiveTitle] = useState(routeTitle || "Sunglasses");

  useEffect(() => {
    if (routeCategory && routeTitle) {
      setActiveCategory(routeCategory);
      setActiveTitle(routeTitle);
    }
  }, [routeCategory, routeTitle]);

  const handleCategoryClick = (category, title) => {
    setActiveCategory(category);
    setActiveTitle(title);
    window.scrollTo(0, 0);
  };

  const handleCardClick = (productId) => {
    if (onCardClick) {
      onCardClick(productId);
    } else {
      navigate(`/product/${productId}`);
    }
  };

  const handleSeeAllClick = () => {
    if (onSeeAllProducts) {
      onSeeAllProducts(activeCategory);
    } else {
      navigate(`/products/${activeCategory}`);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const renderProducts = () => {
    switch (activeCategory) {
      case "sunglasses":
        return <SunglassesProducts onCardClick={handleCardClick} />;
      case "sport":
        return <SportGlassesProducts onCardClick={handleCardClick} />;
      case "bicycle":
        return <BicycleGlassesProducts onCardClick={handleCardClick} />;
      case "ski":
        return <SkiGogglesProducts onCardClick={handleCardClick} />;
      case "downhill":
        return <DownhillGogglesProducts onCardClick={handleCardClick} />;
      case "lenses":
        return <LensesProducts onCardClick={handleCardClick} />;
      case "accessories":
        return <AccessoriesProducts onCardClick={handleCardClick} />;
      default:
        return <SunglassesProducts onCardClick={handleCardClick} />;
    }
  };

  const handleCategoryKeyDown = (e, category, title) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCategoryClick(category, title);
    }
  };

  return (
    <section className="optics" aria-label="Optics products section">
      <aside className="optics-sidebar">
        <div className="back-and-title">
          <button 
            className="go-back-btn" 
            onClick={handleGoBack}
            aria-label="Go back to previous page"
          >
            ← Go Back
          </button>
          
          <div className="side-group">
            <h6 className="side-title">Glasses</h6>

            <div 
              className={`side-item ${activeCategory === "sunglasses" ? "active" : ""}`}
              onClick={() => handleCategoryClick("sunglasses", "Sunglasses")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "sunglasses", "Sunglasses")}
              role="button"
              tabIndex={0}
              aria-label="View sunglasses category"
            >
              <img src={gl} alt="Sunglasses" loading="lazy" />
              <span>Sunglasses</span>
            </div>

            <div 
              className={`side-item ${activeCategory === "sport" ? "active" : ""}`}
              onClick={() => handleCategoryClick("sport", "Sport glasses")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "sport", "Sport glasses")}
              role="button"
              tabIndex={0}
              aria-label="View sport glasses category"
            >
              <img src={gl1} alt="Sport glasses" loading="lazy" />
              <span>Sport glasses</span>
            </div>

            <div 
              className={`side-item ${activeCategory === "bicycle" ? "active" : ""}`}
              onClick={() => handleCategoryClick("bicycle", "Bicycle glasses")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "bicycle", "Bicycle glasses")}
              role="button"
              tabIndex={0}
              aria-label="View bicycle glasses category"
            >
              <img src={gl2} alt="Bicycle glasses" loading="lazy" />
              <span>Bicycle glasses</span>
            </div>
          </div>

          <div className="side-group">
            <h6 className="side-title">Goggles</h6>

            <div 
              className={`side-item ${activeCategory === "ski" ? "active" : ""}`}
              onClick={() => handleCategoryClick("ski", "Ski goggles")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "ski", "Ski goggles")}
              role="button"
              tabIndex={0}
              aria-label="View ski goggles category"
            >
              <img src={gl3} alt="Ski goggles" loading="lazy" />
              <span>Ski goggles</span>
            </div>

            <div 
              className={`side-item ${activeCategory === "downhill" ? "active" : ""}`}
              onClick={() => handleCategoryClick("downhill", "Downhill goggles")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "downhill", "Downhill goggles")}
              role="button"
              tabIndex={0}
              aria-label="View downhill goggles category"
            >
              <img src={gl4} alt="Downhill goggles" loading="lazy" />
              <span>Downhill goggles</span>
            </div>
          </div>

          <div className="side-group">
            <h6 className="side-title">Others</h6>

            <div 
              className={`side-item ${activeCategory === "lenses" ? "active" : ""}`}
              onClick={() => handleCategoryClick("lenses", "Lenses")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "lenses", "Lenses")}
              role="button"
              tabIndex={0}
              aria-label="View lenses category"
            >
              <img src={gl5} alt="Lenses" loading="lazy" />
              <span>Lenses</span>
            </div>

            <div 
              className={`side-item ${activeCategory === "accessories" ? "active" : ""}`}
              onClick={() => handleCategoryClick("accessories", "Accessories")}
              onKeyDown={(e) => handleCategoryKeyDown(e, "accessories", "Accessories")}
              role="button"
              tabIndex={0}
              aria-label="View accessories category"
            >
              <img src={gl6} alt="Accessories" loading="lazy" />
              <span>Accessories</span>
            </div>
          </div>
        </div>
      </aside>
      
      <div className="optics-content">
        <div className="content-head">
          <div className="back-and-title">
            <h2 id="category-title">{activeTitle}</h2>
          </div>
          <button 
            className="see-all" 
            onClick={handleSeeAllClick}
            aria-label={`See all ${activeTitle} products`}
          >
            See all products ›
          </button>
        </div>

        {renderProducts()}
      </div>
    </section>
  );
}