import { HANDLE_SEARCH, FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions';

const initialState = {
  pending: false,
  movies: [],
  error: false
}

const movies = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SEARCH:
      return {
        ...state,
        movies: action.movies
      }
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        error: false,
        pending: false,
        movies: action.movies
      }
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default movies;
