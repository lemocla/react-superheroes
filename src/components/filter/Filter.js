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
  const { setFilter } = HeroesContext;

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
      "Avengers",
      "Asgardians",
      "Defenders",
      "Fantastic Four",
      "Guardians of the Galaxy",
      "Hydra",
      "S.H.I.E.L.D.",
      "Thunderbolts",
      "X-Men"
    ]
  } else if (publisher === "DC Comics") {
    featuredCategories = [
      "Aquaman family",
      "Batman Family",
      "Joker",
      "Justice League",
      "Legion of Super-Heroes",
      "Teen Titans", 
    ];
  } else {
    featuredCategories = [
      "Avengers",
      "Fantastic Four",
      "Guardians of the Galaxy",
      "Joker League of Anarchy",
      "Justice League",
      "Teen Titans",
      "X-Men",
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
        className="py-1 px-1 px-lg-3 form-select"
        name="featured-groups"
        id="featured-groups"
        onChange={onClick}
      >
        <option id="default" value="default" selected>
          Filter by featured groups
        </option>
        {otpionItems}
      </select>
    </Fragment>
  );
};

export default Filter;
