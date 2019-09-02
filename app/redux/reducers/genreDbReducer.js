import {
  GET_ALL_GENRES_PENDING,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_ALL_GENRES_RESET,
  GET_GENRE_BY_ID_PENDING,
  GET_GENRE_BY_ID_SUCCESS,
  GET_GENRE_BY_ID_FAILURE,
  GET_GENRE_BY_ID_RESET,
  GET_BOOKS_BY_GENRE_PENDING,
  GET_BOOKS_BY_GENRE_SUCCESS,
  GET_BOOKS_BY_GENRE_FAILURE,
  GET_BOOKS_BY_GENRE_RESET
} from "../actions/types";

const initialState = {
  dataLoading: true,
  data: [],
  genreDetails: {},
  error: ""
};

const genreDbReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GENRES_PENDING:
      return {
        ...state,
        dataLoading: action.dataLoading
      };
    case GET_ALL_GENRES_SUCCESS:
      return {
        ...state,
        dataLoading: action.dataLoading,
        data: action.payload
      };
    case GET_ALL_GENRES_FAILURE:
      return {
        ...state,
        dataLoading: action.dataLoading,
        error: action.payload
      };
    case GET_ALL_GENRES_RESET:
      return {
        ...state,
        dataLoading: false,
        data: [],
        error: ""
      };
    case GET_GENRE_BY_ID_PENDING:
      return {
        ...state,
        dataLoading: action.dataLoading
      };
    case GET_GENRE_BY_ID_SUCCESS:
      return {
        ...state,
        dataLoading: action.dataLoading,
        genreDetails: action.payload
      };
    case GET_GENRE_BY_ID_FAILURE:
      return {
        ...state,
        dataLoading: action.dataLoading,
        error: action.payload
      };
    case GET_GENRE_BY_ID_RESET:
      return {
        ...state,
        dataLoading: false,
        genreDetails: {},
        error: ""
      };
    case GET_BOOKS_BY_GENRE_PENDING:
      return {
        ...state,
        dataLoading: action.dataLoading
      };
    case GET_BOOKS_BY_GENRE_SUCCESS:
      return {
        ...state,
        dataLoading: action.dataLoading,
        genreDetails: action.payload
      };
    case GET_BOOKS_BY_GENRE_FAILURE:
      return {
        ...state,
        dataLoading: action.dataLoading,
        error: action.payload
      };
    case GET_BOOKS_BY_GENRE_RESET:
      return {
        ...state,
        dataLoading: false,
        genreDetails: {},
        error: ""
      };
    default:
      return state;
  }
};

export default genreDbReducer;
