import { connect } from "react-redux";
import MovieList from '../components/MovieList'
import fetchMoviesAction from '../actions/fetchMovies'

const mapStateToProps = state => ({
  error: state.movies.error,
  movies: state.movies.movies,
  pending: state.movies.pending
})

const mapDispatchtoProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMoviesAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(MovieList)