import axios from "axios";
import types from "./types";

/**
 * @function getData -get brahim's data from a file json
 * @returns {object} -dispatch the data
 */

export const getData = () => (dispatch, getState) => {
  axios.get("/data.json").then((res) => {
    dispatch({
      type: types.GET_DATA_JSON,
      payload: res.data,
    });
    console.log("gg");
  });
};
