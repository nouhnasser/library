import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
           <Highlight
           title="Easy and Quick"
           para=" Get access to the book you purchased online instantly."
           icon={ <FontAwesomeIcon icon="bolt" />}
           />
           <Highlight
           title="10,000+ Books"
           para="Library has boooks in all your favourite categories."
           icon={ <FontAwesomeIcon icon="book-open" />}
           />
           <Highlight
           title="Affordable"
           para="Get your hands on popular books for as little as $10"
           icon={ <FontAwesomeIcon icon="tags" />}
           />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
