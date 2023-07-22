import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../data/data";
import "../styles/productslider.css";

const ProductSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalBestSellers = products.filter((product) => product.best).length;

  const handleTransition = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else {
      setSlideIndex(slideIndex < totalBestSellers - 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <section className="product-slider">
      <header className="product-header">
        <h1>Best Sellers</h1>
        <p>
          <FaAnglesLeft
            className="slide-arrow-icon"
            onClick={() => handleTransition("left")}
          />
          <FaAnglesRight
            className="slide-arrow-icon"
            onClick={() => handleTransition("right")}
          />
        </p>
      </header>
      <div className="slides-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${slideIndex * 365}px)` }}
        >
          {products
            .filter((product) => product.best)
            .map((product) => (
              <div key={product.id} className="product-slide-card">
                <Link to={`/product/${product.id}`}>
                  <figure className="product-slide-fig">
                    <img src={product.src} alt={product.alt}></img>
                  </figure>
                  <div className="product-slide-info">
                    <span>{product.title}</span>
                    {product.sale ? (
                      <div className="price-slash">
                        <s className="slash">
                          <span className="price">${product.price}</span>
                        </s>
                        <span className="sale">${product.salePrice}</span>
                      </div>
                    ) : (
                      <span className="price">${product.price}</span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
