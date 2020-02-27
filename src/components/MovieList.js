import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <>
      {
        <div className="container my-5 home-button">
          <div className=" d-flex d-flex justify-content-center mb-3">
            <h1 className="text-slaned ">Movie List</h1>
          </div>
          <div className="movies-list d-flex flex-column">
            {movies && movies.length
              ? movies.map((movie, index) => {
                return <Movie key={index} info={movie} />
              })
              : <h2 className="text-center">💩 Not Found</h2>
            }
          </div>
        </div>
      }
    </>
  )
}

export default MovieList;