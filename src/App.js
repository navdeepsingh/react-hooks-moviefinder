import React, { useContext } from 'react';
import MovieList from "./components/MovieList";
import { MovieContext } from "./context/index"

const App = () => {
  const appContext = useContext(MovieContext)
  const { loading } = appContext

  return (
    <>
      {
        loading ?
          <h1 className="text-center">
            ...fetching movies
          </h1> :
          <MovieList />
      }
    </>
  )
}

export default App;