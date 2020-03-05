import React from "react";

const MovieSearch = ({ movies, searchHandler }) => {
  const searchInput = React.createRef();

  return (
    <>
    <div className="container d-flex justify-content-center mt-5">
    <h1>Movie Finder</h1>
    </div>
    <div className="container d-flex justify-content-center mb-5 mt-2" >
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:&nbsp;</label>
        <input
          ref={searchInput}
          onChange={() => searchHandler(searchInput.current.value)}
          type="text"
          className="form-control"
          id="search"
          name="search"
          defaultValue="Mission"
        />
      </form>
    </div>
    </>
  )
}

export default MovieSearch
