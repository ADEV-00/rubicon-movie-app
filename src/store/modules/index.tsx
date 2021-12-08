import { combineReducers } from "redux";
import movieReducer from "./movie/reducer";

const reducer = combineReducers({
  Movie: movieReducer,
});

export default reducer;
