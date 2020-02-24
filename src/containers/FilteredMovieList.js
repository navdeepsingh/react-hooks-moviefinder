import { connect } from "react-redux";
import MovieList from '../components/MovieList'

const mapStateToProps = state => ({
  movies: [{ id: 1 }]
})

export default connect(
  mapStateToProps
)(MovieList)