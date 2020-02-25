import { connect } from "react-redux";
import { handleSearch } from '../actions'
import MovieSearch from '../components/MovieSearch'

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchHandler: () => {
      dispatch(handleSearch(ownProps.text))
    }
  }
}

const SearchText = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch)

export default SearchText