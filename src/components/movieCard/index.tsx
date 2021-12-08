import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

type itemProps = {
  movie: {
    title: string;
    poster_path: string;
    id: number;
    vote_average: number;
    name: string;
  };
};

const MovieCard = ({ movie }: itemProps) => {
  return (
    <>
      <Link to={`/${movie.id}`} className="item_wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="item_poster"
          alt={`${movie.title} Poster`}
        />
        <div className="description">
          <div className="title">{movie.title || movie.name}</div>
          <div className="rating">{movie.vote_average}</div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
