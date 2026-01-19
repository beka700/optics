import "./description.css";
import { useState } from "react";
import dis from '../../assets/dis.png'
import dis1 from '../../assets/dis1.png'
import dis2 from '../../assets/dis2.png'

export default function Description() {
  const [activeImage, setActiveImage] = useState(dis);

  const handleImageClick = (e, image) => {
    e.stopPropagation(); 
    setActiveImage(image);
  };

  return (
    <section className="desc-section">
      <div className="desc-wrapper">

        <div className="desc-tabs">
          <button className="desc-tab active">Description</button>
          <button className="desc-tab">Other Products</button>
        </div>
        
        <div className="desc-cards">
          <div 
            className={`desc-card desc-card-1 ${activeImage === dis ? 'active' : ''}`}
            style={{ backgroundImage: `url(${dis})` }}
            onClick={() => setActiveImage(dis)}
          >
            <div className="desc-overlay">
              <h3 className="desc-title">MADE WITH LOVE IN ITALY</h3>
              <p className="desc-text">
                Merino ski socks are made and produced in Italy <br />
                with the best merino wool treated with a <br />
                technology that allows feet to feel breathable.
              </p>
            </div>
          </div>
          
          <div 
            className={`desc-card desc-card-2 ${activeImage === dis1 ? 'active' : ''}`}
            style={{ backgroundImage: `url(${dis1})` }}
            onClick={() => setActiveImage(dis1)}
          >
            <div className="desc-overlay">
              <h3 className="desc-title1">SUPER COMFORTABLE</h3>
              <p className="desc-text1">
                The socks fit comfortably under ski boots, with <br />
                targeted padded areas to prevent blisters or <br />
                discomfort. An elasticated arch support <br />
                prevents foot fatigue and a flexible top ensures <br />
                the wool socks are comfortable to wear all day, <br />
                giving you the full day on the mountain.
              </p>
            </div>
          </div>
          
          <div 
            className={`desc-card desc-card-3 ${activeImage === dis2 ? 'active' : ''}`}
            style={{ backgroundImage: `url(${dis2})` }}
            onClick={() => setActiveImage(dis2)}
          >
            <div className="desc-overlay">
              <h3 className="desc-title">THE PERFECT FIT</h3>
              <p className="desc-text">
                We know that outdoor adventures demand the <br />
                perfect fit and function, so our NAKED Socks line <br />
                features an innovative blend of merino wool and <br />
                polyamide to wick away moisture while <br />
                maintaining the foot's natural temperature so <br />
                feet don't feel too warm.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}