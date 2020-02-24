import React from "react";

import { connect } from 'react-redux'
import { handleSearch } from '../redux/actions'

const MovieSearch = ({ props }) => {
  const searchInput = React.createRef();

  const searchHandler = () => {
    console.log(searchInput.current.value);

    props.handleSearch(searchInput.current.value)
  }

  return (
    <div className="container d-flex justify-content-center my-5">
      <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search" >Search:</label>
        <input ref={searchInput} onChange={(e) => searchHandler(e)} type="text" className="form-control" id="search" name="search" defaultValue="Mission" />
      </form>
    </div>
  )
}

export default connect(
  null,
  { handleSearch }
)(MovieSearch)