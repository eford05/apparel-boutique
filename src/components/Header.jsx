import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowLongRight,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import lrgHero1 from "../assets/LrgSummerSale1.png";
import mdHero1 from "../assets/MdSummerSale1.png";
import smHero1 from "../assets/SmSummerSale1.png";
import lrgHero2 from "../assets/LrgSummerSale2.png";
import mdHero2 from "../assets/MdSummerSale2.png";
import smHero2 from "../assets/SmSummerSale2.png";
import lrgHero3 from "../assets/LrgSummerSale3.png";
import mdHero3 from "../assets/MdSummerSale3.png";
import smHero3 from "../assets/SmSummerSale3.png";

import "../styles/header.css";

/*
  This Header component contains a hero image slider which uses state to slide the hero images from left and right

  The state of the slider has an initial value of zero.
  When handleTransition is clicked from the left and right arrows a direction of "left" or "right" is passed to the function. The left property signals that the transition of the slide should occur to the left and the right to the right

  Condition direction left : If the index of the slide is greater than zero then move to an index of -1 else set to the end of the slides (2);
  Condition direction right: If the index of the slide is less than 2 move to an index of +1 else set to zero the beginning of the slides.
*/
const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleTransition = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <header className="hero">
      <section
        className="hero-container"
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
      >
        <div className="hero-wrapper">
          <figure className="hero-fig lrg">
            <img src={lrgHero3} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig md">
            <img src={mdHero3} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig sm">
            <img src={smHero3} alt="Summer Sale" />
          </figure>
          <Link className="hero-btn">
            <span>Find Deals</span>{" "}
            <HiArrowLongRight className="hero-btn-arrow" />
          </Link>
        </div>
        <div className="hero-wrapper">
          <figure className="hero-fig lrg">
            <img src={lrgHero2} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig md">
            <img src={mdHero2} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig sm">
            <img src={smHero2} alt="Summer Sale" />
          </figure>
        </div>
        <div className="hero-wrapper">
          <figure className="hero-fig lrg">
            <img src={lrgHero1} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig md">
            <img src={mdHero1} alt="Summer Sale" />
          </figure>
          <figure className="hero-fig sm">
            <img src={smHero1} alt="Summer Sale" />
          </figure>
        </div>
      </section>

      <div className="arrow-container">
        <div className="arrow-wrapper">
          <HiChevronLeft
            className="arrow"
            onClick={() => handleTransition("left")}
          />
        </div>
        <div className="arrow-wrapper">
          <HiChevronRight
            className="arrow"
            onClick={() => handleTransition("right")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
