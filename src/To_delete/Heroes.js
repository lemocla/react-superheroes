import React, { Fragment, useState, useEffect } from "react";
import HeroItem from "./HeroItem";
import Filter from "../filter/Filter";
import axios from "axios";
import "../../App.css";
import { useLocation } from "react-router";

/*
- Call API to get all the super heroes
- Filter results according to props passed in the route in App.js - marvel, dc or all heroes
- Render html for heroes with title passed as props in App.js
- Render hero Item for the card display
*/

const Heroes = (props) => {

  
  const [heroes, testData] = useState([]);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState(props.filter)

  console.log (`from link ${props.filter}`)
  console.log(`Heroes ${filter}`)
  
  // API Call
  const ApiAll = axios.create({
    baseURL: "https://akabab.github.io/superhero-api/api/all.json",
    responseType: "json",
  });

  const pull_data = (filterData) => {
    // function to update props when option is selected in Filter
    setFilter(filterData);
  };

  
  
  useEffect(() => {
   
    const fetchApi = async () => {
      const { data } = await ApiAll.get();
      testData(data);
      setReady(true);
    };
    fetchApi();
    console.log('Heroes useEffect happening')
    //setFilter('All')
    // eslint-disable-next-line
  }, []);

  // Filter 
  let listItems;
  if (filter !== "All") { // Filter according to prop value
    listItems = heroes
      .filter((hero) =>
        props.publisher !== ""
          ? hero.biography["publisher"] === `${props.publisher}` &&
            hero.connections["groupAffiliation"]
              .toLowerCase()
              .includes(props.filter.toLowerCase())
          : hero.biography["publisher"] === `Marvel Comics` ||
            hero.biography["publisher"] === `DC Comics`
      )
      .map((hero) => <HeroItem key={hero.id} hero={hero} />);
  } else { // All or default value
    listItems = heroes
      .filter((hero) =>
        props.publisher !== ""
          ? hero.biography["publisher"] === `${props.publisher}`
          : hero.biography["publisher"] === `Marvel Comics` ||
            hero.biography["publisher"] === `DC Comics`
      )
      .map((hero) => <HeroItem key={hero.id} hero={hero} />);
  }
  // <Filter/>
//// <Filter func={pull_data} publisher={props.publisher} filter={props.filter}/>
  return ready ? (
    <Fragment>
      <div className="row mt-4">
        <div className="col-9">
          <h1>{props.title} {filter !== "All" && `- ${filter}`}</h1>
        </div>
        <div className="col-3">
          {" "}
         
        </div>
      </div>      
      <div className="row flex justify-content-center mt-4">{listItems}</div>
    </Fragment>
  ) : null;
};

export default Heroes;
