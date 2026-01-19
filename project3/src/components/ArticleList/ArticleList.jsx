import React from "react";
import "./ArticleList.css";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img10 from '../../assets/img10.png';
import img11 from '../../assets/img11.png';
import img12 from '../../assets/img12.png';
import img13 from '../../assets/img13.png';
import img14 from '../../assets/img14.png';
import img15 from '../../assets/img15.png';
import img16 from '../../assets/img16.png';
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const navigate = useNavigate();
  
  const articles = [
    {
      id: 1,
      title: "Properly storing your ski equipment: How to keep your gear fit for the next season",
      image: img1,
    },
    {
      id: 2,
      title: "Ski equipment: Renting vs. buying – which is better?",
      image: img2,
    },
    {
      id: 3,
      title: "Facts and myths: What you really need to know about skiing in winter",
      image: img3,
    },
    {
      id: 4,
      title: "Skiing with a toddler – what's the best way to do it?",
      image: img4,
    },
    {
      id: 5,
      title: "The largest ski resorts in Europe and Austria – Where winter is at home",
      image: img5,
    },
    {
      id: 6,
      title: "The Best Ski Goggles for Beginners",
      image: img6,
    },
    {
      id: 7,
      title: "What to do if your ski goggles fog up? Tips for clear vision on the slopes.",
      image: img7,
    },
    {
      id: 8,
      title: "Ski Openings 2025: The most important dates & events in Austria and Europe",
      image: img8,
    },
    {
      id: 9,
      title: "Ski pass prices in Europe: The most expensive and cheapest ski resorts in 2025/26 at a glance",
      image: img9,
    },
    {
      id: 10,
      title: "Behind the scenes: How we at NAKED Optics are preparing for the winter season",
      image: img10,
    },
    {
      id: 11,
      title: "Book the perfect winter holiday with SnowTrex: Compare ski resorts & save",
      image: img11,
    },
    {
      id: 12,
      title: "NAKED X Strawanza – a long-term partnership",
      image: img12,
    },
    {
      id: 13,
      title: "Meet Stefan Müller: Passionate guide and bike expert",
      image: img13,
    },
    {
      id: 14,
      title: "Passionate skiers: Naked Hero Michi Strauss",
      image: img14,
    },
    {
      id: 15,
      title: "Stevie Schneider: Bike insights and tips from the drift cobra",
      image: img15,
    },
    {
      id: 16,
      title: "Stevie Schneider bike hacks for mountain bikers and downhillers",
      image: img16,
    },
  ];

  const handleArticleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="article-list-container">
      <div className="articles-grid">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="article-card"
            onClick={() => handleArticleClick(article.id)}
          >
            <img src={article.image} alt={article.title} />
            <div className="article-overlay">
              <h3>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;