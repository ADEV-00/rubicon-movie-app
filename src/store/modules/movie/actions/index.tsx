import {
  BEFORE_STATE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_ERROR,
  SET_MOVIE_TYPE,
} from "../movieTypes";
import { Dispatch } from "redux";

const baseUrl = "https://api.themoviedb.org/3/";

export const getMovies = (type: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: BEFORE_STATE });
    try {
      const response = await fetch(
        `${baseUrl}discover/${type}?sort_by=popularity.desc&api_key=ccb56df6317a72e3939ac7c5bf8082f8`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: FETCH_MOVIE_ERROR,
        payload: err,
      });
    }
  };
};

export const getMovieBySearch = (search: string, type: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `${baseUrl}search/${type}?query=${search}&api_key=ccb56df6317a72e3939ac7c5bf8082f8`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: FETCH_MOVIE_ERROR,
        payload: err,
      });
    }
  };
};

export const getMovieDetails = (movieID?: string, movieType?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: BEFORE_STATE });
    try {
      const response = await fetch(
        `${baseUrl}${movieType}/${movieID}?api_key=ccb56df6317a72e3939ac7c5bf8082f8`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_MOVIE_DETAILS_ERROR,
        payload: err,
      });
    }
  };
};

export const setMovieType = (movieType: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_MOVIE_TYPE, payload: movieType });
  };
};

//https://api.themoviedb.org/3/movie/580489?api_key=ccb56df6317a72e3939ac7c5bf8082f8&language=en-US
