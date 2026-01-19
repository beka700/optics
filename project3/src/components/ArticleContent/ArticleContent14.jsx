import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art15 from '../../assets/img15.png'

export default function ArticleContent14({ onBack }) {
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
          STEVIE SCHNEIDER: BIKE INSIGHTS AND TIPS FROM THE TRACK COBRA
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Linda Eigner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>9 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>05.10.2022</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>"How should the suspension be set?", "What is the ideal tire pressure for the bike?" or "How do I bleed the bike brakes?" Finding the right bike setup for the trail is not that easy and requires practice. We asked the MTB legend from Salzburg, stevefuckingschneider, for you and reveal interesting insights and Stevie Schneider bike tips 🤙</p>

          <h3>Stevie Schneider, how often do you bleed your brakes per season?</h3>
          <p><em>"I can't really answer this question per se. It really depends. Normally I bleed the brakes about once a month. I ride Shimano brakes and if there is less brake pad on the brake pads, the oil sinks and then the pressure point moves closer to the handlebars. I like the pressure point relatively far out, so I often top up oil and bleed them regularly. That's also very easy with my brakes."</em></p>

          <h3>And which tire do you ride in mud and which in very dry conditions?</h3>
          <p><em>"When I used to race, I made very big differences in tire selection. But now I don't race anymore and don't change my tires anymore and always ride the same tires in all conditions."</em> 😉</p>

          <img src={art15} alt="Stevie Schneider biking" />

          <h3>How much tire pressure do you normally ride?</h3>
          <p><em>"That varies - depending on whether I'm jumping big jumps or not. If I'm jumping big jumps, then I have 3.5 bar in. If I'm riding normal downhill, then I have 1.8 to 2.2 bar in. Depending on how susceptible the track is to a flat tire. Most of the time I have around 2 bar in and for jumps 3.5 bar, because you need the maximum speed for that."</em></p>

          <h3>Stevie Schneider, a question that interests downhill riders: How is your damper set up? Do you ride your dampers rather stiff or soft?</h3>
          <p><em>"It really depends on whether I'm riding downhill or somewhere else, like at the Freeride Fiesta or in Slovenia at the Flat Out Days. Normally I ride with 15% SAG and relatively stiff and not particularly fast because I don't have clipless pedals. If I plan bigger jumps, then I ride with maximum pressure in the damper. That's 300 PSI in the Fox damper and low speed/high speed damping stage completely closed and maximum hard and the rebound relatively slow so it doesn't bounce away. You need that for the jumps so you can jump that far at all. I used to ride with an air damper. But sometimes I tore them. That's why I'm now switching to a spring damper because I think it can take more. I have a very stiff spring fork because I ride a lot over the arms and the front tire. In general, the suspension is designed for a rider with a weight of 85/90 kg. I weigh 70 kg."</em></p>

          <h3>Do you adjust your suspension to the track?</h3>
          <p><em>"It really depends on whether I'm planning long jumps, jumping a lot in general or want to ride fast. Then I either let air out or put air in. If I'm just riding downhill, then I change the pressure in the fork relatively little."</em></p>

          <h3>What kind of pedals do you actually have on the enduro and the downhill bike?</h3>
          <p><em>"When I used to race, I always rode with clip pedals. With them you're simply faster and can pull the bike with your feet. Since I've only been freeriding, I only ride with flat pedals. Then you can do no foot tricks. That just makes everything more fun and looser. Flat pedals also fit my riding style better."</em></p>

          <h3>Stevie Schneider: Mudguard yes or no?</h3>
          <p><em>"Sometimes yes and sometimes no. This season I actually never wore it :D If I use one, I take the Tire Fire 5000 from Super Logos from America. That's actually my favorite."</em></p>

          <h3>Which equipment must not be missing when biking?</h3>
          <p><em>"Definitely: helmet, glasses, knee pads and for me the ankle protectors are very important. If one of the things is missing, then I'm usually pretty annoyed and I can't concentrate completely on cycling."</em> 😀</p>

          <h3>What was the worst damage you suffered in a bike crash?</h3>
          <p><em>"I've already completely broken frames and suspension forks and I've already bent tires and rims. But I have to say that I'm really happy with the material I'm riding now. RAAW, Pancho and e*thirteen. they're almost indestructible, unless you throw something into the forest. But if you crash, nothing should happen to you with the material I ride."</em> 😊</p>

          <h3>One last question: Stevie Schneider: E-bikes - from what age are they acceptable?</h3>
          <p><em>"I actually think that e-bikes are acceptable at any age, especially if you have an impairment. What I don't like are children's e-bikes. When I think back to my childhood, it was always fascinating for me that I could be my own engine and I think that is currently being lost. But if the parents have e-bikes and they go cycling with the children, then the children necessarily need an e-bike too, because otherwise they can't keep up, and I think that's a shame. I think that uphill simply belongs to it and if it's strenuous, then you've earned it. So I can say that I think e-bikes are great and I've already had a lot of fun with them, but the fun somehow stops with children."</em></p>

          <h3>Want more Stevie Schneider bike hacks?</h3>
          <p>If you haven't had enough of the steviefuckingschneider bike tips and insights, you should check out our interview. Here you'll find more advice and exciting info from the track cobra from Salzburg. 🤙</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Florian Dorn
          </p>
        </div>
      </div>
    </div>
  );
}