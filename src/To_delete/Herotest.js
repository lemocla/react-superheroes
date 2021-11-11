import React, {useEffect, useState, Fragment, useContext } from 'react';
import Api from '../Api/Api';
import '../../App.css';
import { useParams, useNavigate } from 'react-router';
import heroesContext from "../context/heroes/heroesContext";



const Herotest = ({match}) => {

  const navigate = useNavigate();
  const HeroesContext = useContext(heroesContext);
  // desctructure
  const { heroSingle, getHero } = HeroesContext;
  const { image, name, biography, connections, work, powerstats } = heroSingle; 

  useEffect(() => {
    getHero();
    // eslint-disable-next-line
  }, []);

 
  
  // Back function
  function handleClick() {
    navigate(-1)
  }
  // Display hero information

    return (

      <Fragment>
        <button onClick={handleClick} className='btn btn-dark text-white fw-bold text-uppercase mt-4' >Back</button>  
        <div className="row mt-3">
          <div className="col-12 col-md-6 col-xl-5 pt-2">
            <img className="img-fluid shadow" src={image.url} alt={name} />
          </div>

          <div className="col-12 col-md-6 col-xl-7">
            <h1 className='mt-4 mt-md-0'>
              {name}
              <span
                style={{ float: "right" }}
                className={
                  "mt-1 badge " +
                  (biography.alignment === "good" ? "bg-success" : "bg-danger")
                }
              >
                {biography.alignment}
              </span>
            </h1>

            <div className="col-12 mt-4">
              <h2 className="mb-3">Biography</h2>
              <ul>
              <li>Alter ego: {biography['full-name'] !== "" ? biography['full-name'] : 'No alter ego known'}</li>
              <li>Place of birth: {biography['place-of-birth'] !== "-" ? biography['place-of-birth'] : 'Not known'}</li>
              {work.occupation !== "-" ? <li>Occupation:  {work.occupation} </li> : "" }
              {connections.relatives !== "" ? <li>Relatives:  {connections.relatives} </li> : "" }
              <li>First appearance: {biography['first-appearance']}</li>
              <li>Publisher: {biography.publisher}</li>           
              </ul>
            </div>

            <div className="col-12 mt-4">
              <h2 className="mb-3">Power Stats</h2>
            
              <div className="bg-success tex-white div-shape px-4 py-2 mb-2 fw-bold">
                Intelligence: {powerstats.intelligence !== 'null' ? powerstats.intelligence : 'not available'}
              </div>
              <div className="bg-warning div-shape px-4 py-2 mb-2 fw-bold">
                Strength: {powerstats.strength !== 'null' ? powerstats.strength : 'not available'}
              </div>
              <div className="bg-primary text-white div-shape px-4 py-2 mb-2 fw-bold">
                Speed:  {powerstats.speed !== 'null' ? powerstats.speed : 'not available'}
              </div>
              <div className="bg-secondary text-white div-shape px-4 py-2 mb-2 fw-bold">
                Durability: {powerstats.durability !== 'null' ? powerstats.durability : 'not available'}
              </div>
              <div className="bg-danger text-white div-shape px-4 py-2 mb-2 fw-bold">
                Power: {powerstats.power !== 'null' ? powerstats.power : 'not available'}
              </div>
              <div className="bg-black text-white div-shape px-4 py-2 mb-2 fw-bold">
                Combat: {powerstats.power !== 'null' ? powerstats.power : 'not available'}
              </div>
        
            </div>

            <div className="col-12 mt-4">
              <h2 className="mb-3">Connections</h2>
              <p>{ connections['group-affiliation'] !== "-" ? connections['group-affiliation'] : 'No connection available'}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Herotest