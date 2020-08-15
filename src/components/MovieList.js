import React from "react";
import Movie from "./Movie";
import MovieSearch from "./MovieSearch";
import ReactLogo from "./Reactjs.png";

const MovieList = ({ movies, searchHandler, error }) => {
  return (
    <>
      <div class="logo">
        <img src={ReactLogo} alt="" width="100" />
      </div>
      <div class="container d-flex justify-content-center mt-5">
        <h1>Movie Finder</h1>
      </div>
      <MovieSearch searchHandler={searchHandler}></MovieSearch>
      {error ? (
        <div className="text-center">
          <h2>💩 Not Found</h2>
        </div>
      ) : (
        <div className="container my-5 home-button">
          <div className=" d-flex d-flex justify-content-center mb-3">
            <h1 className="text-slaned ">Movie List</h1>
          </div>
          <div className="movies-list d-flex flex-column">
            {movies.map((movie) => {
              return <Movie key={movie.imdbID} info={movie} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
