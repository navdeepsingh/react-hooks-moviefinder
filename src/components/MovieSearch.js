import React from "react";

const MovieSearch = ({ movies, searchHandler }) => {
  const searchInput = React.createRef();

  return (
    <div className="container d-flex justify-content-center my-5" >
      {movies}
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:</label>
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
  )
}

export default MovieSearch