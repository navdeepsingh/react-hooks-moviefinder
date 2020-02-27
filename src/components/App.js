import React from 'react';
import SearchMovie from "../containers/SearchMovie";
import FilteredMovieList from "../containers/FilteredMovieList";
import "../App.css";

const App = () => {

  return (
    <>
      <SearchMovie />
      <FilteredMovieList />
    </>
  )
}

export default App;