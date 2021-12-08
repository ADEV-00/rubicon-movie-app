import {
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  BEFORE_STATE,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
  SET_MOVIE_TYPE,
} from "../movieTypes";

const initialState = {
  movies: null,
  error: null,
  isLoading: false,
  searchType: "movie",
  movieDetails: null,
};

type Action = {
  type: string;
  payload: any;
};

const movieReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case BEFORE_STATE:
      return {
        ...state,
        isLoading: true,
        error: null,
        movieDetails: {},
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: payload,
        isLoading: false,
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: payload,
        isLoading: false,
      };
    case FETCH_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case SET_MOVIE_TYPE:
      return {
        ...state,
        searchType: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
