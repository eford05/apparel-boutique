import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { FaTruck } from "react-icons/fa6";
import Newsletter from "../components/Newsletter";
import ProductSlider from "../components/ProductSlider";
import "../styles/product.css";

const Product = () => {
  const productID = parseInt(useParams().id);

  console.log(productID);

  return (
    <main className="product">
      <div className="product-wrapper">
        {products
          .filter((product) => productID === product.id)
          .map((product) => (
            <Fragment key={productID}>
              <figure className="product-fig">
                <img src={product.src} alt={product.alt} />
              </figure>
              <section className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-desc">{product.desc}</p>
                <div className="price-wrapper">
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
                <div className="shipping-wrapper">
                  <FaTruck className="shipping-icon" />
                  <span>Free ground shipping on orders over $50</span>
                </div>
                <button className="cart-btn">Add to Cart</button>
              </section>
            </Fragment>
          ))}
      </div>
      <Newsletter />
      <ProductSlider />
    </main>
  );
};

export default Product;
