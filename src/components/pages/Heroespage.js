import React, { Fragment, useState } from "react";
import Heroes from "../heroes/Heroes";
import Filter from "../filter/Filter";

/* Render Marvel, DC and All hero pages using Heroes and Filter component */

const Heroespage = (props) => {
  const [filter, setFilter] = useState("All"); // set filter to all by default

  const pull_data = (data) => {
    // function to update props when option is selected in Filter
    setFilter(data);
  };
  
  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-9">
          <h1>{props.title}</h1>
        </div>
        <div className="col-3">
          {" "}
          <Filter func={pull_data} publisher={props.publisher} />
        </div>
      </div>
      <Heroes filter={filter} publisher={props.publisher} title={props.title} />
    </Fragment>
  );
};

export default Heroespage;
