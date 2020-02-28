const movies = (state = [], action) => {
  if (action.type === 'HANDLE_SEARCH') {
    console.log('REDUCER ACTIVATED: ', action);
    return [
      ...state
    ]
  }
  return state;
}

export default movies;