const movies = (state = [], action) => {
  if (action.type === 'HANDLE_SEARCH') {
    console.log('REDUCER ACTIVATED: ', action);
    return [
      ...state
    ]
  }
  return state;
}

const api = 'http://www.omdbapi.com/?apikey=8dae9e85&type=movie&s=';
const fetchMovie = async (search) => {
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

export default movies;