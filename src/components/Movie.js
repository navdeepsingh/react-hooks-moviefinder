import React from "react";

const Movie = ({ info }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <div>
          <h1>{info.Title}</h1>
          <MovieDetails />
        </div>
        <img src={info.Poster} width="100" />
      </div>
    </React.Fragment>
  )
}

export default Movie;