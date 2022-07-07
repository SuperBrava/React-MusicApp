import { combineReducers } from "redux";
import { albumReducer } from "./albumItem";
import { trackReducer } from "./trackItem";

const allReducers = combineReducers({
	albumReducer,
	trackReducer
});

export default allReducers;
