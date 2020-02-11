import React from 'react';
import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {
  // const api = 'http://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=';
  // const fetchMovie = (search) => {
  //   try {
  //     fetch(api + search)
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(result => {

  //         try {
  //           let uniqueResults = getUnique(result.Search)
  //           setMovies(uniqueResults)
  //           setLoading(false)
  //           setError(false)

  //         } catch (e) {
  //           setError(true)
  //           console.log('Error: ->', e.message)
  //         }
  //       });
  //   } catch (e) {
  //     if (e) {
  //       console.log(e.message, 'Try updating the API key')
  //     }
  //   }
  // }

  // const getUnique = (arr) => {
  //   let uniqueArr = [];
  //   let uniqueActualArr = [];
  //   arr.map(arrItem => {
  //     if (!uniqueArr.includes(arrItem.imdbID)) {
  //       uniqueArr.push(arrItem.imdbID)
  //       uniqueActualArr.push(arrItem)
  //     }
  //   });
  //   return uniqueActualArr;
  // }

  const searchHandler = (e) => {
    //fetchMovie(e.target.value);
    // dispatches actions to handle search
    // sets state back to empty string
  }

  // useEffect(() => {
  //   //fetchMovie('Mission');
  // }, []);


  return (
    <>
      <MovieSearch />
      <MovieList />
    </>
  )
}

export default App;