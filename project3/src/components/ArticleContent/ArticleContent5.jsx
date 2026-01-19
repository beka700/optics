import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art6 from '../../assets/img6.png'

export default function ArticleContent5({ onBack }) {
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
          THE BEST SKI GOGGLES FOR BEGINNERS
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Hannah Neuhauser</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>7 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>18.11.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>Are you finally ready to hit the slopes this year? Then one thing is absolutely essential: the right equipment. While you can easily rent skis and boots at any ski resort, finding the perfect pair of beginner ski goggles can be a bit tricky. To help you keep a clear view, we've summarized the most important criteria for choosing the right pair.</p>

          <h3>Do I even need ski goggles as a beginner?</h3>
          <p>If it's your very first time skiing and you just want to give the sport a try, you don't need to buy new ski goggles yet. For your first day, you can ski without goggles, or wear sunglasses if you feel dazzled. Just make sure your sunglasses are shatterproof and don't have real glass lenses — they could break and cause injury in case of a fall.</p>

          <p>However, if you've already discovered skiing for yourself and are now investing in new gear, there are several reasons why you should choose ski goggles instead of sunglasses:</p>

          <ul>
            <li><strong>Shatterproof:</strong> Ski goggle lenses are made of polycarbonate, which won't break or splinter.</li>
            <li><strong>Anti-fog coating:</strong> Unlike sunglasses, ski goggles have a special coating that prevents fogging in changing temperatures.</li>
            <li><strong>Warmth:</strong> The foam-padded frame keeps the goggles close to your face, protecting your eyes and skin from cold wind.</li>
            <li><strong>UV protection:</strong> Ski goggles protect your eyes from harmful UV rays just like sunglasses.</li>
            <li><strong>Optimal visibility:</strong> Many ski goggles now have interchangeable lenses, giving you the best possible vision in any light condition.</li>
          </ul>

          <img src={art6} alt="Beginner ski goggles" />

          <h3>How to find the right ski goggles for beginners</h3>
          <p>For anyone new to skiing, the perfect goggles should be functional but affordable. They serve as extra protection against wind, snow, dirt — and even injuries from falls. Beginners often put their goggles through a lot! Branches, ski edges, and ice are common enemies. That's why we recommend not buying the most expensive model right away. Good beginner ski goggles start at under €100. You can often find great deals in the NAKED Optics Outlet, where previous season models are cheaper but still offer top technology.</p>

          <p>Another great tip is to choose ski goggles with interchangeable lenses. They come with multiple advantages: if your lens gets scratched, you can simply replace it without buying new goggles. Plus, you'll always have the best visibility — especially on cloudy days when contrast-enhancing lenses help you see the terrain more clearly and avoid obstacles early.</p>

          <p>If you still have questions about finding the perfect ski goggles for beginners, our customer support team will be happy to help.</p>


          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Elias Neier
          </p>
        </div>
      </div>
    </div>
  );
}