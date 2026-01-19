import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art8 from '../../assets/img8.png'

export default function ArticleContent7({ onBack }) {
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
          SKI OPENINGS 2025: THE MOST IMPORTANT DATES & EVENTS IN AUSTRIA AND EUROPE
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Dominik Gaßner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>12 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>31.10.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>Winter is just around the corner, and the first snow has already fallen in many regions. This raises the big question: When will the ski resorts open in 2025? And: Where will the biggest ski opening festivals and concerts take place?</p>

          <p>Whether in Ischgl, Flachau, Schladming, or the legendary Saalbach-Hinterglemm-Leogang-Fieberbrunn ski area – the start of the season in many ski resorts is celebrated not only with perfectly groomed slopes, but also with concerts, festivals, and parties. International stars like Robbie Williams, Demi Lovato, and Timmy Trumpet have shown in recent years that ski openings in Austria are much more than "just skiing."</p>

          <p>Here you will find all the important dates for the start of winter 2025.</p>

          <h3>Ski Openings in Austria 2025 – the biggest events</h3>
          
          <h4>Schladming – Ski Opening with the Backstreet Boys (December 5–7)</h4>
          <p>An absolute classic: the Schladming Ski Opening. This year with a real highlight: the Backstreet Boys will transform the Planai Stadium into a giant party for three nights. With hits like "I Want It That Way" and "Everybody," goosebumps are guaranteed.</p>

          <h4>Bad Gastein - Gastein Sounds (December 12-13)</h4>
          <p>The new winter open-air festival Gastein Sounds will take place in Bad Hofgastein for the first time this year – CRO, SKI AGGU, SDP, IKKIMEL and BELLA will provide the big beats to kick things off.</p>

          <img src={art8} alt="Ski opening events" />

          <h4>Ischgl – Top of the Mountain Opening Concert (November 29th)</h4>
          <p>Ischgl kicks off the season on November 27th with open slopes and crowns the opening on November 29th with the legendary Top of the Mountain Opening Concert. Headliner 2025: Rita Ora.</p>

          <h4>Saalbach-Hinterglemm – BERGFESTival & Rave on Snow (December 5-7)</h4>
          <p>From December 5th to 7th, the Saalbach-Hinterglemm, Fieberbrunn, and Leogang ski area will also open. The BERGFESTival festival will take place concurrently, featuring acts such as Marteria, Turbobier, and Brew Barrymore. A week later, the party continues with electronic beats at Rave on Snow in Saalbach.</p>

          <h4>St. Anton am Arlberg – Ski Opening with Fäaschtbänkler (December 5-7)</h4>
          <p>St. Anton also kicks off its festivities on the first weekend of December. Visitors can expect a diverse program: live bands, DJs, ski and snowboard tests, and lectures. The highlight: the Fäaschtbänkler concert on Sunday.</p>

          <h4>Flachau – Winter Opening with Andreas Gabalier & DJ Ötzi (December 5-6)</h4>
          <p>There will also be celebrations in Snow Space Salzburg: On December 5th and 6th, 2025, none other than Andreas Gabalier and DJ Ötzi will perform.</p>

          <h4>Obertauern - Seiler & Speer, Folkshilfe, Edmund and Matakustik (November 28 & December 5)</h4>
          <p>The ski season in Obertauern starts on November 21st. A week later, the skiing will be officially kicked off with a concert by Seiler & Speer and Folkshilfe. And as if that weren't enough, Edmund and Matakustik will also be coming to Obertauern at the beginning of December.</p>

          <h3>International Ski Openings 2025</h3>
          
          <h4>Val Thorens (France) – La Grande Première (November 22–23)</h4>
          <p>Val Thorens is considered one of the most snow-sure ski resorts in Europe. The season opening is celebrated here with the Grande Première – including a raclette party and a colorful supporting program.</p>

          <h4>Les 2 Alpes (France) – Rise Festival (December 6–12)</h4>
          <p>A mix of skiing, partying and an international line-up: The Rise Festival in Les 2 Alpes is one of the biggest winter festivals in Europe.</p>

          <h4>Samnaun (Switzerland) – Smuggler Trophy & Concert (November 29)</h4>
          <p>Samnaun opens the season with the ROCK ANTENNE Band and a unique race: the Smuggler Trophy. The ski season starts two days earlier, on November 27th.</p>

          <h4>Verbier (Switzerland) – Season starts on December 6th</h4>
          <p>The sophisticated resort of Verbier kicks off its winter season on December 6th with events and live music.</p>

          <h4>Alta Badia (South Tyrol) – Season starts on December 5th.</h4>
          <p>In Alta Badia, the slopes will open from December 5th, depending on snow conditions.</p>

          <h3>Conclusion: The start of winter 2025 will be legendary.</h3>
          <p>Whether you're celebrating with the Backstreet Boys at the Ski Opening in Schladming, rocking out at the BERGFESTival in Saalbach or enjoying the Grande Première in Val Thorens – the 2025 ski season starts at full throttle.</p>

          <p>And remember: For perfect vision on every opening day, you need the right ski goggles. At NAKED Optics you'll find our latest models like The SOLAR and The NOVA – with Super Anti-Fog technology, the Magnet-Tech-Pro lens replacement system, and sustainable CO₂RE bioplastic.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Flo Dorn
          </p>
        </div>
      </div>
    </div>
  );
}