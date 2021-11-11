import React, { Fragment, useState, useEffect } from "react";
import HeroItem from "./HeroItem";
import axios from "axios";
import "../../App.css";

/*
- Call API to get all the super heroes
- Filter results according to props passed in the route in App.js - marvel, dc or all heroes
- Render html for heroes with title passed as props in App.js
- Render hero Item for the card display
*/

const Heroes = (props) => {

  // API Call
  const ApiAll = axios.create({
    baseURL: "https://akabab.github.io/superhero-api/api/all.json",
    responseType: "json",
  });
  const [heroes, testData] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await ApiAll.get();
      testData(data);
      setReady(true);
    };
    fetchApi();
    // eslint-disable-next-line
  }, []);

  // Filter 
  let listItems;
  if (props.filter !== "All") { // Filter according to prop value
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

  return ready ? (
    <Fragment>
      <div className="row flex justify-content-center mt-4">{listItems}</div>
    </Fragment>
  ) : null;
};

export default Heroes;
