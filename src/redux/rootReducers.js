import { combineReducers } from "redux";
import dataBrahim from "./reducers/data";
import mainColor from "./reducers/mainColorReducer";

const rootReducers = combineReducers({
  data: dataBrahim,
  color: mainColor,
});
export default rootReducers;
