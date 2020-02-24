import { connect } from "react-redux";
import { handleSearch } from '../actions'
import MovieSearch from '../components/MovieSearch'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.children);
  return {
    movies: 'test'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(handleSearch(ownProps.text))
    }
  }
}

const SearchText = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch)

export default SearchText