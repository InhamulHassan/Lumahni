import {
  GET_ALL_GENRES_PENDING,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_GENRE_BY_ID_PENDING,
  GET_GENRE_BY_ID_SUCCESS,
  GET_GENRE_BY_ID_FAILURE
} from "./types";

import axios from "../../helpers/axios";
  
const URL = "/genre";

export const getGenrePending = () => ({
  type: GET_ALL_GENRES_PENDING,
  dataLoading: true
});

export const getGenreSuccess = json => ({
  type: GET_ALL_GENRES_SUCCESS,
  dataLoading: false,
  payload: json
});

export const getGenreFailure = error => ({
  type: GET_ALL_GENRES_FAILURE,
  dataLoading: false,
  payload: error
});

export const getGenres = () => {
  return async dispatch => {
    try {
      let response = await fetch(URL);
      dispatch(getGenrePending());
      let json = await response.json();
      dispatch(getGenreSuccess(json));
    } catch (error) {
      console.log(error);
      dispatch(getGenreFailure(error));
    }
  };
};
