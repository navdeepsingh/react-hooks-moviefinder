import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { MovieProvider } from "./context/index"

ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>
  , document.querySelector("#root"));