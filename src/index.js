import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.querySelector("#root"));