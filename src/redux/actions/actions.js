import axios from "axios";
import types from "./types";

/**
 * @function getData -get brahim's data from a file json
 * @returns {object} -dispatch the data
 */
export const getData = () => async (dispatch, getState) => {
  let data = await axios.get("/data.json");

  dispatch({
    type: types.GET_DATA_JSON,
    payload: data.data,
  });
};
