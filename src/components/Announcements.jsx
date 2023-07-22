import { Link } from "react-router-dom";
import "../styles/announcements.css";

const Announcements = () => {
  return (
    <div className="announcement">
      <span>
        Free Us Shipping on orders over $50! Free Return Shipping{" "}
        <Link>see details</Link>
      </span>
    </div>
  );
};

export default Announcements;
