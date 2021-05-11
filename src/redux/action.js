import axios from "axios";
import {
  FETCH_DRINKS_REQUEST,
  FETCH_DRINKS_SUCCESS,
  FETCH_DRINKS_ERROR,
  FETCH_DRINKS_SEARCH_SUCCESS,
  FETCH_SINGLE_DRINK_SUCCESS,
} from "./types";

export const fetchUsersRequest = () => ({
  type: FETCH_DRINKS_REQUEST,
});
export const fetchUsersSuccess = (drinks) => ({
  type: FETCH_DRINKS_SUCCESS,
  payload: drinks,
});
export const fetchSearchSuccess = (searchDrinks) => ({
  type: FETCH_DRINKS_SEARCH_SUCCESS,
  payload: searchDrinks,
});
export const fetchSingleSuccess = (singleDrink) => ({
  type: FETCH_SINGLE_DRINK_SUCCESS,
  payload: singleDrink,
});

export const fetchUsersError = (errorMsg) => ({
  type: FETCH_DRINKS_ERROR,
  payload: errorMsg,
});

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const fetchRequest = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(`${url}`)
      .then((result) => {
        const drinks = result.data.drinks;
        dispatch(fetchUsersSuccess(drinks));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};
export const fetchSearchRequest = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(`${url}${searchTerm}`)
      .then((result) => {
        const searchDrinks = result.data.drinks;
        dispatch(fetchSearchSuccess(searchDrinks));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};

export const fetchSingleRequest = (id) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => {
        const singleDrink = result.data.drinks;
        dispatch(fetchSingleSuccess(singleDrink));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersError(errorMsg));
      });
  };
};
