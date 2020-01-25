import React from "react";

const MovieSearch = () => {
  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:</label>
        <input data-age="Love" onChange={(e) => handleSearchChange(e)} type="text" className="form-control" id="search" placeholder="KungFu" name="search" />
        <button type="submit" className="btn btn-primary">GO</button>
      </form>
    </div>
  )
}

export default MovieSearch;