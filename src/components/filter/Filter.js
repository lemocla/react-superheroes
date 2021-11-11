
import React, { Fragment, useState, useEffect } from "react";

const Filter = (props) => {
  const [filter, setFilter] = useState("All");
  const [publisher, setPublisher] = useState(props.publisher);
  
  useEffect(() => {
    props.func('All')
  })

  // Set publisher when navigation is updated
  if (publisher !== props.publisher) {
    setPublisher(props.publisher);
  }

  // On click function - when option  is selected
  const onClick = (e) => {
    let filterValue = e.target.value;
    props.func(e.target.value); //pass value to heroespage
    setFilter(filterValue);
  };

  // Arrays

  let featuredCategories = [];
  if (publisher === "Marvel Comics") {
    featuredCategories = [
      "X-Men",
      "Avengers",
      "Asgardians",
      "Guardians of the Galaxy",
      "Fantastic Four",
      "Hydra",
      "Thunderbolts",
      "S.H.I.E.L.D.",
      "Defenders",
      "All",
    ].sort();
  } else if (publisher === "DC Comics") {
    featuredCategories = [
      "Batman Family",
      "Justice League",
      "Teen Titans",
      "Joker",
      "Legion of Super-Heroes",
      "Aquaman family",
      "All",
    ].sort();
  } else {
    featuredCategories = [
      "X-Men",
      "Avengers",
      "Justice League",
      "Guardians of the Galaxy",
      "Fantastic Four",
      "Teen Titans",
      "Joker League of Anarchy",
      "All",
    ].sort();
  }

  // Options

  const otpionItems = featuredCategories.map((cat) => (
    <option  key={cat} value={cat}>
      {cat}
    </option>
  ));

  return (
    <Fragment>
      <label className="fs-6 fw-bold" htmlFor="featured-groups">
        Filter by featured groups
      </label>
      <select
        className="py-1 px-1 form-select"
        name="featured-groups"
        id="featured-groups"
        onChange={onClick}
      >
        {otpionItems}
      </select>
    </Fragment>
  );
};

export default Filter;
