import { useState } from "react";
import "./HeroesSection.css";
import HeroDetailModal from "../HeroDetailModal/HeroDetailModal";
import { useOutletContext } from "react-router-dom";
import hero from '../../assets/heros.png';
import hero1 from '../../assets/heros1.png';
import hero2 from '../../assets/heros2.png';
import hero3 from '../../assets/heros3.png';
import hero4 from '../../assets/heros4.png';
import hero5 from '../../assets/heros5.png';
import hero6 from '../../assets/heros6.png';
import hero7 from '../../assets/heros7.png';
import hero8 from '../../assets/heros8.png';
import hero9 from '../../assets/heros9.png';
import hero10 from '../../assets/heros10.png';
import hero11 from '../../assets/heros11.png';

const heroes = [
  { 
    id: 1, 
    name: "Matej Svancer", 
    tags: ["Freestyle"],
    category: "Freestyle",
    sport: "Freestyle Skiing (Big Air / Slopestyle)",
    age: "20",
    favoritePark: "—",
    instagram: "@shyhim_",
    image: hero
  },
  { 
    id: 2, 
    name: "Patrick Bätz", 
    tags: ["SPORT CATEGORY"],
    category: "Ski Alpin",
    sport: "Ski Alpin",
    age: "30",
    favoritePark: "Ski Arlberg",
    instagram: "@patrickbaetz",
    image: hero1
  },
  { 
    id: 3, 
    name: "Michi Strauss", 
    tags: ["Freeride"],
    category: "Freeride",
    sport: "Freeride Skiing",
    age: "34",
    favoritePark: "Obertauern",
    instagram: "@michael__strauss",
    image: hero2
  },
  { 
    id: 4, 
    name: "Valentina Strohschneider", 
    tags: ["Freeride"],
    category: "Freeride",
    sport: "Freeride Skiing",
    age: "29",
    favoritePark: "St. Anton / Arlberg",
    instagram: "@vali_mcfly",
    image: hero3
  },
  { 
    id: 5, 
    name: "Valentina Fankhauser", 
    tags: ["Ski Alpin"],
    category: "Ski Alpin",
    sport: "Alpine Skiing",
    age: "33",
    favoritePark: "Ski Arlberg / Glungezer",
    instagram: "@valentina.fankhauser",
    image: hero4
  },
  { 
    id: 6, 
    name: "Florian Reiter", 
    tags: ["Freestyle"],
    category: "Freestyle",
    sport: "Freestyle Skiing",
    age: "16",
    favoritePark: "Absolutpark Flachauwinkl",
    instagram: "@flo_rider",
    image: hero5
  },
  { 
    id: 7, 
    name: "Florian Pale", 
    tags: ["Freestyle"],
    category: "Freestyle",
    sport: "Freestyle Skiing",
    age: "20",
    favoritePark: "Serfaus",
    instagram: "@florian.pale",
    image: hero6
  },
  { 
    id: 8, 
    name: "Andreas Penz", 
    tags: ["Freestyle"],
    category: "Freestyle",
    sport: "Freestyle Skiing",
    age: "18",
    favoritePark: "Stubai Zoo",
    instagram: "@andreaspenz",
    image: hero7
  },
  { 
    id: 9, 
    name: "Simon Polt", 
    tags: ["Downhill"],
    category: "Downhill",
    sport: "Downhill MTB",
    age: "18",
    favoritePark: "Schladming",
    instagram: "@simon_polt_797",
    image: hero8
  },
  { 
    id: 10, 
    name: "Sandro Fritsch", 
    tags: ["MTB"],
    category: "MTB",
    sport: "MTB / Downhill",
    age: "17",
    favoritePark: "Bikepark Schladming",
    instagram: "@sandro_fritsch",
    image: hero9
  },
  { 
    id: 11, 
    name: "Kilian Buhl", 
    tags: ["Downhill"],
    category: "Downhill",
    sport: "Downhill MTB",
    age: "22",
    favoritePark: "Leogang / Fieberbrunn",
    instagram: "@kilianbuhl",
    image: hero10
  },
  { 
    id: 12, 
    name: "Max Deutinger", 
    tags: ["Snowboard"],
    category: "Snowboard",
    sport: "Snowboard",
    age: "26",
    favoritePark: "Hochkönig",
    instagram: "@sleepy_max_",
    image: hero11
  },
];

const filters = [
  "All", 
  "Freeride", 
  "Freestyle", 
  "Ski Alpin", 
  "Downhill", 
  "MTB", 
  "Snowboard"
];

export default function HeroesSection() {
  const { onShowProduct } = useOutletContext();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroModal, setShowHeroModal] = useState(false);

  const filteredHeroes = activeFilter === "All" 
    ? heroes 
    : heroes.filter(hero => 
        hero.category === activeFilter || 
        hero.tags.includes(activeFilter)
      );

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
    setShowHeroModal(true);
  };

  const handleCloseModal = () => {
    setShowHeroModal(false);
    setSelectedHero(null);
  };

  const handleModalShowProduct = (productId) => {
    setShowHeroModal(false);
    setSelectedHero(null);
    onShowProduct(productId);
  };

  return (
    <div className="heroes-container">
      <div className="heroes-header">
        <h1 className="heroes-title">NAKED HEROES</h1>
        <div className="heroes-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p>Class aptent taciti sociosqu ad litora torquent per convivia nostra, per inceptos himenaeos.</p>
        </div>
      </div>

      <div className="heroes-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="heroes-grid">
        {filteredHeroes.map(hero => (
          <div
            key={hero.id}
            className="hero-card"
            onClick={() => handleHeroClick(hero)}
          >
            <div 
              className="hero-image" 
              style={{ 
                backgroundImage: `url(${hero.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="hero-info">
              <h3>{hero.name}</h3>
              <div className="hero-tags">
                {hero.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showHeroModal && selectedHero && (
        <HeroDetailModal
          hero={selectedHero}
          isOpen={showHeroModal}
          onClose={handleCloseModal}
          onShowProduct={handleModalShowProduct}
        />
      )}
    </div>
  );
}