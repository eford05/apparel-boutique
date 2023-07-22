import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiBars3,
  HiXMark,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiChevronDoubleRight,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import logo from "../assets/ApparelLogo.png";
import "../styles/navbar.css";
import Cart from "./Cart";

/*
  This navbar has a primary navigation which is displayed always at the top, and a secondary navigation which is displayed initially for screen sizes greater than 850px, but hides for smaller screen sizes for responsive styling.

  Toggle menu at 850px or less.
  If toggle is false display bars icon, else close icon.

  If toggle is true body scroll is hidden, else body scroll is auto.

  Set category on each nav link clicked to display correct product category in products
*/
const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  toggleMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = " auto");

  return (
    <nav className="navbar">
      <div className="navbar-primary">
        <div className="nav-menu" onClick={() => setToggleMenu(!toggleMenu)}>
          {!toggleMenu ? (
            <HiBars3 className="nav-menu-icon" />
          ) : (
            <HiXMark className="nav-menu-icon" />
          )}
        </div>

        <div className="logo-wrapper">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>

        <div className="navbar-icon-wrapper">
          <div className="nav-search">
            <HiOutlineMagnifyingGlass className="nav-icon" />
            <input type="search" placeholder="search" />
          </div>
          <HiOutlineUserCircle className="nav-icon" />
          <div
            className="shopping-wrapper"
            onClick={() => setToggleCart(!toggleCart)}
          >
            <HiOutlineShoppingBag className="nav-icon" />
            <div className="shopping-items">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={toggleMenu ? "navbar-secondary show" : "navbar-secondary"}
      >
        <div className="navbar-icon-wrapper">
          <div className="nav-search">
            <HiOutlineMagnifyingGlass className="nav-icon" />
            <input type="search" placeholder="search" />
          </div>
          <div className="nav-login">
            <HiOutlineUserCircle className="nav-icon" />
            <NavLink>Sign In</NavLink>
          </div>
        </div>
        <ul className="navbar-list">
          <div className="li-wrapper">
            <li>
              <NavLink to="/products/new">
                <span>New</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/best">
                <span>Bestsellers</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/dresses">
                <span>Dresses</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/tops">
                <span>Tops</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/bottoms">
                <span>Bottoms</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/clothing">
                <span>Clothing</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/summer">
                <span>Summer</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/shoes">
                <span>Shoes</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>

          <div className="li-wrapper">
            <li>
              <NavLink to="/products/sale">
                <span>Sale</span>
                <HiChevronDoubleRight className="nav-arrow" />
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className={toggleMenu ? "overlay show" : "overlay"}></div>
      {toggleCart && <Cart />}
    </nav>
  );
};

export default Navbar;
