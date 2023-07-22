import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/catcard.css";

const CatCard = ({ path, src, alt, category }) => {
  return (
    <Link to={path}>
      <div className="cat-card">
        <figure className="cat-fig">
          <img src={src} alt={alt} />
        </figure>
        <h2 className="cat">{category}</h2>
      </div>
    </Link>
  );
};

CatCard.propTypes = {
  path: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  category: PropTypes.string,
};

export default CatCard;
