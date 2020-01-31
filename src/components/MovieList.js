import React, { useContext } from "react";
import Movie from "./Movie";
import MovieSearch from "./MovieSearch";
import { MovieContext } from "../context/index"

const MovieList = () => {
  const appContext = useContext(MovieContext)
  const { movies, searchHandler, error } = appContext
  return (
    <>
      <MovieSearch searchHandler={searchHandler}></MovieSearch>
      {
        error ?
          <div className="text-center"><h2>💩 Not Found</h2></div>
          :
          <div className="container my-5 home-button">
            <div className=" d-flex d-flex justify-content-center mb-3">
              <h1 className="text-slaned ">Movie List</h1>
            </div>
            <div className="movies-list d-flex flex-column">
              {
                movies.map((movie, index) => {
                  return <Movie key={index} info={movie} />
                })
              }
            </div>
          </div>
      }
    </>
  )
}

export default MovieList;