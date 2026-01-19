import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art16 from '../../assets/img16.png'

export default function ArticleContent15({ onBack }) {
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
          STEVIE SCHNEIDER BIKE HACKS FOR MOUNTAIN BIKERS AND DOWNHILLERS
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Linda Eigner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>11 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>20.09.2022</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>The man - The myth - The legend: Stevefuckingschneider. The track cobra from Salzburg is no unknown face for MTB fans and friends of honest Instagram content, because Stevie is a fixed part of the Austrian gravity scene. Merged with his bike, he hurries from one bike festival to the next and spends countless days in the bike parks per season. High time to ask Stevie for a few bike tips and get some advice. We met Stevie and got all the info you've always wanted to know from him: Stevie Schneider Bike Hacks Incoming 🤙</p>

          <h3>Stevie Schneider, do you actually have a spare tube with you when biking?</h3>
          <p><em>"No, I don't have a tube with me. I rely on someone else having a tube for me. 😀 Actually I rarely get a flat tire. But if it does happen and I don't have a tube with me, then I'm willing to push."</em></p>

          <h3>And do you have a tool with you when biking?</h3>
          <p><em>"50/50 - When I'm out with the enduro, I usually have a small multi-tool in my pants pocket. When downhill riding I actually don't have anything with me."</em></p>

          <h3>Where do you store the tool then?</h3>
          <p><em>"The multi-tool is in my left pants pocket. In my right pants pocket I have the lift ticket and my phone. That's with the screen facing the thigh. If I crash, the screen doesn't break."</em> 🤭</p>

          <img src={art16} alt="Stevie Schneider bike hacks" />

          <h3>Stevie, important bike question: Do you prefer a pump or a CO2 cartridge?</h3>
          <p><em>"I'm old school and have a pump without a CO2 cartridge. I think pumping is nicer than pulling a CO2 cartridge. Besides, I ride tubeless. So a normal pump works for me too."</em></p>

          <h3>How do you transport your bike, Stevie Schneider?</h3>
          <p><em>"I take my bike and throw it in my bus. Without regard for loss. 😉 Otherwise I would remove the front wheel and fold it together if I were traveling with a station wagon. But basically I don't have a bike rack."</em></p>

          <h3>What's always in the car when biking?</h3>
          <p><em>"I always have a pump, brake pads, hex keys, bleeding kit, bandaging material with wound dressings and wound ointments and my vaporizer with me."</em></p>

          <h3>You were recently in Norway at a bike festival and you're also at the Freeride Fiesta in Mexico every year: How do you actually travel with your bike?</h3>
          <p><em>"I honestly always borrow a bike bag. They're so expensive and cost around 450€. If I can't borrow a bike bag from a friend, then I take a cardboard box. I dispose of it after the trip."</em></p>

          <h3>Other question: Do you ride with or without gloves for more grip?</h3>
          <p><em>"I prefer to ride without gloves, because somehow I have a better feeling when braking. I've always ridden without gloves. If I wear some, I get such a strange blister formation."</em></p>

          <h3>Do you prefer aluminum or carbon?</h3>
          <p><em>"Clearly aluminum."</em></p>

          <h3>Cable ties or cloth tape?</h3>
          <p><em>"Clearly cable ties."</em></p>

          <h3>Do you wear thin or thick socks when biking Stevie?</h3>
          <p><em>"Good question. I actually prefer medium-thin socks. I think such models are called 2/3 socks."</em></p>

          <h3>And what about underneath. Do you wear the bike shorts with or without underpants? 😉</h3>
          <p><em>"I started at some point not to wear underpants anymore. When biking I wear a crash band underneath because my hips have already been badly affected. So no underpants, but a crash band instead."</em></p>

          <h3>Stevie Schneider: What makes a bike day unforgettable for you?</h3>
          <p><em>"A good session makes a bike day unforgettable for me. I've had so many bike days that I've certainly forgotten some days, but a good session and a cold beer make a bike day unforgettable for me."</em> 😀</p>

          <h3>What is your favorite track in Salzburg?</h3>
          <p><em>"My favorite track is the Hacklberg Trail in Saalbach Hinterglemm."</em></p>

          <h3>Who do you like to go biking with the most?</h3>
          <p><em>"With Luca Hagger or with Olivier Cuvet."</em></p>

          <h3>What is the best bike park Stevie Schneider?</h3>
          <p><em>"That's difficult, but I like the Saalbach valley. It's really great there and the people are in a good mood."</em></p>

          <h3>And what is your favorite trick?</h3>
          <p><em>"The flat spin. It took me a long time to get it."</em></p>

          <h3>Where would you like to go biking?</h3>
          <p><em>"Canada or New Zealand are the two regions that interest me the most."</em></p>

          <h3>What does Stevie Schneider do besides biking?</h3>
          <p>Have you ever wondered what Stevie Schneider actually does in his free time besides biking? We asked for you and visited him in winter. In the story you'll find lots of good vibes and can get inspired for your off-season yourself.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Florian Dorn
          </p>
        </div>
      </div>
    </div>
  );
}