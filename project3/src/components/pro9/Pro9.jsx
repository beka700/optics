import "./pro9.css";
import i0 from '../../assets/Logo.png'
import gb from '../../assets/🇬🇧.png'
import yt from '../../assets/Vector (5).png'
import yt1 from '../../assets/Vector (6).png'
import yt2 from '../../assets/Vector (7).png'
import card from '../../assets/Visa.png'
import card1 from '../../assets/Mastercard.png'
import card2 from '../../assets/Maestro.png'
import card3 from '../../assets/Diners Club.png'
import card4 from '../../assets/Stripe.png'
import im4 from '../../assets/image 4.png'

export default function Pro9() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="footer-menu" aria-label="Our story">
          <h5 className="footer-title">Our Story</h5>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Jobs</a>
          <a href="#">Sponsoring</a>
        </nav>

        <nav className="footer-support" aria-label="Support">
          <h5 className="footer-title">Support</h5>
          <a href="#" className="support-main">Get support ›</a>
          <a href="#">FAQ</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Return</a>
          <a href="#">Trade-In</a>
          <a href="#">Student discount</a>
          <a href="#">Legal notice</a>
        </nav>

        <div className="footer-socials">
          <h5 className="footer-title">Social</h5>
          <div className="social-row">
            <span className="social-item1" aria-label="Social media">
              <img src={yt} className="ite" alt="Social icon 1" />
            </span>
            <span className="social-item" aria-label="Social media">
              <img src={yt1} className="ite" alt="Social icon 2" />
            </span>
            <span className="social-item" aria-label="Social media">
              <img src={yt2} className="ite" alt="Social icon 3" />
            </span>
          </div>
        </div>

        <div className="footer-payments">
          <h5 className="footer-title">Our payment methods</h5>
          <div className="payment-row">
            <img src={card} className="pro9-item1" alt="Visa" />
            <img src={card1} className="pro9-item1" alt="Mastercard" />
            <img src={card2} className="pro9-item1" alt="Maestro" />
            <img src={card3} className="pro9-item" alt="Diners Club" />
            <img src={card4} className="pro9-item1" alt="Stripe" />
          </div>
        </div>

        <div className="footer-security">
          <h5 className="footer-title" id="ti">Secure shopping</h5>
          <div className="security-badge">
            <img src={im4} className="sec" alt="Security badge" />
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="copyright">
          <img src={i0} className="foot-logo" alt="NAKED Optics Logo" />
          <p className="foot-p">
            © 2022 NAKED Optics - All Rights Reserved. | *All prices incl. VAT plus shipping costs
          </p>
        </div>

        <div className="legal-links">
          <div className="legal">
            <a href="#" className="leg">Privacy Policy</a>
            <a href="#" className="leg">Cookie Settings</a>
            <a href="#" className="leg">Terms of service</a>
          </div>
          <div className="swi">
            <p className="lang-switch">
              <img src={gb} className="gb" alt="English language" />
              English ›
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}