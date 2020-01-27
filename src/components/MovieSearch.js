import React, { useState } from "react";

const MovieSearch = ({ searchHandler }) => {
  const searchInput = React.createRef();




  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:</label>
        <input ref={searchInput} onChange={(e) => searchHandler(e)} type="text" className="form-control" id="search" name="search" defaultValue="Mission" />
      </form>
    </div>
  )
}

export default MovieSearch;