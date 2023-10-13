import React from "react";
import PropTypes from "prop-types";

function Card({ name, image, category }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <img src={`/images/${image}`} alt={name} />
      </div>
      <div className="cardBody">
        <h1>{name}</h1>
        <p>{category}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
