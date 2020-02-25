import { connect } from "react-redux";
import MovieList from '../components/MovieList'

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(
  mapStateToProps
)(MovieList)