import React, { useReducer } from "react";
import axios from "axios";
import heroesContext from "./heroesContext";
import heroesReducer from "./heroesReducer";
import Api from "../../Api/Api";
import {
  SEARCH_HEROES,
  GET_HERO,
  GET_HEROES,
  CLEAR_SEARCH,
  SET_FILTER,
  RESET_FILTER,
  SET_SELECT_DEFAULT,
} from "../types";

const HeroesState = (props) => {
  const initialState = {
    filter: null,
    filterName: null,
    publisher: "",
    heroSingle: {},
    heroes: [],
    searchResult: null,
    search: false,
  };

  // API Call
  const ApiAll = axios.create({
    baseURL: "https://akabab.github.io/superhero-api/api/all.json",
    responseType: "json",
  });
  
  // Initialize state
  const [state, dispatch] = useReducer(heroesReducer, initialState);

  // Get heroes
  const getHeroes = async () => {
    const res = await ApiAll.get();
    dispatch({
      type: GET_HEROES,
      payload: res.data,
    });
  };

  // Get one hero
  const getHero = async (id) => {
    const res = await Api.get();
    dispatch({
      type: GET_HERO,
      payload: res,
    });
  };

  // Filter
  const setFilter = (text) => {
    dispatch({
      type: SET_FILTER,
      payload: text,
    });
  };

  // Reset filter
  const resetFilter = () => {
    dispatch({
      type: RESET_FILTER,
    });
  };

  // Set select to default value
  const setSelect = () => {
    dispatch({
      type: SET_SELECT_DEFAULT,
    });
  };

  // Search heroes
  const searchHeroes = (text) => {
    dispatch({
      type: SEARCH_HEROES,
      payload: text,
    });
  };

  // Clear search
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  return (
    <heroesContext.Provider
      value={{
        filterName: state.filterName,
        filter: state.filter,
        publisher: state.publisher,
        heroSingle: state.heroSingle,
        heroes: state.heroes,
        herocatnav: state.herocatnav,
        searchResult: state.searchResult,
        search: state.search,
        resetFilter,
        setFilter,
        getHeroes,
        getHero,
        setSelect,
        searchHeroes,
        clearSearch,
      }}
    >
      {props.children}
    </heroesContext.Provider>
  );
};

export default HeroesState;
