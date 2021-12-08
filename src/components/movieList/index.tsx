import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard";

const MovieList = () => {
  const movieData = useSelector((state: any) => state.Movie);

  if (movieData.isLoading) return <div>Loading...</div>;
  if (!movieData.movies) return <div>No Movies</div>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {movieData.movies.map((movie: any) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
