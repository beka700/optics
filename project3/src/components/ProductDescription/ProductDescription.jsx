import "./ProductDescription.css";
import { WiStars, WiCloudyWindy } from "react-icons/wi";
import { BsShieldCheck, BsEye, BsSun } from "react-icons/bs";
import { FiFeather } from "react-icons/fi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { SlLayers } from "react-icons/sl";

import frame from '../../assets/frame370.png';
import frame1 from '../../assets/frame348.png';
import frame3 from '../../assets/frame379.gif';
import frame4 from '../../assets/frame378.gif';
import frame5 from '../../assets/frame480.png';
import frame6 from '../../assets/frame481.png';

import j from '../../assets/cardj.png';
import j1 from '../../assets/cardj1.gif';
import j2 from '../../assets/cardj3.png';

export default function ProductDescription() {
  return (
    <section className="desc-section">
      <div className="desc-container">
        <div className="desc-grid">
          <div className="desc-card desc-big">
            <img src={frame} alt="Find Your Style" className="desc-img big-img" />
            <h3>FIND YOUR STYLE</h3>
            <p>
              Our FALCON is available in a total of four <br />
              different frame colours and perfectly rounds off <br />
              the style of women and men. 
            </p>
          </div>

          <div className="desc-card desc-tall tall-card">
            <img src={frame1} alt="Feature #2" className="desc-img tall-img" />
            <h3>FEATURE #2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nunc vulputate libero et velit <br />
            interdum, ac aliquet odio mattis.</p>
          </div>

          <div className="desc-card">
            <img src={frame3} alt="Flexible Frame" className="desc-img regular-img" />
            <h4>Flexible and resilient frame</h4>
          </div>

          <div className="desc-card">
            <img src={frame4} alt="Adjustable Nose Piece" className="desc-img regular-img" />
            <h4>Adjustable nose piece</h4>
          </div>

          <div className="desc-card desc-video">
            <img src={frame5} alt="Product Video" className="desc-img video-img" />
          </div>

          <div className="desc-card different-functions">
            <img src={frame6} alt="Different Functions" className="desc-img functions-img" />
            <h4>DIFFERENT FUNCTIONS</h4>
            <p> The FALCON is equipped with countless features <br />
            to adapt to your sporty needs. Each pair of <br />
            sports glasses comes with an adjustable nose <br />
            piece, a magnetic sweatband and <br />
            interchangeable temples or glasses.  </p>
          </div>
        </div>

        <div className="desc-icons">
          <div className="desc-icon">
            <WiStars />
            <strong>Impact resistance</strong>
            <span>Certified Full-Frame</span>
          </div>

          <div className="desc-icon">
            <BsShieldCheck />
            <strong>Guarantee</strong>
            <span>Lifetime</span>
          </div>

          <div className="desc-icon">
            <WiCloudyWindy />
            <strong>Vents</strong>
            <span>Anti-Fog</span>
          </div>

          <div className="desc-icon">
            <BsEye />
            <strong>Peripheral view</strong>
            <span>Maximised</span>
          </div>

          <div className="desc-icon">
            <FiFeather />
            <strong>Lightweight</strong>
            <span>Super light frame</span>
          </div>

          <div className="desc-icon">
            <MdOutlineTrackChanges />
            <strong>Lens change</strong>
            <span>Interchangeable</span>
          </div>

          <div className="desc-icon">
            <SlLayers />
            <strong>Scratch resistance</strong>
            <span>Triple-layer</span>
          </div>

          <div className="desc-icon">
            <BsSun />
            <strong>UV Protection</strong>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="jj">
        <div className="jj1">
          <h1> PERFECT FOR ENDURO </h1>
        </div>
        <div className="jj2">
          <h1> THE FRAME IS MADE OF 50% OF OUR <br />
          SUSTAINABLE PLASTIC COMPOUND <br />
          CO2RE®.  </h1>
        </div> 
        <div className="jj3">
          <h1> COLOR LENS FOR ANY SITUATION </h1>
        </div> 
      </div>
    </section>
  );
}