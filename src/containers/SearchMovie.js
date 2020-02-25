import { connect } from "react-redux";
import { handleSearch } from '../actions'
import MovieSearch from '../components/MovieSearch'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  searchHandler: text => {
    dispatch(handleSearch(text))
  }
})

const SearchText = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearch)

export default SearchText