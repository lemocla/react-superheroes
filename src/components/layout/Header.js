import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import heroesContext from "../context/heroes/heroesContext";

const Header = (props) => {

  //Initialize context
  const HeroesContext = useContext(heroesContext);
  // desctructure
  const { resetFilter, setSelect, searchHeroes, clearSearch } = HeroesContext;
  
  // Set states for text
  const [text, setText] = useState("");

  // Initalise navigate
  const navigate = useNavigate();

  // Reset filter on click nav link
  const onClick = () => {
    resetFilter(); // reset filter results
    setSelect(); // reset default select value
    clearSearch(); // clear search is on
  };

  //Submit search
  const onSubmit = (e) => {
    e.preventDefault();
    // Alert
    if (text === "") {
    } else {
      resetFilter(); // Reset filter if on for search
      setSelect(); // Set default select
      searchHeroes(text); //Search heroes
      setText(""); // Reset search to null

      navigate("/search"); //Redirect to search
    }
  };

  const onChange = (e) => setText(e.target.value); // set text to input value

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-lg navbar-dark bg-black py-3 px-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-uppercase ml-3">
          Superheroes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" onClick={onClick}>
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={onClick}>
              <Link to="/heroes" className="nav-link">
                All heroes
              </Link>
            </li>
            <li className="nav-item" onClick={onClick}>
              <Link to="/marvel" className="nav-link">
                Marvel
              </Link>
            </li>
            <li className="nav-item" onClick={onClick}>
              <Link to="/dc" className="nav-link" publisher="DC Comics">
                DC
              </Link>
            </li>
            <li className="nav-item" onClick={onClick}>
              <Link to="/game" className="nav-link">
                Games
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={onSubmit}>
            <input
              className="form-control me-2 ms-3"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              value={text}
              onChange={onChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
