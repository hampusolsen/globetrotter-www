import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./middleware/ErrorBoundary";
import Router from "./middleware/Router";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider>
          <Router />
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
