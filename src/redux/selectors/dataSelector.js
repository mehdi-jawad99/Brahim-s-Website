import { createSelector } from "reselect";

const formSelector = createSelector(
  (state) => state.data,
  (dataState) => {
    const { profile, experience, education, contact, languages } = dataState;
    return {
      profile,
      experience,
      education,
      contact,
      languages,
    };
  }
);
export default formSelector;
