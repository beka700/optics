import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import "./ArticleContent.css";
import art12 from '../../assets/img12.png'

export default function ArticleContent11({ onBack }) {
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
          NAKED X STRAWANZA – A LONG-TERM PARTNERSHIP
        </h1>

        <div className="article-content-meta">
          <div className="article-meta-item">
            <FaRegUserCircle className="us"/>
            <span>Christian Wasner</span>
          </div>
          <div className="article-meta-item">
            <FiClock />
            <span>6 min read</span>
          </div>
          <div className="article-meta-item">
            <FiCalendar />
            <span>24.10.2025</span>
          </div>
        </div>

        <div className="article-main-content">
          <p>At NAKED Optics, we're very proud of the broad portfolio of partners we now work with. In addition to our core business, we're always open to collaborations with cool brands that want to equip their own shops with custom-designed ski goggles in the stylish NAKED look. One of our first partners in this area was the Bavarian fashion label Strawanza back in 2019. Since then, our ski goggles have been part of Strawanza's core repertoire, and the collection is updated annually. In this blog, we'd like to introduce you to our collaboration and discuss how your company could become the next NAKED Optics partner.</p>

          <h3>Strawanza – authentic and bold fashion from Bavaria</h3>
          <p>The Strawanza brand was founded in 2011 by siblings Laura and Christoph Forstner and has since established itself in Bavaria and beyond with hip collections with a bold touch. Strawanza attaches particular importance to sustainability and therefore pays attention to the selection of high-quality materials during production. Strawanza clothing is made from organic cotton, is vegan, and fair production is observed throughout the entire process. The online brand aims to convey the authentic flair of Bavaria, attracting attention with cheeky slogans here and there, and combining modern fashion with an alpine look. The company is based in the Upper Bavarian community of Schwabhausen near Munich in the Dachau district. In addition to the online shop, Strawanza also regularly hosts pop-up store events throughout Bavaria. Further information about Strawanza can be found on the brand's website.</p>

          <img src={art12} alt="NAKED X Strawanza collaboration" />

          <h3>NAKED X Strawanza</h3>
          <p>NAKED Optics and Strawanza have been cooperating since 2019, and the partnership is characterized by a strong alignment of company philosophies. As with Strawanza, sustainability plays a significant role for us. Thus, the frames of our newer ski goggles are made of approximately 65% CO2RE® bioplastic. We also value recycling, which is why you can send in your old ski goggles, regardless of brand, for our trade-in program and receive a voucher for the purchase of new ski goggles in return. We're also known for our cheeky slogans - a perfect match with Strawanza! We've been leveraging these synergies in our collaboration for years now, and we've already come up with some cool designs. You can find an overview of the Strawanza ski goggles created in cooperation with NAKED here. Whether in a retro style, with an après-ski look, or in a leopard print—the ski goggles from NAKED Optics and Strawanza definitely have something for everyone.</p>

          <h3>Does your company need cool ski goggles? Let's get started!</h3>
          <p>Do you hold responsibility in a company and you are interested in collaborating? We're always interested in new collaborations and, among other things, can create your desired strap designs together with you. There are no limits to the ideas, and we're excited about new, iconic partnerships. The minimum order limit for a collaboration is 100 ski goggles. If you or your company are interested, please contact us with your request at sponsoring@nakedoptics.net.</p>

          <p style={{ marginTop: '30px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Credits: Strawanza
          </p>
        </div>
      </div>
    </div>
  );
}