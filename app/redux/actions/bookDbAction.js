import {
  GET_ALL_BOOKS_PENDING,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_FAILURE,
  GET_ALL_BOOKS_RESET,
  GET_BOOK_BY_ID_PENDING,
  GET_BOOK_BY_ID_SUCCESS,
  GET_BOOK_BY_ID_FAILURE,
  GET_BOOK_BY_ID_RESET
} from "./types";

import axios from "../../helpers/axios";

const URL = "/book";

const getBooksPending = () => ({
  type: GET_ALL_BOOKS_PENDING,
  dataLoading: true
});

const getBooksSuccess = json => ({
  type: GET_ALL_BOOKS_SUCCESS,
  dataLoading: false,
  payload: json
});

const getBooksFailure = error => ({
  type: GET_ALL_BOOKS_FAILURE,
  dataLoading: false,
  payload: error
});

const getBooksReset = () => ({
  type: GET_ALL_BOOKS_RESET
});

export const getBooks = () => {
  return async dispatch => {
    try {
      let response = await axios.get(URL);
      dispatch(getBooksPending());
      let json = await response.data;
      dispatch(getBooksSuccess(json));
    } catch (error) {
      console.log(error);
      dispatch(getBooksFailure(error));
    }
  };
};

export const resetGetBooks = () => {
  return dispatch => {
    dispatch(getBooksReset());
  };
};

const getBookByIdPending = () => ({
  type: GET_BOOK_BY_ID_PENDING,
  dataLoading: true
});

const getBookByIdSuccess = json => ({
  type: GET_BOOK_BY_ID_SUCCESS,
  dataLoading: false,
  payload: json
});

const getBookByIdFailure = error => ({
  type: GET_BOOK_BY_ID_FAILURE,
  dataLoading: false,
  payload: error
});

const getBookByIdReset = () => ({
  type: GET_BOOK_BY_ID_RESET
});

export const getBookById = id => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/${id}`);
      dispatch(getBookByIdPending());
      let json = await response.data;
      dispatch(getBookByIdSuccess(json));
    } catch (error) {
      dispatch(getBookByIdFailure(error));
    }
  };
};

export const resetGetBookById = () => {
  return dispatch => {
    dispatch(getBookByIdReset());
  };
};
