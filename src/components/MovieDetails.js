import React from "react";

const MovieDetails = ({ detail }) => {
  return (
    <>
      <p>
        <strong>Year: </strong> {detail.Year} <br />
        <strong>IMDb: </strong> <a href={'https://www.imdb.com/title/' + detail.imdbID}>https://www.imdb.com/title/{detail.imdbID}</a>
      </p>
    </>
  )
}

export default MovieDetails;