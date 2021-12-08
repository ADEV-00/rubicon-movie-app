import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMovieBySearch } from "../../store/modules/movie/actions";
import "./search.css";

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state);
  const inputRef = React.createRef<HTMLInputElement>();
  const timeout = useRef<any>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current);

    event.preventDefault();
    if (event.target.value.length > 3) {
      timeout.current = setTimeout(() => {
        dispatch(getMovieBySearch(event.target.value, data.Movie.searchType));
      }, 600);
    } else if (event.target.value === "") {
      dispatch(getMovies(data.Movie.searchType));
    }
  };

  return (
    <div className="search_wrapper">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
