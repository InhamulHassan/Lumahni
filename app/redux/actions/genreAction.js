import {
  GET_ALL_GENRES_PENDING,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_GENRE_BY_ID_PENDING,
  GET_GENRE_BY_ID_SUCCESS,
  GET_GENRE_BY_ID_FAILURE
} from "./types";
import { DEVELOPMENT_SERVER_URL } from "react-native-dotenv";

const URL = `${DEVELOPMENT_SERVER_URL}/genre`;

export const fetchGenre = () => ({
  type: GET_ALL_GENRES_PENDING,
  dataLoading: true
});

export const fetchGenreSuccess = json => ({
  type: GET_ALL_GENRES_SUCCESS,
  dataLoading: false,
  payload: json
});

export const fetchGenreFailure = error => ({
  type: GET_ALL_GENRES_FAILURE,
  dataLoading: false,
  payload: error
});

export const getGenre = () => {
  console.log("getGenre");
  return async dispatch => {
    // dispatch(fetchGenre());
    try {
      let response = await fetch(URL);
      dispatch(fetchGenre());
      let json = await response.json();
      // json = JSON.stringify(json);
      // dispatch(fetchGenreSuccess(json[0]));
      // dispatch(fetchGenreSuccess(json.results));
      dispatch(fetchGenreSuccess(json));
      console.log("JSON:" + json);
      console.log("\nResponse:" + json.length);
    } catch (error) {
      console.log(error);
      dispatch(fetchGenreFailure(error));
    }
  };
};
