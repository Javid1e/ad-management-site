import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
