import "../styles/cart.css";
import { cartItems } from "../data/data";
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {cartItems?.map((item) => (
        <div key={item.id} className="cart-item-wrapper">
          <figure className="cart-fig">
            <img src={item.src} alt={item.alt} />
          </figure>
          <div className="cart-detail-wrapper">
            <div className="cart-details">
              <h2>{item.title}</h2>
              <p>{item.desc.substring(0, 100)}</p>
            </div>

            <div className="cart-price">
              1 x {item.sale ? item.salePrice : item.price}
              <FaTrashCan className="trash-icon" />
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span> $125</span>
      </div>
      <button className="total-btn">Proceed To Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
