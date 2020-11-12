import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./middleware/ErrorBoundary";
import Router from "./middleware/Router";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Provider>
          <Router />
          {/* <ReactQueryDevtools /> */}
        </Provider>
      </ReactQueryCacheProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
