import React, {
  Fragment,
  useState,
  useContext,
} from "react";
import heroesContext from "../context/heroes/heroesContext";

const Filter = (props) => {
  // Set state publisher
  const [publisher, setPublisher] = useState(props.publisher);

  // Initialize context
  const HeroesContext = useContext(heroesContext);
  const { setFilter, resetFilter, filter } = HeroesContext;

  // Set publisher when navigation is updated
  if (publisher !== props.publisher) {
    setPublisher(props.publisher);
  }

  // Filter hero db on click of dropdown select field
  const onClick = (e) => {
    setFilter(e.target.value); // set filter from heroesState
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
    ].sort();
  } else if (publisher === "DC Comics") {
    featuredCategories = [
      "Batman Family",
      "Justice League",
      "Teen Titans",
      "Joker",
      "Legion of Super-Heroes",
      "Aquaman family",
    ];
  } else {
    featuredCategories = [
      "X-Men",
      "Avengers",
      "Justice League",
      "Guardians of the Galaxy",
      "Fantastic Four",
      "Teen Titans",
      "Joker League of Anarchy",
    ];
  }

  // Options Items
  const otpionItems = featuredCategories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  return (
    <Fragment>
      <select
        className="py-1 px-1 form-select"
        name="featured-groups"
        id="featured-groups"
        onChange={onClick}
      >
        <option id="default" selected>
          Filter by featured groups
        </option>
        {otpionItems}
      </select>
    </Fragment>
  );
};

export default Filter;
