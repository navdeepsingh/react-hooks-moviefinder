export const HANDLE_SEARCH = 'HANDLE_SEARCH'
export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const handleSearch = text => ({
  type: HANDLE_SEARCH,
  text
})

export const fetchMoviesPending = () => ({
  type: FETCH_MOVIES_PENDING
})

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies
})

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  error
})