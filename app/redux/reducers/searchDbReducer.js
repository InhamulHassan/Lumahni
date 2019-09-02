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
} from "../actions/types";

const initialState = {
  booksByTitleLoading: true,
  booksByTitleData: [],
  booksByTitleError: "",
  booksByIsbnLoading: true,
  booksByIsbnData: [],
  booksByIsbnError: "",
  booksByIsbn13Loading: true,
  booksByIsbn13Data: [],
  booksByIsbn13Error: "",
  authorsByNameLoading: true,
  authorsByNameData: [],
  authorsByNameError: "",
  genresByNameLoading: true,
  genresByNameData: [],
  genresByNameError: ""
};

const searchDbReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_BY_TITLE_PENDING:
      return {
        ...state,
        booksByTitleLoading: action.dataLoading
      };
    case SEARCH_BOOKS_BY_TITLE_SUCCESS:
      return {
        ...state,
        booksByTitleLoading: action.dataLoading,
        booksByTitleData: action.payload
      };
    case SEARCH_BOOKS_BY_TITLE_FAILURE:
      return {
        ...state,
        booksByTitleLoading: action.dataLoading,
        booksByTitleError: action.payload
      };
    case SEARCH_BOOKS_BY_TITLE_RESET:
      return {
        ...state,
        booksByTitleLoading: false,
        booksByTitleData: [],
        booksByTitleError: ""
      };
    case SEARCH_BOOKS_BY_ISBN_PENDING:
      return {
        ...state,
        booksByIsbnLoading: action.dataLoading
      };
    case SEARCH_BOOKS_BY_ISBN_SUCCESS:
      return {
        ...state,
        booksByIsbnLoading: action.dataLoading,
        booksByIsbnData: action.payload
      };
    case SEARCH_BOOKS_BY_ISBN_FAILURE:
      return {
        ...state,
        booksByIsbnLoading: action.dataLoading,
        booksByIsbnError: action.payload
      };
    case SEARCH_BOOKS_BY_ISBN_RESET:
      return {
        ...state,
        booksByIsbnLoading: false,
        booksByIsbnData: [],
        booksByIsbnError: ""
      };
    case SEARCH_BOOKS_BY_ISBN13_PENDING:
      return {
        ...state,
        booksByIsbn13Loading: action.dataLoading
      };
    case SEARCH_BOOKS_BY_ISBN13_SUCCESS:
      return {
        ...state,
        booksByIsbn13Loading: action.dataLoading,
        booksByIsbn13Data: action.payload
      };
    case SEARCH_BOOKS_BY_ISBN13_FAILURE:
      return {
        ...state,
        booksByIsbn13Loading: action.dataLoading,
        booksByIsbn13Error: action.payload
      };
    case SEARCH_BOOKS_BY_ISBN13_RESET:
      return {
        ...state,
        booksByIsbn13Loading: false,
        booksByIsbn13Data: [],
        booksByIsbn13Error: ""
      };
    case SEARCH_AUTHORS_BY_NAME_PENDING:
      return {
        ...state,
        authorsByNameLoading: action.dataLoading
      };
    case SEARCH_AUTHORS_BY_NAME_SUCCESS:
      return {
        ...state,
        authorsByNameLoading: action.dataLoading,
        authorsByNameData: action.payload
      };
    case SEARCH_AUTHORS_BY_NAME_FAILURE:
      return {
        ...state,
        authorsByNameLoading: action.dataLoading,
        authorsByNameError: action.payload
      };
    case SEARCH_AUTHORS_BY_NAME_RESET:
      return {
        ...state,
        authorsByNameLoading: false,
        authorsByNameData: [],
        authorsByNameError: ""
      };
    case SEARCH_GENRES_BY_NAME_PENDING:
      return {
        ...state,
        genresByNameLoading: action.dataLoading
      };
    case SEARCH_GENRES_BY_NAME_SUCCESS:
      return {
        ...state,
        genresByNameLoading: action.dataLoading,
        genresByNameData: action.payload
      };
    case SEARCH_GENRES_BY_NAME_FAILURE:
      return {
        ...state,
        genresByNameLoading: action.dataLoading,
        genresByNameError: action.payload
      };
    case SEARCH_GENRES_BY_NAME_RESET:
      return {
        ...state,
        genresByNameLoading: false,
        genresByNameData: [],
        genresByNameError: ""
      };
    default:
      return state;
  }
};

export default searchDbReducer;
