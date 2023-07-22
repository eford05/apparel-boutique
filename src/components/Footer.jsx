import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <Link to="/products/">New</Link>
          </li>
          <li>
            <Link to="/products/">Bestsellers</Link>
          </li>
          <li>
            <Link to="/products/">Dresses</Link>
          </li>
          <li>
            <Link to="/products/">Tops</Link>
          </li>
          <li>
            <Link to="/products/">Bottoms</Link>
          </li>
          <li>
            <Link to="/products/">Clothing</Link>
          </li>
          <li>
            <Link to="/products/">Summer</Link>
          </li>
          <li>
            <Link to="/products/">Shoes</Link>
          </li>
          <li>
            <Link to="/products/">Sale</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link className="help-services">Customer Services</Link>
          </li>
          <li>
            <Link to="/about" className="help-services">
              About
            </Link>
          </li>
          <li>
            <Link className="help-services">Terms of Use & Policies</Link>
          </li>
          <li>
            <Link className="help-services">Offer Terms & Conditions</Link>
          </li>
          <li>
            <Link className="help-services">Delivery & Returns</Link>
          </li>
          <li>
            <Link className="help-services">Track My Order</Link>
          </li>
          <li>
            <Link className="help-services">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <FaFacebook className="social-icon facebook" />
          </li>
          <li>
            <FaInstagram className="social-icon instagram" />
          </li>
          <li>
            <FaPinterest className="social-icon pinterest" />
          </li>
          <li>
            <FaSnapchat className="social-icon snapchat" />
          </li>
          <li>
            <FaTwitter className="social-icon twitter" />
          </li>
        </ul>
      </div>
      <div>Erica Ford &copy; 2023</div>
      <div>
        <ul>
          <li>
            <FaCcDiscover className="payment-icon" />
          </li>
          <li>
            <FaCcMastercard className="payment-icon" />
          </li>
          <li>
            <FaCcPaypal className="payment-icon" />
          </li>
          <li>
            <FaCcStripe className="payment-icon" />
          </li>
          <li>
            <FaCcVisa className="payment-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
