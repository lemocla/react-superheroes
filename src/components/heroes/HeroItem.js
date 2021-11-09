import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../Api/Api"; //Get baseUrl from Api component

/*
 Call the API for individual ID in the list 
*/
const HeroItem = ({ id }) => {

  // API Call
  const [heroData, setHeroData] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await Api.get(`/${id}`);
      setHeroData(data);
      setReady(true);
    };
    fetchApi();
  }, [id]);

  // Render html card for individual heroes when ready - if not ready, then null
  return ready ? (
    <div className="col mb-5">
      <div className="card card-width shadow">
        <img
          className="card-img-top hero-img radius-top"
          src={heroData.image.url}
          alt="Card image cap"
        />
        <div className="card-body bg-black py-4 radius-bottom">
          <h5 className="card-title text-center text-white">{heroData.name}</h5>
        </div>
      </div>
    </div>
  ) : null;
};

export default HeroItem;
