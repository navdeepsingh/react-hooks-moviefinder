import React from "react";
import MovieDetails from "./MovieDetails";

const Movie = ({ info }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <div>
          <h2>{info.Title}</h2>
          <MovieDetails detail={info} />
        </div>
        <a href={'https://www.imdb.com/title/' + info.imdbID} target="_blank">
          <img src={info.Poster} width="100" />
        </a>
      </div>
    </React.Fragment>
  )
}

export default Movie;