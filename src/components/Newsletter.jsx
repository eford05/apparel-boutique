import "../styles/newsletter.css";
import { FaRegPaperPlane } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <form className="newsletter">
      <h3 className="news-title">Newsletter</h3>
      <p className="news-desc">
        Get up to date notifications about trending styles and special offers.
      </p>
      <div className="input-wrapper">
        <input
          type="email"
          id="newsletter"
          placeholder="yourname@example.com"
        />
        <button>
          <FaRegPaperPlane className="news-icon" />
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
