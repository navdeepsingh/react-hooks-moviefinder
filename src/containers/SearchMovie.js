import { connect } from "react-redux";
import fetchMovies from '../actions/fetchMovies'
import MovieSearch from '../components/MovieSearch'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  searchHandler: text => {
    dispatch(fetchMovies(text))
  }
})

const SearchText = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch)

export default SearchText