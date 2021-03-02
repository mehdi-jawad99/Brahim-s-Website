import { createSelector } from "reselect";

const mainColor = createSelector(
  (state) => state.color,
  (dataState) => {
    return {
      color: dataState.color,
      second: dataState.second,
    };
  }
);
export default mainColor;
