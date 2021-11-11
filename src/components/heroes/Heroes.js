import React, { Fragment, useContext, useEffect} from "react";
import Filter from "../filter/Filter";
import HeroItem from "./Heroitem";

import heroesContext from "../context/heroes/heroesContext";

import "../../App.css";

/*
- Call API to get all the super heroes
- Filter results according to props passed in the route in App.js - marvel, dc or all heroes
- Render html for heroes with title passed as props in App.js
- Render hero Item for the card display
*/

const Heroes = (props) => {

    //Initialise context
    const HeroesContext = useContext(heroesContext);
    // desctructure
    const { heroes, getHeroes, filter, search, searchResult, filterName}  = HeroesContext;

    //Set Hero List
    let heroList;

    useEffect(() =>{
        getHeroes(); //Call API
        // eslint-disable-next-line
    }, [])
    
   // Filter list to only display all DC & Marvel, Marvel, DC
   heroList = heroes.filter((hero) =>
          props.publisher !== ""
            ? hero.biography["publisher"] === `${props.publisher}` 
            : hero.biography["publisher"] === `Marvel Comics` ||
              hero.biography["publisher"] === `DC Comics`
        )
   
  // Filter according filter and search values
  let listItems = search ? searchResult.map(hero => (<HeroItem key={hero.id} hero={hero} />)) :
   (filter !== null 
    ? filter.map(hero => (<HeroItem key={hero.id} hero={hero} />))
    : heroList.map(hero => (<HeroItem key={hero.id} hero={hero} />))
  )
  
  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-9">
          <h1>{props.title} {filter !== null ? `- ${filterName}` : null}</h1>
        </div>
        <div className="col-3">
          {! search ?<Filter publisher={props.publisher} filter={props.filter}/> : null }
        </div>
      </div> 
           
      <div className="row flex justify-content-center mt-4">{listItems}</div>
    </Fragment>
  ) 
};

export default Heroes;