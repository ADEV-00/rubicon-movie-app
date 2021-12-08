import React, { useEffect } from "react";
import MovieList from "../../components/movieList";
import Search from "../../components/search";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/modules/movie/actions";
import Header from "../../components/header";
import "./homePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state);

  const getData = () => dispatch(getMovies(data.Movie.searchType));

  useEffect(() => {
    getData();
  }, [data.Movie.searchType]); // eslint-disable-line

  if (data.Movie.isLoading) {
    return <div>Loading...</div>;
  }

  if (!data.Movie.movies) return <div>No movies</div>;
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Search />
        <MovieList />
      </div>
    </div>
  );
};

export default HomePage;
