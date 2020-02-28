import { fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError } from './'

const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesPending());
    fetchMovie()
      .then(res => {
        if (res.length) {
          dispatch(fetchMoviesSuccess(res))
          return res;
        }
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      })

  }
}

const api = 'http://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=';
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