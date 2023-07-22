import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/productcard.css";

const ProductCard = ({ id, src, alt, sale, price, salePrice, title, desc }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <figure className="product-card-fig">
          <img src={src} alt={alt} />
        </figure>
        <div className="product-info">
          <h3 className="product-card-title">{title}</h3>
          <p className="product-desc">{desc}</p>
          <div className="price-wrapper">
            {sale ? (
              <div className="price-slash">
                <s className="slash">
                  <span className="price">${price}</span>
                </s>
                <span className="sale">${salePrice}</span>
              </div>
            ) : (
              <span className="price">${price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.alt,
  sale: PropTypes.bool,
  price: PropTypes.number,
  salePrice: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ProductCard;
