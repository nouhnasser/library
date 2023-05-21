import React from "react";
import { Link } from "react-router-dom";
import undrew from '../assets/Undraw_Books.svg'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Dubai's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="/books">
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={undrew} alt="" className="header__img" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;