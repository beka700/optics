import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art1 from '../../assets/art1.webp'

export default function ArticleContent({ onBack }) {
  
  return (
    <div className="article-content-page">
      <div className="article-content-container">
        <div className="article-content-top">
          <button className="article-back-btn" onClick={onBack}>
            <FiArrowLeft />
            <span>Go Back</span>
          </button>
        </div>

        <h1 className="article-content-title">
          PROPERLY STORING YOUR SKI EQUIPMENT:
          HOW TO KEEP YOUR GEAR FIT FOR THE NEXT SEASON
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Marie Albrecht</span>
          </div>

          <div className="article-meta-item">
            <FiClock />
            <span>5 min read</span>
          </div>

          <div className="article-meta-item">
            <FiCalendar />
            <span>31.12.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>
            The ski season is just beginning, or is it already in full swing? This 
            raises the question of how to properly store your equipment. Between days 
            on the slopes, everything should be easily accessible, but at the same time,
            the gear needs to dry and be protected optimally. Most damage occurs not,
            as many believe, on the slopes, but during transport and storage. Therefore,
            it's all the more worthwhile to pay attention to a few important things during
            the season. If your setup is then carefully packed away in the summer, you'll
            save yourself several steps later.
          </p>

          <p>
            In winter, ski and snowboard maintenance begins immediately after a day on the
            slopes. Skis and snowboards, in particular, should be completely dry before 
            being stored in their racks or bags. Meltwater, salt residue, or dirt can 
            damage the base and edges if left overnight. It's best to brush them off 
            with an old broom before placing them uncovered in the car. At home, you 
            can simply let them dry in a warm room. Make sure to do this away from direct 
            heat or radiators. Ski boots also deserve attention. Ideally, remove the liner, 
            let it dry separately, and then close it again. This helps the shell retain its 
            shape. Leaving the boots uncovered risks them becoming deformed or developing 
            unnecessary pressure points.
          </p>

          <p>
            During the season, quick access to equipment is naturally paramount. This 
            includes regular waxing. In winter, the wax is scraped off to ensure perfect 
            gliding on the slopes. Additionally, a clean, dry place at home is ideal. 
            A dedicated ski room is even better. Wall mounts, ski stands, or open racks 
            ensure that the bases and bindings aren't subjected to unnecessary stress. 
            This also keeps the setup neatly stored between ski days.  Last but not least, 
            don't forget accessories like your helmet and ski goggles. These should be 
            stored clean to prevent moisture buildup and scratches. Scratches or moisture 
            can impair their function and cause the goggles to fog up. If this happens, 
            here are a few tips.
          </p>
          <img src={ art1 } alt="" />
          <p>
            Unfortunately, the ski season eventually comes to an end. With it comes the 
            crucial phase for your equipment: summer storage. This is a bit more complex 
            than winter maintenance, as the equipment sits idle for months. Before storing 
            skis, boots, and accessories, they should be thoroughly cleaned. Skis and 
            snowboards should be carefully wiped down with water and a cloth and dried 
            completely. Afterward, it's important to apply a thick layer of wax. Please 
            note that this time it should not be scraped off. The wax seals the base, 
            preventing the skis from drying out and protecting the edges from rust. It's 
            best to have this done at your trusted ski and snowboard shop.
          </p>
          <p>
            Your bindings also need special care during the off-season. While they remain 
            ready for use immediately in winter, they should be given a break in summer. 
            To do this, turn the DIN setting down slightly or, if available, use the summer 
            mode on your bindings. This relaxes both the springs and the mechanism, noticeably 
            extending their lifespan. Your boots should be completely dry before storage. 
            Removing the liner and letting it air out separately is essential before loosely 
            reassembling everything. The ideal storage location for the summer months should 
            be dry, cool, and protected from direct sunlight. A wardrobe, a storage room, or 
            a well-tempered basement is usually ideal. Garages are often not a good choice 
            due to humidity and significant temperature fluctuations.
          </p>
          <p>
            Accessories such as goggles, helmet, and poles should also be stored carefully. 
            Ski goggles should be cleaned gently, leaving the inside untouched, and then placed 
            in a sturdy case. Suitable accessories such as cases, goggle covers, and cases for 
            interchangeable lenses can be found at the following link: NAKED Optics Accessories. 
            The helmet should be stored in a dry, well-ventilated place to ensure both protection 
            and hygiene. Ski poles should be stored clean and without tension on the straps.
          </p>
          <p>
            In conclusion: Whether winter or summer, proper storage is crucial for durable and 
            high-performing equipment. Those who thoroughly dry their gear after each day of 
            skiing and then store it cleanly, protected, and stress-free will benefit twice over 
            at the start of the next season. Well-maintained equipment is not only ready for use 
            but also lasts longer, saving on unnecessary repairs and service costs.
          </p>
        </div>
      </div>
    </div>
  );
}