import { combineReducers } from "redux";
import drinksReducer from "./reducer";
const rootReducer = combineReducers({
  drinks: drinksReducer,
});

export default rootReducer;
