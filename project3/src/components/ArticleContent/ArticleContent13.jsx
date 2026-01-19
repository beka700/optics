import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art14 from '../../assets/img14.png'

export default function ArticleContent13({ onBack }) {
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
          PASSIONATE SKIERS: NAKED HERO MICHI STRAUSS
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Linda Eigner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>8 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>05.01.2023</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>One of the very first NAKED Optics Heroes and a fixed part of the NAKED Family is Michael Strauss. Michi is a passionate skier, freerider, ski guide, trainer, filmmaker and can also bike and surf very well. Anyone who spends so much time on the slopes and in the terrain becomes a real ski expert. What a typical winter actually looks like for him and what must not be missing on a perfect ski day, he revealed to us. Lean back and get to know our NAKED Hero.</p>

          <h3>Servus Michi! You are mainly known for freeriding and guiding and you know that you are on the slopes almost every day in winter. When did you actually start skiing and how did you get into it?</h3>
          <p><em>"I've been skiing since I was 4 years old. Back then I was first in a ski school in the classic way and then I did a school ski course. When I was 12 I started skiing and did that until I was 18. I got into freeriding through my training as a ski instructor."</em></p>

          <h3>How many ski days do you have per season approximately?</h3>
          <p><em>"It varies, but normally I have around 100 to 150 ski days. It always depends on how many ski instructor trainings I do and how much I get to ski myself. But most of the time it's 100 to 150 ski days per season."</em></p>

          <h3>What should definitely not be missing on a perfect ski day for you as an absolute ski expert?</h3>
          <p><em>"Definitely a lot of powder. There can never be too much powder. Lots of sunshine, fun and cozy people should of course not be missing either. Honestly, you don't really need much for a perfect ski day, because you can make a lot out of little. It depends much more on the company and not on the conditions."</em></p>

          <img src={art14} alt="Michi Strauss skiing" />

          <h3>How many pairs of skis do you actually have?</h3>
          <p><em>"I have too many 😃 I use a lot of different skis"</em></p>

          <h3>Which characteristics are particularly important to you in skis? Which shapes and dimensions do you prefer when choosing?</h3>
          <p><em>"I currently prefer to ride the Fischer Ranger 108 in 1.92. That's the best option for me in the terrain. It's playful and still holds well. Even if the conditions aren't that good anymore, it's still super fun to ride. When there's really good powder, it's also a super cool ski ❤️"</em></p>

          <h3>What is your favorite area for skiing?</h3>
          <p><em>"My favorite ski area is definitely Obertauern. You simply have everything there and can do everything. There are partly tree runs, cool open slopes, steep gullies, the slopes are steep but with many transitions. It's the coolest thing there. It's pretty cool to ride."</em></p>

          <h3>And Michi, what is actually your favorite goggle setup? Do you always have interchangeable lenses with you or how do you do that when you're on the go?</h3>
          <p><em>"The best setup for me is still the TROOP EVO with the blue lens. I always have a bad weather lens in my backpack and another spare lens. If there's really good powder, you never know what exactly you need and what might happen."</em></p>

          <h3>What is your favorite food in the hut at the end of a ski day?</h3>
          <p><em>"I actually really like Kasnockn 😃"</em></p>

          <h3>When winter finally comes to an end, what does your summer actually look like?</h3>
          <p><em>"In summer I ride my MTB a lot. Whether it's guiding, shooting or just enjoying the time myself. In summer you can definitely find me in the bike park or at one or the other fun enduro race, like at the Austrian Championships. Besides biking I also like to surf. I always try to spend at least 1 month at the sea in summer to surf waves."</em></p>

          <h3>One last question Michi: If there's really bad weather and you can't do any outdoor sports. What's on your program then?</h3>
          <p><em>"DJing. I've now started a "DJ career". 😛 That gives me a lot of pleasure to make other people happy with music. I'm really enjoying that at the moment."</em></p>

          <p>Follow Michi's adventures and get more exciting insights here on his account.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Susanne Eizenberger
          </p>
        </div>
      </div>
    </div>
  );
}