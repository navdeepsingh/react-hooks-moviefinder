import React, { useEffect } from "react";

const MovieContext = React.createContext()


const MovieProvider = (props) => {
  const [loading, setLoading] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(0);
  const api = 'http://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=';

  const fetchMovie = (search) => {
    try {
      fetch(api + search)
        .then(response => {
          return response.json()
        })
        .then(result => {
          try {
            let uniqueResults = getUnique(result.Search)
            setMovies(uniqueResults)
            setLoading(false)
            setError(false)

          } catch (e) {
            setError(true)
            console.log('Error: ->', e.message)
          }
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

  const searchHandler = (e) => {
    fetchMovie(e.target.value);
  }

  useEffect(() => {
    fetchMovie('Mission')
  })

  return (
    <MovieContext.Provider value={{
      loading,
      movies,
      error,
      searchHandler
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}

const MovieConsumer = MovieContext.Consumer
export { MovieProvider, MovieConsumer, MovieContext }

