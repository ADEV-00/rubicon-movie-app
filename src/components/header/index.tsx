import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMovieType } from "../../store/modules/movie/actions";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <header>
      <div className="container">
        <div className="logo">Rubicon Movie App</div>
        <div className="header_btn_wrapper">
          <button
            ref={btnRef}
            className="header_btn"
            onClick={() => dispatch(setMovieType("movie"))}
          >
            Movie
          </button>
          <button
            ref={btnRef}
            className="header_btn"
            onClick={() => dispatch(setMovieType("tv"))}
          >
            Tv Show
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
