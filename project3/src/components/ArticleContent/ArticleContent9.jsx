import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art10 from '../../assets/img10.png'

export default function ArticleContent9({ onBack }) {
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
          BEHIND THE SCENES: HOW WE AT NAKED OPTICS ARE PREPARING FOR THE WINTER SEASON
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Christian Wasner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>8 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>07.11.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>While autumn is still in full bloom in Europe, many of us are already looking forward to winter and the ski season. As a brand that's particularly dedicated to winter sports, we have to make some preparations now so that we can offer our customers the best quality during the coldest months of the year. But what exactly does our everyday work look like in autumn, and what preparations do we need to make for winter? You can find out all about it in this behind-the-scenes blog.</p>

          <h3>Launch of new products</h3>
          <p>The work for winter actually starts the winter before, or even earlier. Of course, as a brand, we want to offer our customers a few new highlights in our range every season, alongside our bestsellers. However, planning for a new product like this is a lengthy process and requires strict controls to ensure we can offer you the highest quality. Shortly before the winter season, most of these steps have already been completed, and our main focus is on managing the logistical process to ensure the products arrive safely. At the same time, we are developing campaigns to launch these products. For example this year, our golden ski goggle lens is new. Also new this winter are our optical inserts, which can transform your NAKED ski goggles into prescription ski goggles.</p>

          <img src={art10} alt="NAKED Optics preparation" />

          <h3>Restock existing products</h3>
          <p>In addition to the logistical organization for the delivery of our new products, we must also ensure that our warehouses are well stocked with our proven products. In the production of ski goggles you have to find the right fit so you're perfectly equipped for our highlights throughout the winter season. However, being quick is never a bad idea when it comes to our popular ski goggles for men and women. 😉</p>

          <h3>Plan competitions/collaborations</h3>
          <p>Of course, we want to give something back to our customers for their loyalty, which is why we'll be hosting a few collaborations and competitions again this winter. To organize these, we need to maintain a good working relationship with our partners to achieve the best possible outcome for all parties. Hopefully, you'll see the commitment behind it in the final product. The best way to stay informed about our competitions and all other news from NAKED Optics is to follow us on Instagram.</p>

          <h3>Quality assurance for our ski goggles</h3>
          <p>To always offer you the best ski goggles, we need to regularly check their quality. For this reason, we're once again in contact with product testers from various countries this winter to have them independently test the functionality of our ski goggles outdoors. This feedback helps us enormously to stay on top of the latest developments and continue to implement new, innovative ideas in the future.</p>

          <h3>Establish customer support policies</h3>
          <p>Things can get a bit hectic for us, especially in the run-up to Christmas. Our products are especially popular during the Advent season because they make the perfect gift under the Christmas tree. Therefore, it's important for our customer support team to establish clear guidelines in advance on how to respond to specific inquiries. These guidelines are openly discussed before each winter to ensure the communication between our customers and us is as relaxed and smooth as possible. These guidelines also save both you and us a lot of time during what can otherwise be a stressful time. If you have any questions, please contact us at support@nakedoptics.net.</p>

          <h3>Conclusion: We are looking forward to the winter season</h3>
          <p>The bottom line for us is that we're already excited for the first snowy days and the start of the winter season. Even if things get a little hectic at times, we know we have the coolest community in the winter sports scene and can look forward to many unique moments. As passionate winter sports enthusiasts, we're naturally also eager to put on our NAKED Optics ski goggles and hit the slopes again. We certainly hope to see many of you out on the slopes and in the ski huts of the world again this year.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Elias Neier
          </p>
        </div>
      </div>
    </div>
  );
}