import {
  GET_ALL_GENRES_PENDING,
  GET_ALL_GENRES_SUCCESS,
  GET_ALL_GENRES_FAILURE,
  GET_GENRE_BY_ID_PENDING,
  GET_GENRE_BY_ID_SUCCESS,
  GET_GENRE_BY_ID_FAILURE
} from "../actions/types";

const initialState = {
  dataLoading: true,
  data: [],
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
    default:
      return state;
  }
};

export default genreDbReducer;
