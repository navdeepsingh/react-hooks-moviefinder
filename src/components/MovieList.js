import React from "react";

const MovieList = ({ movies }) => {
  return (
    <>
      <div className="container my-5 home-button">

        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Movie List</h1>
        </div>

        <div className="row movie-list">
          {
            movies.map(movie => {
              return <div key={movie.imdbID}>
                {movie.Title}
                <img src={movie.Poster} />
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default MovieList;