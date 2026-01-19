import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art7 from '../../assets/img7.png'

export default function ArticleContent6({ onBack }) {
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
          WHAT TO DO IF YOUR SKI GOGGLES FOG UP? TIPS FOR CLEAR VISION ON THE SLOPES.
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Hannah Neuhauser</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>10 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>11.11.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>The ski resorts are finally kicking off the new season – time to enjoy fresh slopes and the first powder runs. But with the cold temperatures comes a familiar problem: fogged-up ski goggles. Many winter sports enthusiasts ask themselves, "What can I do when my ski goggles fog up?" – NAKED Optics has put together the best tips to help you keep a clear view on the mountain.</p>

          <h3>Why do ski goggles fog up in the first place?</h3>
          <p>The phenomenon is easy to explain: warm air from your face or breath meets the cold lens of your ski goggles – and due to the temperature difference between your body and the surrounding air, condensation forms. These tiny water droplets settle on the inside of the lens and cloud your vision. This happens especially quickly in snowfall or high humidity when ventilation openings are blocked or the goggles are damp.</p>

          <h3>Home remedies and measures against fogged-up ski goggles</h3>
          <p>There are countless home remedy tips for fogged-up ski goggles online, but be careful: curious tricks like toothpaste or dish soap are a no-go – they destroy the sensitive anti-fog coating on your lenses. The same applies to anti-fog sprays; these only work on optical glasses without coatings.</p>

          <p>It's much better to protect your ski goggles from fogging with proper handling and care.</p>

          <img src={art7} alt="Fogged up goggles" />

          <h3>NAKED Optics tip: Anti-fog coating instead of spray</h3>
          <p>Many people reach for anti-fog sprays when their ski goggles fog up – but these can do more harm than good. They attack the super-anti-fog layer already integrated into our popular goggle models The NOVA, The SOLAR, and The STORM. These ski goggles are up to 300% more resistant to fogging than conventional models and ensure crystal-clear vision in all weather conditions.</p>

          <h3>Proper behavior on the slopes and in the gondola</h3>
          <p>Always make sure your goggles and helmet are dry and free of snow. Regularly wipe off the top of your helmet to prevent the foam of your goggles from getting damp. Check that no snow builds up between the helmet and the goggle frame, blocking the ventilation openings. Especially after heavy snowfall or a fall, wipe this area thoroughly.</p>

          <p>Fogged-up ski goggles often occur in gondolas or while waiting at the lift. In enclosed spaces, body heat creates moisture that can condense on the lenses. Only place your goggles on your helmet if it's completely dry, and try to prevent warm air from rising into the goggles from below. After riding through snow cannons, remove any snow from your helmet and goggles in the gondola so that no moisture seeps into the foam.</p>

          <p>If your goggles are already fogged up, they need time to dry. The easiest way is to take them off briefly in the gondola or during a short break so they can dry naturally. If that's not an option, gently dab the inside with a microfiber cloth – but avoid touching the anti-fog coating with your fingers or gloves.</p>

          <h3>Care and storage for long-lasting clarity</h3>
          <p>After a day on the slopes, always dry your goggles carefully and store them properly. Use only a soft microfiber cloth or the protective pouch that came with your NAKED Optics goggles – never tissues or clothing, as they can scratch the lenses. Clean only the outer side and let the goggles air-dry. For transport, a hard-shell case is ideal to keep your goggles perfectly protected.</p>

          <h3>The most important things at a glance</h3>
          <ul>
            <li>Make sure your ski goggles are as dry as possible. Regularly remove snow from your helmet and goggles.</li>
            <li>If your goggles are already fogged up, let them dry on their own or gently dab the inside with a microfiber cloth.</li>
            <li>Only clean the outside of your goggles with a soft microfiber cloth to avoid damaging the inner coating.</li>
            <li>Do not use anti-fog sprays, as these can damage the inner coating.</li>
            <li>Always let your ski goggles dry completely before storing them.</li>
          </ul>

          <p>With these tips, you'll enjoy clear vision on your next day in the mountains – no more fogged-up ski goggles standing in your way of the perfect ride!</p>


          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Patrick Bätz
          </p>
        </div>
      </div>
    </div>
  );
}