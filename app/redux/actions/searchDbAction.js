import {
  SEARCH_BOOKS_BY_TITLE_PENDING,
  SEARCH_BOOKS_BY_TITLE_SUCCESS,
  SEARCH_BOOKS_BY_TITLE_FAILURE,
  SEARCH_BOOKS_BY_TITLE_RESET,
  SEARCH_BOOKS_BY_ISBN_PENDING,
  SEARCH_BOOKS_BY_ISBN_SUCCESS,
  SEARCH_BOOKS_BY_ISBN_FAILURE,
  SEARCH_BOOKS_BY_ISBN_RESET,
  SEARCH_BOOKS_BY_ISBN13_PENDING,
  SEARCH_BOOKS_BY_ISBN13_SUCCESS,
  SEARCH_BOOKS_BY_ISBN13_FAILURE,
  SEARCH_BOOKS_BY_ISBN13_RESET,
  SEARCH_AUTHORS_BY_NAME_PENDING,
  SEARCH_AUTHORS_BY_NAME_SUCCESS,
  SEARCH_AUTHORS_BY_NAME_FAILURE,
  SEARCH_AUTHORS_BY_NAME_RESET,
  SEARCH_GENRES_BY_NAME_PENDING,
  SEARCH_GENRES_BY_NAME_SUCCESS,
  SEARCH_GENRES_BY_NAME_FAILURE,
  SEARCH_GENRES_BY_NAME_RESET
} from "./types";

import axios from "../../helpers/axios";

const URL = "/search";

const searchBooksByTitlePending = () => ({
  type: SEARCH_BOOKS_BY_TITLE_PENDING,
  dataLoading: true
});

const searchBooksByTitleSuccess = json => ({
  type: SEARCH_BOOKS_BY_TITLE_SUCCESS,
  dataLoading: false,
  payload: json
});

const searchBooksByTitleFailure = error => ({
  type: SEARCH_BOOKS_BY_TITLE_FAILURE,
  dataLoading: false,
  payload: error
});

const searchBooksByTitleReset = () => ({
  type: SEARCH_BOOKS_BY_TITLE_RESET
});

export const searchBooksByTitle = titleQuery => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/book/${titleQuery}`);
      dispatch(searchBooksByTitlePending());
      let json = await response.data;
      dispatch(searchBooksByTitleSuccess(json));
    } catch (error) {
      dispatch(searchBooksByTitleFailure(error));
    }
  };
};

export const resetSearchBooksByTitle = () => {
  return dispatch => {
    dispatch(searchBooksByTitleReset());
  };
};

const searchBooksByISBNPending = () => ({
  type: SEARCH_BOOKS_BY_ISBN_PENDING,
  dataLoading: true
});

const searchBooksByISBNSuccess = json => ({
  type: SEARCH_BOOKS_BY_ISBN_SUCCESS,
  dataLoading: false,
  payload: json
});

const searchBooksByISBNFailure = error => ({
  type: SEARCH_BOOKS_BY_ISBN_FAILURE,
  dataLoading: false,
  payload: error
});

const searchBooksByISBNReset = () => ({
  type: SEARCH_BOOKS_BY_ISBN_RESET
});

export const searchBooksByISBN = isbnQuery => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/book/isbn/${isbnQuery}`);
      dispatch(searchBooksByISBNPending());
      let json = await response.data;
      dispatch(searchBooksByISBNSuccess(json));
    } catch (error) {
      dispatch(searchBooksByISBNFailure(error));
    }
  };
};

export const resetSearchBooksByISBN = () => {
  return dispatch => {
    dispatch(searchBooksByISBNReset());
  };
};

const searchBooksByISBN13Pending = () => ({
  type: SEARCH_BOOKS_BY_ISBN13_PENDING,
  dataLoading: true
});

const searchBooksByISBN13Success = json => ({
  type: SEARCH_BOOKS_BY_ISBN13_SUCCESS,
  dataLoading: false,
  payload: json
});

const searchBooksByISBN13Failure = error => ({
  type: SEARCH_BOOKS_BY_ISBN13_FAILURE,
  dataLoading: false,
  payload: error
});

const searchBooksByISBN13Reset = () => ({
  type: SEARCH_BOOKS_BY_ISBN13_RESET
});

export const searchBooksByISBN13 = isbn13Query => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/book/isbn13/${isbn13Query}`);
      dispatch(searchBooksByISBN13Pending());
      let json = await response.data;
      dispatch(searchBooksByISBN13Success(json));
    } catch (error) {
      dispatch(searchBooksByISBN13Failure(error));
    }
  };
};

export const resetSearchBooksByISBN13 = () => {
  return dispatch => {
    dispatch(searchBooksByISBN13Reset());
  };
};

const searchAuthorsByNamePending = () => ({
  type: SEARCH_AUTHORS_BY_NAME_PENDING,
  dataLoading: true
});

const searchAuthorsByNameSuccess = json => ({
  type: SEARCH_AUTHORS_BY_NAME_SUCCESS,
  dataLoading: false,
  payload: json
});

const searchAuthorsByNameFailure = error => ({
  type: SEARCH_AUTHORS_BY_NAME_FAILURE,
  dataLoading: false,
  payload: error
});

const searchAuthorsByNameReset = () => ({
  type: SEARCH_AUTHORS_BY_NAME_RESET
});

export const searchAuthorsByName = nameQuery => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/author/${nameQuery}`);
      dispatch(searchAuthorsByNamePending());
      let data = await response.data;
      dispatch(searchAuthorsByNameSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(searchAuthorsByNameFailure(error));
    }
  };
};

export const resetSearchAuthorsByName = () => {
  return dispatch => {
    dispatch(searchAuthorsByNameReset());
  };
};

const searchGenresByNamePending = () => ({
  type: SEARCH_GENRES_BY_NAME_PENDING,
  dataLoading: true
});

const searchGenresByNameSuccess = json => ({
  type: SEARCH_GENRES_BY_NAME_SUCCESS,
  dataLoading: false,
  payload: json
});

const searchGenresByNameFailure = error => ({
  type: SEARCH_GENRES_BY_NAME_FAILURE,
  dataLoading: false,
  payload: error
});

const searchGenresByNameReset = () => ({
  type: SEARCH_GENRES_BY_NAME_RESET
});

export const searchGenresByName = nameQuery => {
  return async dispatch => {
    try {
      let response = await axios.get(`${URL}/genre/${nameQuery}`);
      dispatch(searchGenresByNamePending());
      let data = await response.data;
      dispatch(searchGenresByNameSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(searchGenresByNameFailure(error));
    }
  };
};

export const resetSearchGenresByName = () => {
  return dispatch => {
    dispatch(searchGenresByNameReset());
  };
};
