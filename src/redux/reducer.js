import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_ERROR,
  FETCH_DRINKS_SEARCH_SUCCESS,
  FETCH_SINGLE_DRINK_SUCCESS,
} from "./types";

const INITIAL_STATE = {
  loading: false,
  drinks: [],
  error: "",
};

const drinksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DRINKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DRINKS_SUCCESS:
      return {
        loading: false,
        drinks: action.payload,
        error: "",
      };
    case FETCH_DRINKS_SEARCH_SUCCESS:
      return {
        loading: false,
        drinks: action.payload,
        error: "",
      };
    case FETCH_SINGLE_DRINK_SUCCESS:
      return {
        loading: false,
        drinks: action.payload,
        error: "",
      };
    case FETCH_DRINKS_ERROR:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default drinksReducer;
