const movies = (state = [], action) => {
  if (action.type === 'HANDLE_SEARCH') {
    return [
      ...state
    ]
  }
  return state;
}

export default movies;