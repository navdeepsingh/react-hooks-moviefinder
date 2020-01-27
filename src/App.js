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
          let uniqueResults = getUnique(result.Search)
          setMovies(uniqueResults)
          setLoading(false)
        });
    } catch (e) {
      if (e) {
        console.log(e.message, 'Try updating the API key')
      }
    }
  }

  const getUnique = (arr) => {
    let uniqueArr = [];
    let uniqueActualArr = [];
    arr.map(arrItem => {
      if (!uniqueArr.includes(arrItem.imdbID)) {
        uniqueArr.push(arrItem.imdbID)
        uniqueActualArr.push(arrItem)
      }
    });
    return uniqueActualArr;
  }

  useEffect(() => {
    fetchMovie();
  }, []);


  return (
    <>
      {
        loading ?
          <h1 className="text-center">
            ...fetching movies
          </h1> :
          <MovieList movies={movies} />
      }
    </>
  )
}

export default App;