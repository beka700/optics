import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art13 from '../../assets/img13.png'

export default function ArticleContent12({ onBack }) {
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
          MEET STEFAN MÜLLER: PASSIONATE GUIDE AND BIKE EXPERT
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Linda Eigner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>10 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>04.09.2023</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>Passionate, creative and incredibly talented - these words describe the NAKED Optics Hero Stefan Müller perfectly. The Carinthian lives for biking and prefers to spend every free minute on the bike - whether in summer or winter. How Stefan discovered his great passion and how he passes on his skills to the younger generation, he revealed to us exclusively. We proudly introduce: Stefan Müller.</p>

          <h3>Servus Stefan! Tell us, how did you actually get into cycling?</h3>
          <p><em>"Even in my childhood, cycling was topic No. 1 in our village. From then on, I couldn't get away from the bike. :)"</em></p>

          <h3>Since when have you been cycling professionally?</h3>
          <p><em>"I have been working as a cyclist for about 2 years. This includes my bike school at Lake Millstatt and my work as an athlete (video, photo assignments, etc.)."</em></p>

          <h3>What does cycling mean to you?</h3>
          <p><em>"Actually everything - freedom, self-realization, creativity and above all fun."</em></p>

          <img src={art13} alt="Stefan Müller bike expert" />

          <h3>Who is your greatest motivation?</h3>
          <p><em>"My wife and children. They always have my back and support me in sports ❤️"</em></p>

          <h3>What shouldn't be missing on a perfect bike day?</h3>
          <p><em>"Friends, buddies and the perfect location."</em></p>

          <h3>What is the best bike park?</h3>
          <p><em>"For me it's still Saalbach, because the variety is the idea (Hacklbergtrail 💯)"</em></p>

          <h3>What equipment could you not do without?</h3>
          <p><em>"The helmet, definitely."</em></p>

          <h3>What is your favorite setup?</h3>
          <p><em>"A well-coordinated suspension."</em></p>

          <h3>How has the bike scene developed in recent years?</h3>
          <p><em>"In my opinion, very positive. The scene was still very small about 20 years ago when I started. Now, 20 years later, there is actually nothing that is not possible on the bike. Whether creative or brutal. Simply everything is there. 😊"</em></p>

          <h3>You also run a small bike school: What exactly do you offer there? How many children do you supervise in your workshops?</h3>
          <p><em>"Exactly. Actually, I'm more on the small, personal side there. Maximum 3 to 5 participants per course. That way I can best pass on my knowledge. Technology and tricks for children and young people are my specialty. But of course, guiding on tours and co. are also very cool."</em></p>

          <h3>What does an ordinary working day look like?</h3>
          <p><em>"That of course depends on my appointments and where I am currently. Since I'm out shooting and at events a lot in the summer, it can happen that I don't have any courses for a whole week. But when I do, it's always with a lot of fun, of course. 😊"</em></p>

          <h3>How do you structure the bike courses for children?</h3>
          <p><em>"With children it is particularly important to do everything very playfully. Take a lot of time and patience. When it works well with the kids, it's all the cooler. 😊"</em></p>

          <h3>What is important to you in the courses? What do you definitely want to pass on to the children?</h3>
          <p><em>"As mentioned before, fun should never be neglected when biking."</em></p>

          <h3>We heard that you also have a connection to the volunteer fire department in Millstatt. Are you still active there? If so, how long have you been doing it and what is your function?</h3>
          <p><em>"Yes, that's right, you know everything. 😀 When I'm at home and still have time, then I'm active with the volunteer fire department in Millstatt. The fire department actually has a very high priority for me. Helping other people just makes sense and like with biking, a lot of things only work together and with great camaraderie it always makes real fun. Like a little family. For me it is also a good balance to biking, being at home with friends and comrades. In the fire department I am a fire master and group commander of the 4th group."</em></p>

          <h3>How do cycling and activity in the volunteer fire department complement each other?</h3>
          <p><em>"Teamwork and being together."</em></p>

          <h3>What have you set yourself for the next few years?</h3>
          <p><em>"Uh, there's actually a lot. In September I'm switching to a new bike brand after 3 years. Then it's straight on to shooting abroad 😊. Still this year a big project in Austria is coming up - 2 years of planning and preparation are now entering the hot phase. 2024 I'll be going abroad a lot. A few dream locations are on the agenda. My goals are clearly that I stay fit and healthy on the bike for a long time."</em></p>

          <h3>Is there a place where you absolutely want to bike?</h3>
          <p><em>"America would still be a story. 😊"</em></p>

          <h3>Stefan Müller: Bike Guide, Workshops and much more</h3>
          <p>If you've got the urge to go biking with Stefan and would like to attend a workshop, you can contact him at any time on Instagram or by email (stefan_mueller_cycling@gmx.at). Stefan Müller is looking forward to getting to know new faces and sharing his passion with others.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Gert Perauer
          </p>
        </div>
      </div>
    </div>
  );
}