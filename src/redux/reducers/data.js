import types from "../actions/types";

const initialState = {
  loading: false,
  profile: {},
  experience: [],
  education: [],
  contact: {},
  languages: [],
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA_JSON:
      const {
        profile,
        experience,
        education,
        contact,
        languages,
      } = action.payload;
      return {
        ...state,
        profile,
        experience,
        education,
        contact,
        languages,
      };
    default:
      return state;
  }
}
