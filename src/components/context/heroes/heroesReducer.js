
import {
  SEARCH_HEROES,
  GET_HERO,
  GET_HEROES,
  CLEAR_SEARCH,
  SET_FILTER,
  RESET_FILTER,
  SET_SELECT_DEFAULT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HERO: //add a hero data to hero single
      return {
        ...state,
        heroSingle: action.payload,
      };
    case GET_HEROES: //set heroes with API information
      return {
        ...state,
        heroes: action.payload,
        publisher: action.publisher,
      };
    case SET_FILTER:
      return {
        ...state,
        filterName: action.payload,
        filter: state.heroes.filter((hero) => {
          const regex = `${action.payload}`;
          return hero.connections["groupAffiliation"]
            .toLowerCase()
            .includes(regex.toLowerCase());
        }),
      };
    case SET_SELECT_DEFAULT: // Reset the default value for select field
      if (document.getElementById("featured-groups") != null) {
        document.getElementById("featured-groups").selectedIndex = 0;
      }
    case RESET_FILTER: 
      return {
        ...state,
        filter: null,
        filterName: action.playload,
      };
    case SEARCH_HEROES: // take text value as payload and filter heroes payload
      return {
        ...state,
        filter: null,
        search: true,
        searchResult: state.heroes.filter((hero) => {
          const regex = `${action.payload}`;
          return (
            hero.name.toLowerCase().includes(regex.toLowerCase()) ||
            hero.biography["fullName"]
              .toLowerCase()
              .includes(regex.toLowerCase())
          );
        }),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: false,
        searchResults: null,
      };
    default:
      return state;
  }
};