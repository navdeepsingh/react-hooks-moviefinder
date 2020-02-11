import { HANDLE_SEARCH } from '../actionTypes';

const intialState = {
  movies: []
}

export default function (state = intialState, action) {
  if (action === HANDLE_SEARCH) {
    const { content } = action.payload;
    return {
      ...state,
      movies: [...state.movies, content]
    }
  } else {
    return state
  }
}
