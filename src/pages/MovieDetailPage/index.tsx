import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../store/modules/movie/actions";
import { useParams } from "react-router";
import "./movieDetailPage.css";
import { useNavigate } from "react-router-dom";

const DetailsPage = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.Movie.isLoading);
  const data = useSelector((state: any) => state.Movie.movieDetails);
  const type = useSelector((state: any) => state.Movie.searchType);

  const fetchDetails = async (movieId: any, movieType: string) => {
    await movieId;
    await movieType;
    dispatch(getMovieDetails(movieId, movieType));
  };

  useEffect(() => {
    fetchDetails(id, type);
  }, [dispatch, id, type]); //eslint-disable-line

  if (loading || !data) return <div>Loading</div>;

  return (
    <div className="details_wrapper">
      <div className="details_container">
        <div className="details_header">
          <button className="btn_back" onClick={() => navigate(-1)}>
            <svg
              width="21"
              height="25"
              viewBox="0 0 21 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1066 10.0974C1.2196 9.98137 1.64629 9.48538 2.04376 9.07738C4.37401 6.51138 10.4529 2.31137 13.6346 1.02937C14.1178 0.823375 15.3394 0.387374 15.9921 0.359374C16.6176 0.359374 17.2138 0.503375 17.7827 0.795375C18.4919 1.20338 19.0608 1.84537 19.3725 2.60337C19.5732 3.12937 19.885 4.70337 19.885 4.73137C20.1967 6.45337 20.3682 9.25137 20.3682 12.3434C20.3682 15.2894 20.1967 17.9734 19.9415 19.7214C19.9122 19.7494 19.6005 21.7054 19.2595 22.3754C18.6341 23.5994 17.4125 24.3594 16.1051 24.3594L15.9921 24.3594C15.1407 24.3294 13.3501 23.5694 13.3501 23.5414C10.3399 22.2574 4.40129 18.2634 2.01453 15.6094C2.01453 15.6094 1.34235 14.9274 1.05009 14.5014C0.594174 13.8894 0.368164 13.1314 0.368164 12.3734C0.368164 11.5274 0.6234 10.7394 1.1066 10.0974Z"
                fill="white"
              />
            </svg>
          </button>
          <img
            className="banner_image"
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="banner_image"
          />
        </div>
        <div className="details">
          <div>
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="poster_image"
            />
          </div>
          <div className="details_title">
            {data.original_name || data.original_title}
          </div>
          <div className="genre_wrapper">
            {data.genres
              ? data.genres.map((genre: any) => (
                  <div className="genre">{genre.name}</div>
                ))
              : null}
          </div>
          <div className="rating_wrapper">
            <div className="details_rating">{data.vote_average} / 10</div>
          </div>
          <div className="details_overview_wrapper">
            <div className="overview_title">Overview</div>
            <div className="overview_text">{data.overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
