import { fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError } from './'

const fetchMovies = (text) => {
  return dispatch => {
    dispatch(fetchMoviesPending());
    fetchMovie(text)
      .then(res => {
        if (res.length) {
          dispatch(fetchMoviesSuccess(res))
          return res;
        } else {
          dispatch(fetchMoviesError(true));
        }
      })
      .catch(() => {
        dispatch(fetchMoviesError(true));
      })

  }
}

const api = 'https://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=';
const fetchMovie = async (search = 'Mission') => {
  let response = await fetch(api + search);
  let responseJson = await response.json()
  if (responseJson.Response === "True") {
    let uniqueResult = await getUnique(responseJson.Search)
    return uniqueResult;
  }
  return [];
}

const getUnique = async (arr) => {
  let uniqueArr = [];
  let uniqueActualArr = [];
  arr.map(arrItem => {
    if (!uniqueArr.includes(arrItem.imdbID)) {
      uniqueArr.push(arrItem.imdbID)
      uniqueActualArr.push(arrItem)
    }
  });
  return uniqueActualArr;
}


export default fetchMovies;
