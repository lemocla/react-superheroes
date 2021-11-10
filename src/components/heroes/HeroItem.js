import React from "react";
import { Link } from "react-router-dom";

const HeroItem = ({ hero} ) => {

  const { images } = hero
   
  // Render html card for individual heroes in Heroes.js
  return (
    <Link to={`/hero/${hero.id}`} id={hero.id} className="col mb-5" >
      <div className="card card-width shadow">
        <img
          className="card-img-top hero-img radius-top"
          src={images.md}
          alt="Card image cap"
        />
        <div className="card-body bg-black py-4 radius-bottom">
          <h5 className="card-title text-center text-white">{hero.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default HeroItem;