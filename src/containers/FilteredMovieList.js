import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import MovieList from '../components/MovieList'
import fetchMoviesAction from '../actions/fetchMovies'
import { getMoviesPending, getMovies, getMoviesError } from '../reducers/moviesApi'

const mapStateToProps = state => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  pending: getMoviesPending(state)
})

const mapDispatchtoProps = dispatch => bindActionCreators({
  fetchMovies: fetchMoviesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(MovieList)