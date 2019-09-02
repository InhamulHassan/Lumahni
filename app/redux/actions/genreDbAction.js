import {
  GET_ALL_GENRES_PENDING,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_ALL_GENRES_RESET,
  GET_GENRE_BY_ID_PENDING,
  GET_GENRE_BY_ID_SUCCESS,
  GET_GENRE_BY_ID_FAILURE,
  GET_BOOKS_BY_GENRE_PENDING,
  GET_BOOKS_BY_GENRE_SUCCESS,
  GET_BOOKS_BY_GENRE_FAILURE,
  GET_BOOKS_BY_GENRE_RESET
} from "./types";

import axios from "../../helpers/axios";

const URL = "/genre";

export const getGenresPending = () => ({
  type: GET_ALL_GENRES_PENDING,
  dataLoading: true
});

export const getGenresSuccess = json => ({
  type: GET_ALL_GENRES_SUCCESS,
  dataLoading: false,
  payload: json
});

export const getGenresFailure = error => ({
  type: GET_ALL_GENRES_FAILURE,
  dataLoading: false,
  payload: error
});

const getGenresReset = () => ({
  type: GET_ALL_GENRES_RESET
});

export const getGenres = () => {
  return async dispatch => {
    try {
      let response = await axios.get(URL);
      dispatch(getGenresPending());
      let json = await response.data;
      dispatch(getGenresSuccess(json));
    } catch (error) {
      console.log(error);
      dispatch(getGenresFailure(error));
    }
  };
};

export const resetGetGenres = () => {
  return dispatch => {
    dispatch(getGenresReset());
  };
};

const getGenreByIdPending = () => ({
  type: GET_GENRE_BY_ID_PENDING,
  dataLoading: true
});

const getGenreByIdSuccess = json => ({
  type: GET_GENRE_BY_ID_SUCCESS,
  dataLoading: false,
  payload: json
});

const getGenreByIdFailure = error => ({
  type: GET_GENRE_BY_ID_FAILURE,
  dataLoading: false,
  payload: error
});

const getGenreByIdReset = () => ({
  type: GET_GENRE_BY_ID_RESET
});

export const getGenreById = id => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/${id}`);
      dispatch(getGenreByIdPending());
      let json = await response.data;
      dispatch(getGenreByIdSuccess(json));
    } catch (error) {
      dispatch(getGenreByIdFailure(error));
    }
  };
};

export const resetGetGenreById = () => {
  return dispatch => {
    dispatch(getGenreByIdReset());
  };
};

const getBooksByGenrePending = () => ({
  type: GET_BOOKS_BY_GENRE_PENDING,
  dataLoading: true
});

const getBooksByGenreSuccess = json => ({
  type: GET_BOOKS_BY_GENRE_SUCCESS,
  dataLoading: false,
  payload: json
});

const getBooksByGenreFailure = error => ({
  type: GET_BOOKS_BY_GENRE_FAILURE,
  dataLoading: false,
  payload: error
});

const getBooksByGenreReset = () => ({
  type: GET_BOOKS_BY_GENRE_RESET
});

export const getBooksByGenre = id => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/books/${id}`);
      dispatch(getBooksByGenrePending());
      let json = await response.data;
      dispatch(getBooksByGenreSuccess(json));
    } catch (error) {
      console.log(error);
      dispatch(getBooksByGenreFailure(error));
    }
  };
};

export const resetGetBooksByGenre = () => {
  return dispatch => {
    dispatch(getBooksByGenreReset());
  };
};
