import React from "react";
import Movie from "./Movie";
import MovieSearch from "./MovieSearch";

const MovieList = ({ movies }) => {
  return (
    <>
      <MovieSearch></MovieSearch>
      <div className="container my-5 home-button">
        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Movie List</h1>
        </div>
        <div className="d-flex flex-column">
          {
            movies.map(movie => {
              return <Movie key={movie.imdbID} info={movie} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default MovieList;