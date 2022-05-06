import { combineReducers } from "redux";
import changeSearch from "./SearchReducer";

const rootReducer = combineReducers({ changeSearch });

export default rootReducer;
