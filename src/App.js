import React, { useState, useEffect } from 'react';
import MovieList from "./components/MovieList";

const App = () => {
  const [loading, setLoading] = useState(1);
  const [movies, setMovies] = useState([]);
  const api = 'http://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=Mission';

  const fetchMovie = () => {
    try {
      fetch(api)
        .then(response => {
          return response.json()
        })
        .then(result => {
          //movies = result.Search;
          setMovies(result.Search)
          setLoading(false)

          //console.log(movies.Search)
        });

    } catch (e) {
      if (e) {
        console.log(e.message, 'Try updating the API key in App.js')
      }
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);


  return (
    <>
      {
        loading ?
          <h1 className="text-center">
            ...fetching movie
          </h1> :
          <MovieList movies={movies} />
      }
    </>
  )
}

export default App;