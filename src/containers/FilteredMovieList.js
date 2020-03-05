import { connect } from "react-redux";
import MovieList from '../components/MovieList'
import fetchMoviesAction from '../actions/fetchMovies'

const mapStateToProps = state => ({
  error: state.global.error,
  movies: state.global.movies,
  pending: state.global.pending
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
