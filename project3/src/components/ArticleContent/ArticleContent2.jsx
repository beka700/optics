import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent2.css";

export default function ArticleContent2({ onBack }) {
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
          FACTS AND MYTHS: WHAT YOU REALLY NEED TO KNOW ABOUT SKIING IN WINTER
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Marie Albrecht</span>
          </div>

          <div className="article-meta-item">
            <FiClock />
            <span>10 min read</span>
          </div>

          <div className="article-meta-item">
            <FiCalendar />
            <span>28.11.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>
            When temperatures drop and the first snow falls on the mountains, it's time to hit the slopes again! But countless stories and myths surround skiing. Below, we'll clear up a few of them for you.
          </p>

          <h3>Myth 1: "Skiing is only for rich people"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: more fake than fact
          </p>
          <p>
            Sure, lift passes and equipment can be quite expensive these days, but there are countless ways to hit the slopes as cheaply as possible. Early bird deals, regional day passes, or even smaller areas away from the tourist hotspots can help save you money. Of course, equipment also costs money, but you can save smartly by renting, whether on-site or from family/friends, and by buying secondhand. It's worth investing properly in a helmet, clothing, and ski goggles to get long-term value. Buying these items reduces the risk of injury. Our ski goggles are perfect for this. Bonus tip: Check out these NAKED Optics ski goggles.
          </p>

          <h3>Myth 2: "Sunburn? Not in winter!"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: fake
          </p>
          <p>
            When you spend a classic cold and sunny day skiing in the mountains, sunburn isn't usually the first thing that comes to mind. But the sun's rays are almost twice as intense on snow as normal. Up to 80% of UV radiation is reflected. Without sunscreen and good sunglasses, you'll be red-faced faster than you can say "après-ski." So, it's better to apply sunscreen more often and enjoy skiing for longer.
          </p>

          <h3>Myth 3: "You only learn to ski as a child"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: fake - total nonsense
          </p>
          <p>
            Of course, children usually learn to ski faster and are certainly less afraid. But with the right skis and a ski instructor or ski course, that fear is quickly overcome. You shouldn't get flustered easily and, just like the children, you shouldn't lose the fun of it all.
          </p>

          <h3>Myth 4: "Artificial snow is bad for the environment"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: neither
          </p>
          <p>
            It's clear that artificial snow consumes a lot of water and energy. Nevertheless, the systems are more modern and efficient than before. Many ski resorts now rely on green electricity and sustainable water management. These measures further contribute to making artificial snow more environmentally friendly than in the past. While the issue is very complex and meets with resistance from some, a black-and-white approach isn't helpful. It's also important to recognize that without artificial snow, long days on the slopes and ski seasons are simply impossible these days.
          </p>

          <h3>Myth 5: "Snowboarders and skiers? Eternal rivals!"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: neither
          </p>
          <p>
            The old rivalries are a thing of the past. On the slopes, style, fun, and respect are what count. And that doesn't matter what kind of skis you're on. In the end, everyone will meet up again at après-ski in the mountain huts anyway.
          </p>

          <h3>Myth 6: "A cheap pair of glasses is perfectly sufficient"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: fact
          </p>
          <p>
            Good ski goggles not only protect against UV radiation but also improve contrast and vision. This is especially important in changing light conditions. Our interchangeable lenses allow you to be appropriately equipped and stylish for any weather. This helps you spot bumps and patches of ice earlier, for example. It's not only cooler but also safer. Even if you're on a budget, you don't have to compromise on quality and features, as demonstrated by our goggles for under €100.
          </p>

          <h3>Myth 7: "Anti-fog coating? Pure marketing ploy!"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: fake – 100%
          </p>
          <p>
            If you've ever been out in the fog with fogged-up glasses, you know how important clear vision is. Our anti-fog technology in the glasses ensures that your vision remains clear at all times, no matter what. This technology combines a special ventilation system with coated lenses. If your lenses do happen to fog up, here are a few tips for clear vision.
          </p>

          <h3>Myth 8: "Glasses under a helmet? Impossible!"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: Fact – if helmet and goggles match
          </p>
          <p>
            Whether glasses work well under a helmet depends primarily on how well the two fit together. If the shape is right, nothing pinches, and the glasses stay securely in place, there's no reason not to. Our models are designed to be lightweight and comfortable to wear under or on a helmet. This way, you don't have to choose between comfort and protection. You'll also find an overview of different combinations here, so you can quickly see what works well together.
          </p>

          <h3>Myth 9: "The faster, the better!"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: more fake than fact
          </p>
          <p>
            Many people believe that you can only ski "properly" if you're hurtling down the slope at high speed. But this myth is complete nonsense. Technique, control, and of course, fun are paramount. Having speed is all well and good, but skiing too fast not only risks falls but also endangers others. So, it's better to carve cleanly than to race wildly; it looks better in the end anyway.
          </p>

          <h3>Myth 10: "After a fall, the equipment is still okay"</h3>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '5px' }}>
            Fact or fake: fake
          </p>
          <p>
            Everyone takes a tumble or two when they first start skiing. They probably didn't give their helmet or other equipment a second thought. Even a small fall can cause tiny, invisible cracks. This is especially important for helmets: after an impact, you should have them checked or replaced. Safety, and of course the safety of others, comes first. This also applies to goggles if the lenses are badly scratched or the frame is bent. So always double-check everything before something worse happens.
          </p>

          <h3>Conclusion: More facts, fewer myths</h3>
          <p>
            Ultimately, not everything you hear about skiing is true. Many myths persist, but with the right knowledge, suitable equipment, and a bit of common sense, nothing stands in the way of fun on the slopes. Whether you're a beginner or a pro, the most important thing is to stay safe, be aware of your surroundings, and enjoy winter to the fullest!
          </p>
        </div>
      </div>
    </div>
  );
}