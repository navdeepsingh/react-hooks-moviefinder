import React, { useState, useEffect } from 'react';
import MovieList from "./components/MovieList";

const App = () => {


  return (
    <>
      {
        loading ?
          <h1 className="text-center">
            ...fetching movies
          </h1> :
          <MovieList movies={movies} searchHandler={searchHandler} error={error} />
      }
    </>
  )
}

export default App;