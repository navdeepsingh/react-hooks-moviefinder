import { combineReducers } from 'redux'
import movies from './movies'
import moviesApi from './moviesApi'

export default combineReducers({ movies, moviesApi })